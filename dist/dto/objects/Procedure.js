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
exports.Procedure = void 0;
const class_validator_1 = require("class-validator");
const Price_1 = require("../primitives/Price");
const Int_1 = require("../tsPrimitives/Int");
const UUID_1 = require("../tsPrimitives/UUID");
const Service_1 = require("./Service");
const Employee_1 = require("./Employee");
var Procedure;
(function (Procedure) {
    let Parameters;
    (function (Parameters) {
        class Retrieve {
            constructor(salons, employees) {
                this.salons = salons;
                this.employees = employees;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Retrieve.prototype, "salons", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Retrieve.prototype, "employees", void 0);
        Parameters.Retrieve = Retrieve;
        class Create {
            constructor(price, duration, serviceId, employeeId, description, alias) {
                this.price = price;
                this.duration = duration;
                this.description = description;
                this.alias = alias;
                this.serviceId = serviceId;
                this.employeeId = employeeId;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Price_1.Price)
        ], Create.prototype, "price", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Int_1.Int)
        ], Create.prototype, "duration", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Create.prototype, "serviceId", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Create.prototype, "employeeId", void 0);
        Parameters.Create = Create;
        class Patch {
            constructor(price, duration, description, alias) {
                this.price = price;
                this.duration = duration;
                this.description = description;
                this.alias = alias;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Price_1.Price)
        ], Patch.prototype, "price", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Int_1.Int)
        ], Patch.prototype, "duration", void 0);
        Parameters.Patch = Patch;
    })(Parameters = Procedure.Parameters || (Procedure.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Full {
            constructor(id, price, duration, service, master, description, alias) {
                this.id = id;
                this.price = price;
                this.duration = duration;
                this.description = description;
                this.alias = alias;
                this.service = service;
                this.master = master;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Full.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Price_1.Price)
        ], Full.prototype, "price", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Int_1.Int)
        ], Full.prototype, "duration", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Service_1.Service.Responses.Micro)
        ], Full.prototype, "service", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Employee_1.Employee.Responses.Partial)
        ], Full.prototype, "master", void 0);
        Responses.Full = Full;
        class Partial {
            constructor(id, price, duration, service, master, description, alias) {
                this.id = id;
                this.price = price;
                this.duration = duration;
                this.description = description;
                this.alias = alias;
                this.service = service;
                this.master = master;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Partial.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Price_1.Price)
        ], Partial.prototype, "price", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Int_1.Int)
        ], Partial.prototype, "duration", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Service_1.Service.Responses.Micro)
        ], Partial.prototype, "service", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Employee_1.Employee.Responses.Partial)
        ], Partial.prototype, "master", void 0);
        Responses.Partial = Partial;
    })(Responses = Procedure.Responses || (Procedure.Responses = {}));
})(Procedure || (exports.Procedure = Procedure = {}));
