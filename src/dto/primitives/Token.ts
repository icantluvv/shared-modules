import { IsString, IsNumber } from 'class-validator';

export class Token {
    @IsString()
    value: string;

    @IsNumber()
    expiresIn: number;

    constructor(value: string, expiresIn: number) {
        this.value = value;
        this.expiresIn = expiresIn;
    }
}
