import { Token } from "../primitives/Token";
import { User } from "./User";
export declare namespace Auth {
    namespace Parameters {
        class AppleToken {
            token: string;
            firstName?: string;
            lastName?: string;
            emailVerified?: boolean;
            email?: string;
            constructor(token: string, firstName?: string, lastName?: string, email?: string, emailVerified?: boolean);
        }
        class GoogleToken {
            token: string;
            firstName?: string;
            lastName?: string;
            constructor(token: string, firstName?: string, lastName?: string);
        }
    }
    namespace Responses {
        class Full {
            accessToken: Token;
            refreshToken: Token;
            user: User.Responses.Full;
            constructor(accessToken: Token, refreshToken: Token, user: User.Responses.Full);
        }
        class Partial {
            accessToken: Token;
            refreshToken?: Token;
            constructor(accessToken: Token, refreshToken?: Token);
        }
    }
}
