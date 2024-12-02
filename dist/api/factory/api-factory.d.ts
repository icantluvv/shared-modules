import { AuthService } from '../services';
import { StorageService } from '../storage/types';
export declare class ApiFactory {
    private readonly storage;
    private readonly apiClient;
    private readonly services;
    constructor(storage: StorageService);
    getAuthService(): AuthService;
    private getService;
}
