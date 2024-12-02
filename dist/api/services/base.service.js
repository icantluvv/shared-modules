"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(client, storage) {
        this.client = client;
        this.storage = storage;
    }
    async handleAuthResponse(tokens) {
        await this.storage.setTokens(tokens);
    }
}
exports.BaseService = BaseService;
