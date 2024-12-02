import { AxiosInstance } from 'axios';
import { StorageService } from '../storage/types';
import { Auth } from '../types/auth';
export declare abstract class BaseService {
    protected readonly client: AxiosInstance;
    protected readonly storage: StorageService;
    constructor(client: AxiosInstance, storage: StorageService);
    protected handleAuthResponse(tokens: Auth.Responses.Tokens): Promise<void>;
}
