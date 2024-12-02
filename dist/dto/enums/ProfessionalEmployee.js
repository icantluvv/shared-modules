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
exports.ProfessionalEmployee = void 0;
const Professional_1 = require("../objects/Professional");
const class_validator_1 = require("class-validator");
class ProfessionalEmployee {
    constructor(type) {
        this.type = type;
    }
    toJSON() {
        switch (true) {
            case this.type instanceof ProfessionalEmployee.Link:
                return {
                    link: this.type
                };
            case this.type instanceof ProfessionalEmployee.Value:
                return {
                    value: this.type
                };
        }
    }
    static fromJSON(json) {
        if (json.link) {
            return new ProfessionalEmployee(json.link);
        }
        else if (json.value) {
            return new ProfessionalEmployee(json.value);
        }
        else {
            throw new Error("Unknown Schedule pattern type");
        }
    }
}
exports.ProfessionalEmployee = ProfessionalEmployee;
(function (ProfessionalEmployee) {
    class Link {
        constructor(url) {
            this.url = url;
        }
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", URL)
    ], Link.prototype, "url", void 0);
    ProfessionalEmployee.Link = Link;
    class Value {
        constructor(professional) {
            this.professional = professional;
        }
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", Professional_1.Professional.Responses.Partial)
    ], Value.prototype, "professional", void 0);
    ProfessionalEmployee.Value = Value;
})(ProfessionalEmployee || (exports.ProfessionalEmployee = ProfessionalEmployee = {}));
