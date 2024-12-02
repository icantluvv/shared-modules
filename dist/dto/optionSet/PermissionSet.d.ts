export declare class PermissionSet {
    value: number;
    static OWNER: number;
    static APPOINTMENTS: number;
    static STATISTIC: number;
    static EMPLOYEE: number;
    static TIMETABLE: number;
    static NOTIFICATIONS: number;
    static SALON: number;
    static FINANCE: number;
    static PROCEDURE: number;
    static CONTACT: number;
    static POSITION: number;
    static SALARY: number;
    static NONE: number;
    static FULL: number;
    constructor(...permissions: number[]);
    addPermission(permission: number): void;
    removePermission(permission: number): void;
    hasPermission(permission: number): boolean;
    toJSON(): number;
    static fromJSON(json: any): PermissionSet;
}
