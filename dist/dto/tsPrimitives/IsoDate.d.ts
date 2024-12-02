export declare class IsoDate {
    private date;
    constructor(date?: Date);
    toJSON(): string;
    fromJSON(json: any): IsoDate;
}
