import {Auth} from "../../dto/objects/Auth";


export interface StorageService {
    getAccessToken(): Promise<string | null>;
    getRefreshToken(): Promise<string | null>;
    getDeviceId(): Promise<string | null>;
    setTokens(tokens: Auth.Responses.Partial): Promise<void>;
    setDeviceId(id: string): Promise<void>;
    clearAll(): Promise<void>;
}
