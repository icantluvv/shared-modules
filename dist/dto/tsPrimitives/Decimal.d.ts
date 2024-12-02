export declare class Decimal {
    private decimal;
    constructor(value: string);
    toJSON(): string;
    static fromJSON(json: any): Decimal;
}
