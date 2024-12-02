export const API_CONFIG = {
    BASE_URL: process.env.URL_BACKEND_MAESTRI || 'http://localhost:3000',
    TIMEOUT: 15000,
    DEFAULT_HEADERS: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Accept-Language': 'en-US;q=1.0'
    }
} as const;

export const COOKIE_CONFIG = {
    ACCESS_TOKEN: {
        name: 'accessToken' as const,
        options: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict' as const,
            path: '/'
        }
    },
    REFRESH_TOKEN: {
        name: 'refreshToken' as const,
        options: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict' as const,
            path: '/'
        }
    },
    DEVICE_ID: {
        name: 'deviceId' as const,
        options: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict' as const,
            path: '/',
            maxAge: 365 * 24 * 60 * 60
        }
    }
} as const;
