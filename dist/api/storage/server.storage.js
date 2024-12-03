"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerStorage = createServerStorage;
const headers_1 = require("next/headers");
const constants_1 = require("../constants");
function createServerStorage() {
    return {
        async getAccessToken() {
            var _a;
            const value = (_a = (0, headers_1.cookies)().get(constants_1.COOKIE_CONFIG.ACCESS_TOKEN.name)) === null || _a === void 0 ? void 0 : _a.value;
            return value ? JSON.parse(value).value : null;
        },
        async getRefreshToken() {
            var _a;
            const value = (_a = (0, headers_1.cookies)().get(constants_1.COOKIE_CONFIG.REFRESH_TOKEN.name)) === null || _a === void 0 ? void 0 : _a.value;
            return value ? JSON.parse(value).value : null;
        },
        async getDeviceId() {
            var _a, _b;
            return (_b = (_a = (0, headers_1.cookies)().get(constants_1.COOKIE_CONFIG.DEVICE_ID.name)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null;
        },
        async setTokens(tokens) {
            (0, headers_1.cookies)().set(constants_1.COOKIE_CONFIG.ACCESS_TOKEN.name, JSON.stringify({
                value: tokens.accessToken.value,
                expiresIn: tokens.accessToken.expiresIn
            }), Object.assign(Object.assign({}, constants_1.COOKIE_CONFIG.ACCESS_TOKEN.options), { maxAge: Math.floor(tokens.accessToken.expiresIn / 1000) }));
            tokens.refreshToken && (0, headers_1.cookies)().set(constants_1.COOKIE_CONFIG.REFRESH_TOKEN.name, JSON.stringify({
                value: tokens.refreshToken.value,
                expiresIn: tokens.refreshToken.expiresIn
            }), Object.assign(Object.assign({}, constants_1.COOKIE_CONFIG.REFRESH_TOKEN.options), { maxAge: Math.floor(tokens.refreshToken.expiresIn / 1000) }));
        },
        async setDeviceId(id) {
            (0, headers_1.cookies)().set(constants_1.COOKIE_CONFIG.DEVICE_ID.name, id, constants_1.COOKIE_CONFIG.DEVICE_ID.options);
        },
        async clearAll() {
            (0, headers_1.cookies)().delete(constants_1.COOKIE_CONFIG.ACCESS_TOKEN.name);
            (0, headers_1.cookies)().delete(constants_1.COOKIE_CONFIG.REFRESH_TOKEN.name);
        }
    };
}
