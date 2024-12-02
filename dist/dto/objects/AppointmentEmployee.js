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
exports.AppointmentEmployee = void 0;
const DateInterval_1 = require("../tsPrimitives/DateInterval");
const Price_1 = require("../primitives/Price");
const Address_1 = require("../primitives/Address");
const UUID_1 = require("../tsPrimitives/UUID");
const class_validator_1 = require("class-validator");
const Salon_1 = require("./Salon");
const Customer_1 = require("./Customer");
const Procedure_1 = require("./Procedure");
var AppointmentEmployee;
(function (AppointmentEmployee) {
    let Parameters;
    (function (Parameters) {
        class Retrieve {
            constructor(startDate, endDate, employees, salons, customer) {
                this.startDate = startDate;
                this.endDate = endDate;
                this.employees = employees;
                this.salons = salons;
                this.customer = customer;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Retrieve.prototype, "employees", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Retrieve.prototype, "salons", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Retrieve.prototype, "customer", void 0);
        Parameters.Retrieve = Retrieve;
        class Create {
            constructor(customerId, type, time) {
                this.customerId = customerId;
                this.type = type;
                this.time = time;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Create.prototype, "customerId", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", DateInterval_1.DateInterval)
        ], Create.prototype, "time", void 0);
        Parameters.Create = Create;
        class Patch {
            constructor(time) {
                this.time = time;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", DateInterval_1.DateInterval)
        ], Patch.prototype, "time", void 0);
        Parameters.Patch = Patch;
        class Approve {
            constructor(appointmentsEmployeeId) {
                this.appointmentsEmployeeId = appointmentsEmployeeId;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Approve.prototype, "appointmentsEmployeeId", void 0);
        Parameters.Approve = Approve;
    })(Parameters = AppointmentEmployee.Parameters || (AppointmentEmployee.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Full {
            constructor(salon, customer, address, associative) {
                this.salon = salon;
                this.customer = customer;
                this.address = address;
                this.associative = associative;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Salon_1.Salon.Responses.Partial)
        ], Full.prototype, "salon", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Customer_1.Customer.Responses.Partial)
        ], Full.prototype, "customer", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Address_1.Address)
        ], Full.prototype, "address", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Full.prototype, "associative", void 0);
        Responses.Full = Full;
        class Partial {
            constructor(customer, associative) {
                this.customer = customer;
                this.associative = associative;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Customer_1.Customer.Responses.Partial)
        ], Partial.prototype, "customer", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Partial.prototype, "associative", void 0);
        Responses.Partial = Partial;
        class Base {
            constructor(id, status, procedure, time, price) {
                this.id = id;
                this.status = status;
                this.procedure = procedure;
                this.time = time;
                this.price = price;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Base.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Procedure_1.Procedure.Responses.Partial)
        ], Base.prototype, "procedure", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", DateInterval_1.DateInterval)
        ], Base.prototype, "time", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Price_1.Price)
        ], Base.prototype, "price", void 0);
        Responses.Base = Base;
    })(Responses = AppointmentEmployee.Responses || (AppointmentEmployee.Responses = {}));
})(AppointmentEmployee || (exports.AppointmentEmployee = AppointmentEmployee = {}));
