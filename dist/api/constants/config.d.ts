export declare const API_CONFIG: {
    readonly BASE_URL: string;
    readonly TIMEOUT: 15000;
    readonly DEFAULT_HEADERS: {
        readonly Accept: "*/*";
        readonly 'Content-Type': "application/json";
        readonly 'Accept-Language': "en-US;q=1.0";
    };
};
export declare const COOKIE_CONFIG: {
    readonly ACCESS_TOKEN: {
        readonly name: "accessToken";
        readonly options: {
            readonly httpOnly: true;
            readonly secure: boolean;
            readonly sameSite: "strict";
            readonly path: "/";
        };
    };
    readonly REFRESH_TOKEN: {
        readonly name: "refreshToken";
        readonly options: {
            readonly httpOnly: true;
            readonly secure: boolean;
            readonly sameSite: "strict";
            readonly path: "/";
        };
    };
    readonly DEVICE_ID: {
        readonly name: "deviceId";
        readonly options: {
            readonly httpOnly: true;
            readonly secure: boolean;
            readonly sameSite: "strict";
            readonly path: "/";
            readonly maxAge: number;
        };
    };
};
