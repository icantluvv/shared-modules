export declare namespace Auth {
    namespace Parameters {
        interface GoogleToken {
            token: string;
        }
        interface AppleToken {
            token: string;
        }
        interface RefreshToken {
            refreshToken: string;
        }
    }
    namespace Responses {
        interface Tokens {
            accessToken: {
                value: string;
                expiresIn: number;
            };
            refreshToken: {
                value: string;
                expiresIn: number;
            };
        }
        interface User {
            id: string;
            email: string;
            name: string;
        }
        interface Full extends Tokens {
            user: User;
        }
    }
}
