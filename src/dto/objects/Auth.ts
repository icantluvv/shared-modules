import { IsEmail, IsString, IsOptional, IsBoolean, ValidateNested } from 'class-validator';
import { Token } from '../primitives/Token';
import { User } from './User';
import { Type } from 'class-transformer';

export namespace Auth {
    export namespace Parameters {
        export class AppleToken {
            @IsString()
            token: string;

            @IsString()
            @IsOptional()
            firstName?: string;

            @IsString()
            @IsOptional()
            lastName?: string;

            @IsEmail()
            @IsOptional()
            email?: string;

            @IsBoolean()
            @IsOptional()
            emailVerified?: boolean;

            constructor(
                token: string,
                firstName?: string,
                lastName?: string,
                email?: string,
                emailVerified?: boolean
            ) {
                this.token = token;
                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.emailVerified = emailVerified;
            }
        }

        export class GoogleToken {
            @IsString()
            token: string;

            @IsString()
            @IsOptional()
            firstName?: string;

            @IsString()
            @IsOptional()
            lastName?: string;

            constructor(
                token: string,
                firstName?: string,
                lastName?: string,
            ) {
                this.token = token;
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }

        export class RefreshToken {
            @IsString()
            refreshToken: string;

            constructor(refreshToken: string) {
                this.refreshToken = refreshToken;
            }
        }
    }

    export namespace Responses {
        export class Full {
            @ValidateNested()
            @Type(() => Token)
            accessToken: Token;

            @ValidateNested()
            @Type(() => Token)
            refreshToken: Token;

            @ValidateNested()
            @Type(() => User.Responses.Full)
            user: User.Responses.Full;

            constructor(
                accessToken: Token,
                refreshToken: Token,
                user: User.Responses.Full
            ) {
                this.accessToken = accessToken;
                this.refreshToken = refreshToken;
                this.user = user;
            }
        }

        export class Partial {
            @ValidateNested()
            @Type(() => Token)
            accessToken: Token;

            @ValidateNested()
            @Type(() => Token)
            @IsOptional()
            refreshToken?: Token;

            constructor(
                accessToken: Token,
                refreshToken?: Token
            ) {
                this.accessToken = accessToken;
                this.refreshToken = refreshToken;
            }
        }
    }
}
