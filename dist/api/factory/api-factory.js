"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFactory = void 0;
const client_1 = require("../client");
const services_1 = require("../services");
class ApiFactory {
    constructor(storage) {
        this.storage = storage;
        this.services = new Map();
        this.apiClient = new client_1.ApiClient(storage);
    }
    getAuthService() {
        return this.getService('auth', () => new services_1.AuthService(this.apiClient.getAxiosInstance(), this.storage));
    }
    getService(key, factory) {
        if (!this.services.has(key)) {
            this.services.set(key, factory());
        }
        return this.services.get(key);
    }
}
exports.ApiFactory = ApiFactory;
