import { ApiClient } from '../client';
import { AuthService } from '../services';
import { StorageService } from '../storage/types';

export class ApiFactory {
    private readonly apiClient: ApiClient;
    private readonly services: Map<string, any> = new Map();

    constructor(private readonly storage: StorageService) {
        this.apiClient = new ApiClient(storage);
    }

    getAuthService(): AuthService {
        return this.getService('auth', () => new AuthService(
            this.apiClient.getAxiosInstance(),
            this.storage
        ));
    }

    private getService<T>(key: string, factory: () => T): T {
        if (!this.services.has(key)) {
            this.services.set(key, factory());
        }
        return this.services.get(key);
    }
}
