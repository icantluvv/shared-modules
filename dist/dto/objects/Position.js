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
exports.Position = void 0;
const PermissionSet_1 = require("../optionSet/PermissionSet");
const Salary_1 = require("./Salary");
const UUID_1 = require("../tsPrimitives/UUID");
const class_validator_1 = require("class-validator");
var Position;
(function (Position) {
    let Parameters;
    (function (Parameters) {
        class Create {
            constructor(title, permissions, salary) {
                this.title = title;
                this.permissions = permissions;
                this.salary = salary;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", PermissionSet_1.PermissionSet)
        ], Create.prototype, "permissions", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Salary_1.Salary.Parameters.Rules.Create)
        ], Create.prototype, "salary", void 0);
        Parameters.Create = Create;
        class Patch {
            constructor(title, permissions, salary) {
                this.title = title;
                this.permissions = permissions;
                this.salary = salary;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", PermissionSet_1.PermissionSet)
        ], Patch.prototype, "permissions", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Salary_1.Salary.Parameters.Rules.Create)
        ], Patch.prototype, "salary", void 0);
        Parameters.Patch = Patch;
    })(Parameters = Position.Parameters || (Position.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Full {
            constructor(id, title, permissions, salary) {
                this.id = id;
                this.title = title;
                this.permissions = permissions;
                this.salary = salary;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Full.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", PermissionSet_1.PermissionSet)
        ], Full.prototype, "permissions", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Salary_1.Salary.Responses.Rules.Full)
        ], Full.prototype, "salary", void 0);
        Responses.Full = Full;
        class Partial {
            constructor(id, title) {
                this.id = id;
                this.title = title;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Partial.prototype, "id", void 0);
        Responses.Partial = Partial;
    })(Responses = Position.Responses || (Position.Responses = {}));
})(Position || (exports.Position = Position = {}));
