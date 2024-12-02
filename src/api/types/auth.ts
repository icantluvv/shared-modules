export namespace Auth {
    export namespace Parameters {
        export interface GoogleToken {
            token: string;
        }

        export interface AppleToken {
            token: string;
        }

        export interface RefreshToken {
            refreshToken: string;
        }
    }

    export namespace Responses {
        export interface Tokens {
            accessToken: {
                value: string;
                expiresIn: number;
            };
            refreshToken: {
                value: string;
                expiresIn: number;
            };
        }

        export interface User {
            id: string;
            email: string;
            name: string;
        }

        export interface Full extends Tokens {
            user: User;
        }
    }
}
