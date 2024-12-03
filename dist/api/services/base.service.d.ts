import { AxiosInstance } from 'axios';
import { StorageService } from '../storage/types';
import { Auth } from "../../dto/objects/Auth";
export declare abstract class BaseService {
    protected readonly client: AxiosInstance;
    protected readonly storage: StorageService;
    constructor(client: AxiosInstance, storage: StorageService);
    protected handleAuthResponse(tokens: Auth.Responses.Partial): Promise<void>;
}
