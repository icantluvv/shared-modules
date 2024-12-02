export declare class UserRoleSet {
    value: number;
    static CUSTOMER: number;
    static PROFESSIONAL: number;
    static NONE: number;
    static ALL: number;
    constructor(...permissions: number[]);
    addPermission(permission: number): void;
    removePermission(permission: number): void;
    hasPermission(permission: number): boolean;
    toJSON(): number;
    static fromJSON(json: any): UserRoleSet;
}
