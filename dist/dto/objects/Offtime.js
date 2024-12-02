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
exports.Offtime = void 0;
const class_validator_1 = require("class-validator");
const DateInterval_1 = require("../tsPrimitives/DateInterval");
const Decimal_1 = require("../tsPrimitives/Decimal");
const UUID_1 = require("../tsPrimitives/UUID");
var Offtime;
(function (Offtime) {
    let Parameters;
    (function (Parameters) {
        class Create {
            constructor(interval, coefficient, reason) {
                this.interval = interval;
                this.coefficient = coefficient;
                this.reason = reason;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", DateInterval_1.DateInterval)
        ], Create.prototype, "interval", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Decimal_1.Decimal)
        ], Create.prototype, "coefficient", void 0);
        Parameters.Create = Create;
        class Retrieve {
            constructor(owners, period) {
                this.owners = owners;
                this.period = period;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Retrieve.prototype, "owners", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", DateInterval_1.DateInterval)
        ], Retrieve.prototype, "period", void 0);
        Parameters.Retrieve = Retrieve;
    })(Parameters = Offtime.Parameters || (Offtime.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Full {
            constructor(id, interval, timeZoneId, coefficient, reason) {
                this.id = id;
                this.interval = interval;
                this.reason = reason;
                this.timeZoneId = timeZoneId;
                this.coefficient = coefficient;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Full.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", DateInterval_1.DateInterval)
        ], Full.prototype, "interval", void 0);
        __decorate([
            (0, class_validator_1.IsTimeZone)(),
            __metadata("design:type", String)
        ], Full.prototype, "timeZoneId", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Decimal_1.Decimal)
        ], Full.prototype, "coefficient", void 0);
        Responses.Full = Full;
        class Partial {
            constructor(id, interval) {
                this.id = id;
                this.interval = interval;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Partial.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", DateInterval_1.DateInterval)
        ], Partial.prototype, "interval", void 0);
        Responses.Partial = Partial;
    })(Responses = Offtime.Responses || (Offtime.Responses = {}));
})(Offtime || (exports.Offtime = Offtime = {}));
