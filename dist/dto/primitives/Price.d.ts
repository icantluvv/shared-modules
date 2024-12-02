import { Decimal } from "../tsPrimitives/Decimal";
export declare class Price {
    amount: Decimal;
    currency: string;
    constructor(amount: Decimal, currency: string);
}
