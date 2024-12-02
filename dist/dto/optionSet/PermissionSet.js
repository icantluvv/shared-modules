"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionSet = void 0;
const class_validator_1 = require("class-validator");
class PermissionSet {
    constructor(...permissions) {
        this.value = permissions.reduce((acc, permission) => acc | permission, PermissionSet.NONE);
    }
    addPermission(permission) {
        this.value |= permission;
    }
    removePermission(permission) {
        this.value &= ~permission;
    }
    hasPermission(permission) {
        return (this.value & permission) === permission;
    }
    toJSON() {
        return this.value;
    }
    static fromJSON(json) {
        if (!(0, class_validator_1.isInt)(json)) {
            throw new Error("Invalid Int");
        }
        return new PermissionSet(Number(json));
    }
}
exports.PermissionSet = PermissionSet;
PermissionSet.OWNER = 1 << 0;
PermissionSet.APPOINTMENTS = 1 << 1;
PermissionSet.STATISTIC = 1 << 2;
PermissionSet.EMPLOYEE = 1 << 3;
PermissionSet.TIMETABLE = 1 << 4;
PermissionSet.NOTIFICATIONS = 1 << 5;
PermissionSet.SALON = 1 << 6;
PermissionSet.FINANCE = 1 << 7;
PermissionSet.PROCEDURE = 1 << 8;
PermissionSet.CONTACT = 1 << 9;
PermissionSet.POSITION = 1 << 10;
PermissionSet.SALARY = 1 << 11;
PermissionSet.NONE = 0;
PermissionSet.FULL = PermissionSet.APPOINTMENTS |
    PermissionSet.STATISTIC |
    PermissionSet.EMPLOYEE |
    PermissionSet.TIMETABLE |
    PermissionSet.NOTIFICATIONS |
    PermissionSet.SALON |
    PermissionSet.FINANCE |
    PermissionSet.PROCEDURE |
    PermissionSet.CONTACT |
    PermissionSet.POSITION |
    PermissionSet.SALARY;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], PermissionSet.prototype, "value", void 0);
