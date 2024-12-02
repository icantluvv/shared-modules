import { StorageService } from "./types";
import { COOKIE_CONFIG } from "../constants";

export function createClientStorage(): StorageService {
    return {
        async getAccessToken() {
            const value = localStorage.getItem(COOKIE_CONFIG.ACCESS_TOKEN.name);
            return value ? JSON.parse(value).value : null;
        },

        async getRefreshToken() {
            const value = localStorage.getItem(COOKIE_CONFIG.REFRESH_TOKEN.name);
            return value ? JSON.parse(value).value : null;
        },

        async getDeviceId() {
            return localStorage.getItem(COOKIE_CONFIG.DEVICE_ID.name);
        },

        async setTokens(tokens) {
            localStorage.setItem(COOKIE_CONFIG.ACCESS_TOKEN.name, JSON.stringify({
                value: tokens.accessToken.value,
                expiresIn: tokens.accessToken.expiresIn
            }));

            localStorage.setItem(COOKIE_CONFIG.REFRESH_TOKEN.name, JSON.stringify({
                value: tokens.refreshToken.value,
                expiresIn: tokens.refreshToken.expiresIn
            }));
        },

        async setDeviceId(id) {
            localStorage.setItem(COOKIE_CONFIG.DEVICE_ID.name, id);
        },

        async clearAll() {
            localStorage.removeItem(COOKIE_CONFIG.ACCESS_TOKEN.name);
            localStorage.removeItem(COOKIE_CONFIG.REFRESH_TOKEN.name);
        }
    };
}
