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
exports.TimetableOwner = void 0;
const UUID_1 = require("../tsPrimitives/UUID");
const class_validator_1 = require("class-validator");
class TimetableOwner {
    constructor(type) {
        this.type = type;
    }
    toJSON() {
        switch (true) {
            case this.type instanceof TimetableOwner.Salon:
                return "salon:" + this.type.id;
            case this.type instanceof TimetableOwner.Employee:
                return "employee:" + this.type.id;
        }
    }
    static fromJSON(json) {
        const [type, id] = json.split(":");
        switch (type) {
            case "salon":
                return new TimetableOwner(new TimetableOwner.Salon(id));
            case "employee":
                return new TimetableOwner(new TimetableOwner.Employee(id));
            default:
                throw new Error("Unknown type");
        }
    }
}
exports.TimetableOwner = TimetableOwner;
(function (TimetableOwner) {
    class Salon {
        constructor(id) {
            this.id = id;
        }
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", UUID_1.UUID)
    ], Salon.prototype, "id", void 0);
    TimetableOwner.Salon = Salon;
    class Employee {
        constructor(id) {
            this.id = id;
        }
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", UUID_1.UUID)
    ], Employee.prototype, "id", void 0);
    TimetableOwner.Employee = Employee;
})(TimetableOwner || (exports.TimetableOwner = TimetableOwner = {}));
