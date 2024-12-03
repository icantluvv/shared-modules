"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientStorage = createClientStorage;
const constants_1 = require("../constants");
function createClientStorage() {
    return {
        async getAccessToken() {
            const value = localStorage.getItem(constants_1.COOKIE_CONFIG.ACCESS_TOKEN.name);
            return value ? JSON.parse(value).value : null;
        },
        async getRefreshToken() {
            const value = localStorage.getItem(constants_1.COOKIE_CONFIG.REFRESH_TOKEN.name);
            return value ? JSON.parse(value).value : null;
        },
        async getDeviceId() {
            return localStorage.getItem(constants_1.COOKIE_CONFIG.DEVICE_ID.name);
        },
        async setTokens(tokens) {
            localStorage.setItem(constants_1.COOKIE_CONFIG.ACCESS_TOKEN.name, JSON.stringify({
                value: tokens.accessToken.value,
                expiresIn: tokens.accessToken.expiresIn
            }));
            tokens.refreshToken &&
                localStorage.setItem(constants_1.COOKIE_CONFIG.REFRESH_TOKEN.name, JSON.stringify({
                    value: tokens.refreshToken.value,
                    expiresIn: tokens.refreshToken.expiresIn
                }));
        },
        async setDeviceId(id) {
            localStorage.setItem(constants_1.COOKIE_CONFIG.DEVICE_ID.name, id);
        },
        async clearAll() {
            localStorage.removeItem(constants_1.COOKIE_CONFIG.ACCESS_TOKEN.name);
            localStorage.removeItem(constants_1.COOKIE_CONFIG.REFRESH_TOKEN.name);
        }
    };
}
