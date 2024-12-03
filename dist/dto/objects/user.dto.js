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
exports.User = void 0;
const Contact_1 = require("./Contact");
const UserRoleSet_1 = require("../optionSet/UserRoleSet");
const MaestriPermissionSet_1 = require("../optionSet/MaestriPermissionSet");
const UUID_1 = require("../tsPrimitives/UUID");
const class_validator_1 = require("class-validator");
var User;
(function (User) {
    let Parameters;
    (function (Parameters) {
        class Patch {
            constructor(nickname, avatar, contact) {
                this.nickname = nickname;
                this.avatar = avatar;
                this.contact = contact;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Contact_1.Contact.Parameters.Create)
        ], Patch.prototype, "contact", void 0);
        Parameters.Patch = Patch;
    })(Parameters = User.Parameters || (User.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Full {
            constructor(id, options, permissions, nickname, avatar, contact) {
                this.id = id;
                this.avatar = avatar;
                this.nickname = nickname;
                this.contact = contact;
                this.options = options;
                this.permissions = permissions;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Full.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UserRoleSet_1.UserRoleSet)
        ], Full.prototype, "options", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", MaestriPermissionSet_1.MaestriPermissionSet)
        ], Full.prototype, "permissions", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Contact_1.Contact.Responses.Full)
        ], Full.prototype, "contact", void 0);
        Responses.Full = Full;
        class Partial {
            constructor(nickname, avatar) {
                this.avatar = avatar;
                this.nickname = nickname;
            }
        }
        Responses.Partial = Partial;
    })(Responses = User.Responses || (User.Responses = {}));
})(User || (exports.User = User = {}));
