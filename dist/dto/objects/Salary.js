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
exports.Salary = void 0;
const Int_1 = require("../tsPrimitives/Int");
const Wage_1 = require("../primitives/Wage");
const Price_1 = require("../primitives/Price");
const class_validator_1 = require("class-validator");
var Salary;
(function (Salary) {
    let Parameters;
    (function (Parameters) {
        let Rules;
        (function (Rules) {
            class Create {
                constructor(percent, grid, wage) {
                    this.percent = percent;
                    this.grid = grid;
                    this.wage = wage;
                }
            }
            __decorate([
                (0, class_validator_1.ValidateNested)(),
                __metadata("design:type", Int_1.Int)
            ], Create.prototype, "percent", void 0);
            __decorate([
                (0, class_validator_1.ValidateNested)(),
                __metadata("design:type", Map)
            ], Create.prototype, "grid", void 0);
            __decorate([
                (0, class_validator_1.ValidateNested)(),
                __metadata("design:type", Wage_1.Wage)
            ], Create.prototype, "wage", void 0);
            Rules.Create = Create;
        })(Rules = Parameters.Rules || (Parameters.Rules = {}));
        let Balance;
        (function (Balance) {
            class Payout {
                constructor(paymentType, dateTo) {
                    this.paymentType = paymentType;
                    this.dateTo = dateTo;
                }
            }
            Balance.Payout = Payout;
            class Calculate {
                constructor(dateTo) {
                    this.dateTo = dateTo;
                }
            }
            Balance.Calculate = Calculate;
        })(Balance = Parameters.Balance || (Parameters.Balance = {}));
    })(Parameters = Salary.Parameters || (Salary.Parameters = {}));
    let Responses;
    (function (Responses) {
        let Rules;
        (function (Rules) {
            class Full {
                constructor(percent, grid, wage) {
                    this.percent = percent;
                    this.grid = grid;
                    this.wage = wage;
                }
            }
            __decorate([
                (0, class_validator_1.ValidateNested)(),
                __metadata("design:type", Int_1.Int)
            ], Full.prototype, "percent", void 0);
            __decorate([
                (0, class_validator_1.ValidateNested)(),
                __metadata("design:type", Map)
            ], Full.prototype, "grid", void 0);
            __decorate([
                (0, class_validator_1.ValidateNested)(),
                __metadata("design:type", Wage_1.Wage)
            ], Full.prototype, "wage", void 0);
            Rules.Full = Full;
        })(Rules = Responses.Rules || (Responses.Rules = {}));
        let Balance;
        (function (Balance) {
            class Full {
                constructor(sum, wage, grid, procent) {
                    this.wage = wage;
                    this.grid = grid;
                    this.procent = procent;
                    this.sum = sum;
                }
            }
            __decorate([
                (0, class_validator_1.ValidateNested)(),
                __metadata("design:type", Price_1.Price)
            ], Full.prototype, "wage", void 0);
            __decorate([
                (0, class_validator_1.ValidateNested)(),
                __metadata("design:type", Array)
            ], Full.prototype, "grid", void 0);
            __decorate([
                (0, class_validator_1.ValidateNested)(),
                __metadata("design:type", Array)
            ], Full.prototype, "procent", void 0);
            __decorate([
                (0, class_validator_1.ValidateNested)(),
                __metadata("design:type", Array)
            ], Full.prototype, "sum", void 0);
            Balance.Full = Full;
        })(Balance = Responses.Balance || (Responses.Balance = {}));
    })(Responses = Salary.Responses || (Salary.Responses = {}));
})(Salary || (exports.Salary = Salary = {}));
