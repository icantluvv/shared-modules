"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COOKIE_CONFIG = exports.API_CONFIG = void 0;
exports.API_CONFIG = {
    BASE_URL: process.env.URL_BACKEND_MAESTRI || 'http://localhost:3000',
    TIMEOUT: 15000,
    DEFAULT_HEADERS: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Accept-Language': 'en-US;q=1.0'
    }
};
exports.COOKIE_CONFIG = {
    ACCESS_TOKEN: {
        name: 'accessToken',
        options: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/'
        }
    },
    REFRESH_TOKEN: {
        name: 'refreshToken',
        options: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/'
        }
    },
    DEVICE_ID: {
        name: 'deviceId',
        options: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 365 * 24 * 60 * 60
        }
    }
};
