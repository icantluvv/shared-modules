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
exports.Statistic = void 0;
const class_validator_1 = require("class-validator");
const Price_1 = require("../primitives/Price");
const Int_1 = require("../tsPrimitives/Int");
var Statistic;
(function (Statistic) {
    let Parameters;
    (function (Parameters) {
        class AppointmentsQuery {
            constructor(startDate, endDate, employees, salons) {
                this.startDate = startDate;
                this.endDate = endDate;
                this.employees = employees;
                this.salons = salons;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], AppointmentsQuery.prototype, "employees", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], AppointmentsQuery.prototype, "salons", void 0);
        Parameters.AppointmentsQuery = AppointmentsQuery;
    })(Parameters = Statistic.Parameters || (Statistic.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Appointments {
            constructor(price, count) {
                this.price = price;
                this.count = count;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Price_1.Price)
        ], Appointments.prototype, "price", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Int_1.Int)
        ], Appointments.prototype, "count", void 0);
        Responses.Appointments = Appointments;
    })(Responses = Statistic.Responses || (Statistic.Responses = {}));
})(Statistic || (exports.Statistic = Statistic = {}));
