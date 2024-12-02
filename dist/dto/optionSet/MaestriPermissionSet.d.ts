export declare class MaestriPermissionSet {
    value: number;
    static SERVICE: number;
    static NONE: number;
    static FULL: number;
    constructor(...permissions: number[]);
    addPermission(permission: number): void;
    removePermission(permission: number): void;
    hasPermission(permission: number): boolean;
    toJSON(): number;
    static fromJSON(json: any): MaestriPermissionSet;
}
