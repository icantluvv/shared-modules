import { BaseService } from './base.service';
import { Auth } from '../types';
export declare class AuthService extends BaseService {
    googleAuth(params: Auth.Parameters.GoogleToken): Promise<Auth.Responses.Full>;
    appleAuth(params: Auth.Parameters.AppleToken): Promise<Auth.Responses.Full>;
    testAuth(token: string): Promise<Auth.Responses.Full>;
}
