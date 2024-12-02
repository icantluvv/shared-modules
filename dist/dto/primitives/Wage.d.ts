import { PaymentPeriod } from "../enums/PaymentPeriod";
import { Price } from "../primitives/Price";
export declare class Wage {
    price: Price;
    period: PaymentPeriod;
    constructor(price: Price, period: PaymentPeriod);
}
