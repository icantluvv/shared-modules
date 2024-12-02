export declare class UUID {
    uuid: string;
    constructor(uuid?: string);
    toJSON(): string;
    static fromJSON(json: any): UUID;
}
