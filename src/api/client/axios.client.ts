import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import { StorageService } from '../storage/types';
import { API_CONFIG } from '../constants';
import { API_ENDPOINTS } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export class ApiClient {
    private client: AxiosInstance;

    constructor(private storage: StorageService) {
        this.client = this.createClient();
    }

    private createClient(): AxiosInstance {
        const client = axios.create({
            baseURL: API_CONFIG.BASE_URL,
            timeout: API_CONFIG.TIMEOUT,
            headers: API_CONFIG.DEFAULT_HEADERS
        } as CreateAxiosDefaults);

        this.setupInterceptors(client);
        return client;
    }

    private setupInterceptors(client: AxiosInstance): void {
        client.interceptors.request.use(
            async (config) => {
                const token = await this.storage.getAccessToken();
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                let deviceId = await this.storage.getDeviceId();
                if (!deviceId) {
                    deviceId = uuidv4();
                    await this.storage.setDeviceId(deviceId);
                }
                config.headers['Device-ID'] = deviceId;

                return config;
            }
        );

        client.interceptors.response.use(
            response => response,
            async (error) => {
                const originalRequest = error.config;

                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;

                    try {
                        const refreshToken = await this.storage.getRefreshToken();
                        if (!refreshToken) throw new Error('No refresh token');

                        const response = await client.post(API_ENDPOINTS.AUTH.REFRESH, { refreshToken });
                        await this.storage.setTokens(response.data);
                        return client(originalRequest);
                    } catch {
                        await this.storage.clearAll();
                        throw error;
                    }
                }

                throw error;
            }
        );
    }

    getAxiosInstance(): AxiosInstance {
        return this.client;
    }
}
