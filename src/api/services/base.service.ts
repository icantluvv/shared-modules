import { AxiosInstance } from 'axios';
import { StorageService } from '../storage/types';
import { Auth } from '../types';

export abstract class BaseService {
    constructor(
        protected readonly client: AxiosInstance,
        protected readonly storage: StorageService
    ) {}

    protected async handleAuthResponse(tokens: Auth.Responses.Tokens): Promise<void> {
        await this.storage.setTokens(tokens);
    }
}
