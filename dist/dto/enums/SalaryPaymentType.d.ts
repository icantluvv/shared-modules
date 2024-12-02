import { Int } from "../tsPrimitives/Int";
import { Price } from "../primitives/Price";
export declare class SalaryPaymentType {
    type: SalaryPaymentType.Types;
    constructor(type: SalaryPaymentType.Types);
    toJSON(): {
        percent: SalaryPaymentType.Percent;
        value?: undefined;
    } | {
        value: SalaryPaymentType.Value;
        percent?: undefined;
    } | undefined;
    static fromJSON(json: any): SalaryPaymentType;
}
export declare namespace SalaryPaymentType {
    type Types = SalaryPaymentType.Percent | SalaryPaymentType.Value;
    class Percent {
        percent: Int;
        constructor(percent: Int);
    }
    class Value {
        value: Price;
        constructor(value: Price);
    }
}
