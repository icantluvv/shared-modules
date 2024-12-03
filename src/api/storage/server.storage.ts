import { cookies } from 'next/headers';
import { StorageService } from './types';
import { COOKIE_CONFIG } from "../constants";

export function createServerStorage(): StorageService {
    return {
        async getAccessToken() {
            const value = cookies().get(COOKIE_CONFIG.ACCESS_TOKEN.name)?.value;
            return value ? JSON.parse(value).value : null;
        },

        async getRefreshToken() {
            const value = cookies().get(COOKIE_CONFIG.REFRESH_TOKEN.name)?.value;
            return value ? JSON.parse(value).value : null;
        },

        async getDeviceId() {
            return cookies().get(COOKIE_CONFIG.DEVICE_ID.name)?.value ?? null;
        },

        async setTokens(tokens) {
            cookies().set(COOKIE_CONFIG.ACCESS_TOKEN.name, JSON.stringify({
                value: tokens.accessToken.value,
                expiresIn: tokens.accessToken.expiresIn
            }), {
                ...COOKIE_CONFIG.ACCESS_TOKEN.options,
                maxAge: Math.floor(tokens.accessToken.expiresIn / 1000)
            });

            tokens.refreshToken && cookies().set(COOKIE_CONFIG.REFRESH_TOKEN.name, JSON.stringify({
                value: tokens.refreshToken.value,
                expiresIn: tokens.refreshToken.expiresIn
            }), {
                ...COOKIE_CONFIG.REFRESH_TOKEN.options,
                maxAge: Math.floor(tokens.refreshToken.expiresIn / 1000)
            });
        },

        async setDeviceId(id) {
            cookies().set(COOKIE_CONFIG.DEVICE_ID.name, id, COOKIE_CONFIG.DEVICE_ID.options);
        },

        async clearAll() {
            cookies().delete(COOKIE_CONFIG.ACCESS_TOKEN.name);
            cookies().delete(COOKIE_CONFIG.REFRESH_TOKEN.name);
        }
    };
}
