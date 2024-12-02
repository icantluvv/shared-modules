import { AxiosInstance } from 'axios';
import { StorageService } from '../storage/types';
export declare class ApiClient {
    private storage;
    private client;
    constructor(storage: StorageService);
    private createClient;
    private setupInterceptors;
    getAxiosInstance(): AxiosInstance;
}
