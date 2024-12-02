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
exports.UserRoleSet = void 0;
const class_validator_1 = require("class-validator");
class UserRoleSet {
    constructor(...permissions) {
        this.value = permissions.reduce((acc, permission) => acc | permission, UserRoleSet.NONE);
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
        return new UserRoleSet(Number(json));
    }
}
exports.UserRoleSet = UserRoleSet;
UserRoleSet.CUSTOMER = 1 << 0;
UserRoleSet.PROFESSIONAL = 1 << 1;
UserRoleSet.NONE = 0;
UserRoleSet.ALL = UserRoleSet.CUSTOMER | UserRoleSet.PROFESSIONAL;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UserRoleSet.prototype, "value", void 0);
