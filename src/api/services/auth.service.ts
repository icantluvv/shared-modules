import { BaseService } from './base.service';
import { Auth } from '../types';
import { API_ENDPOINTS } from '../constants';

export class AuthService extends BaseService {

    async googleAuth(params: Auth.Parameters.GoogleToken): Promise<Auth.Responses.Full> {
        const response = await this.client.post(API_ENDPOINTS.AUTH.GOOGLE, params);
        await this.handleAuthResponse(response.data);
        return response.data;
    }

    async appleAuth(params: Auth.Parameters.AppleToken): Promise<Auth.Responses.Full> {
        const response = await this.client.post(API_ENDPOINTS.AUTH.APPLE, params);
        await this.handleAuthResponse(response.data);
        return response.data;
    }

    async testAuth(token: string): Promise<Auth.Responses.Full> {
        const response = await this.client.post(`${API_ENDPOINTS.AUTH.TEST}/${token}`);
        await this.handleAuthResponse(response.data);
        return response.data;
    }
}
