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
exports.Professional = void 0;
const class_validator_1 = require("class-validator");
const User_1 = require("./User");
var Professional;
(function (Professional) {
    let Parameters;
    (function (Parameters) {
        class Create {
            constructor() { }
        }
        Parameters.Create = Create;
    })(Parameters = Professional.Parameters || (Professional.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Partial {
            constructor(user) {
                this.user = user;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", User_1.User.Responses.Partial)
        ], Partial.prototype, "user", void 0);
        Responses.Partial = Partial;
    })(Responses = Professional.Responses || (Professional.Responses = {}));
})(Professional || (exports.Professional = Professional = {}));
