"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const base_service_1 = require("./base.service");
const constants_1 = require("../constants");
class AuthService extends base_service_1.BaseService {
    async googleAuth(params) {
        const response = await this.client.post(constants_1.API_ENDPOINTS.AUTH.GOOGLE, params);
        await this.handleAuthResponse(response.data);
        return response.data;
    }
    async appleAuth(params) {
        const response = await this.client.post(constants_1.API_ENDPOINTS.AUTH.APPLE, params);
        await this.handleAuthResponse(response.data);
        return response.data;
    }
    async testAuth(token) {
        const response = await this.client.post(`${constants_1.API_ENDPOINTS.AUTH.TEST}/${token}`);
        await this.handleAuthResponse(response.data);
        return response.data;
    }
}
exports.AuthService = AuthService;
