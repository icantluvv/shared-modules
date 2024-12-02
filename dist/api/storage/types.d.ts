import { Auth } from "../types";
export interface StorageService {
    getAccessToken(): Promise<string | null>;
    getRefreshToken(): Promise<string | null>;
    getDeviceId(): Promise<string | null>;
    setTokens(tokens: Auth.Responses.Tokens): Promise<void>;
    setDeviceId(id: string): Promise<void>;
    clearAll(): Promise<void>;
}
