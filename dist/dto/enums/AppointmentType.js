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
exports.AppointmentType = void 0;
const UUID_1 = require("../tsPrimitives/UUID");
const class_validator_1 = require("class-validator");
class AppointmentType {
    constructor(type) {
        this.type = type;
    }
    toJSON() {
        switch (true) {
            case this.type instanceof AppointmentType.Procedure:
                return {
                    procedure: this.type
                };
            case this.type instanceof AppointmentType.Complex:
                return {
                    complex: this.type
                };
        }
    }
    static fromJSON(json) {
        if (json.complex) {
            return new AppointmentType(json.complex);
        }
        else if (json.procedure) {
            return new AppointmentType(json.procedure);
        }
        else {
            throw new Error("Unknown Schedule pattern type");
        }
    }
}
exports.AppointmentType = AppointmentType;
(function (AppointmentType) {
    class Procedure {
        constructor(id) {
            this.id = id;
        }
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", UUID_1.UUID)
    ], Procedure.prototype, "id", void 0);
    AppointmentType.Procedure = Procedure;
    class Complex {
        constructor(id) {
            this.id = id;
        }
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", UUID_1.UUID)
    ], Complex.prototype, "id", void 0);
    AppointmentType.Complex = Complex;
})(AppointmentType || (exports.AppointmentType = AppointmentType = {}));
