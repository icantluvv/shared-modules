export declare class Int {
    private int;
    constructor(value: number);
    toJSON(): number;
    static fromJSON(json: any): Int;
}
