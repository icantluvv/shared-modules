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
exports.SalaryPaymentType = void 0;
const class_validator_1 = require("class-validator");
const Int_1 = require("../tsPrimitives/Int");
const Price_1 = require("../primitives/Price");
class SalaryPaymentType {
    constructor(type) {
        this.type = type;
    }
    toJSON() {
        switch (true) {
            case this.type instanceof SalaryPaymentType.Percent:
                return {
                    percent: this.type
                };
            case this.type instanceof SalaryPaymentType.Value:
                return {
                    value: this.type
                };
        }
    }
    static fromJSON(json) {
        if (json.percent) {
            return new SalaryPaymentType(json.percent);
        }
        else if (json.value) {
            return new SalaryPaymentType(json.value);
        }
        else {
            throw new Error("Unknown Schedule pattern type");
        }
    }
}
exports.SalaryPaymentType = SalaryPaymentType;
(function (SalaryPaymentType) {
    class Percent {
        constructor(percent) {
            this.percent = percent;
        }
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", Int_1.Int)
    ], Percent.prototype, "percent", void 0);
    SalaryPaymentType.Percent = Percent;
    class Value {
        constructor(value) {
            this.value = value;
        }
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", Price_1.Price)
    ], Value.prototype, "value", void 0);
    SalaryPaymentType.Value = Value;
})(SalaryPaymentType || (exports.SalaryPaymentType = SalaryPaymentType = {}));
