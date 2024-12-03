"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
const constants_2 = require("../constants");
const uuid_1 = require("uuid");
class ApiClient {
    constructor(storage) {
        this.storage = storage;
        this.client = this.createClient();
    }
    createClient() {
        const client = axios_1.default.create({
            baseURL: constants_1.API_CONFIG.BASE_URL,
            timeout: constants_1.API_CONFIG.TIMEOUT,
            headers: constants_1.API_CONFIG.DEFAULT_HEADERS
        });
        this.setupInterceptors(client);
        return client;
    }
    setupInterceptors(client) {
        client.interceptors.request.use(async (config) => {
            const token = await this.storage.getAccessToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            let deviceId = await this.storage.getDeviceId();
            if (!deviceId) {
                deviceId = (0, uuid_1.v4)();
                await this.storage.setDeviceId(deviceId);
            }
            config.headers['Device-ID'] = deviceId;
            return config;
        });
        client.interceptors.response.use(response => response, async (error) => {
            var _a;
            const originalRequest = error.config;
            if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    const refreshToken = await this.storage.getRefreshToken();
                    if (!refreshToken)
                        throw new Error('No refresh token');
                    const response = await client.post(constants_2.API_ENDPOINTS.AUTH.REFRESH, { refreshToken });
                    await this.storage.setTokens(response.data);
                    return client(originalRequest);
                }
                catch (_b) {
                    await this.storage.clearAll();
                    throw error;
                }
            }
            throw error;
        });
    }
    getAxiosInstance() {
        return this.client;
    }
}
exports.ApiClient = ApiClient;
