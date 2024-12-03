import { AxiosInstance } from 'axios';
import { StorageService } from '../storage/types';
import {Auth} from "../../dto/objects/Auth";

export abstract class BaseService {
    constructor(
        protected readonly client: AxiosInstance,
        protected readonly storage: StorageService
    ) {}

    protected async handleAuthResponse(tokens: Auth.Responses.Partial): Promise<void> {
        await this.storage.setTokens(tokens);
    }
}
