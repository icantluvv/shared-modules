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
exports.CustomerUser = void 0;
const User_1 = require("../objects/User");
const class_validator_1 = require("class-validator");
class CustomerUser {
    constructor(type) {
        this.type = type;
    }
    toJSON() {
        switch (true) {
            case this.type instanceof CustomerUser.Link:
                return {
                    link: this.type
                };
            case this.type instanceof CustomerUser.Value:
                return {
                    value: this.type
                };
        }
    }
    static fromJSON(json) {
        if (json.link) {
            return new CustomerUser(json.link);
        }
        else if (json.value) {
            return new CustomerUser(json.value);
        }
        else {
            throw new Error("Unknown Schedule pattern type");
        }
    }
}
exports.CustomerUser = CustomerUser;
(function (CustomerUser) {
    class Link {
        constructor(url) {
            this.url = url;
        }
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", URL)
    ], Link.prototype, "url", void 0);
    CustomerUser.Link = Link;
    class Value {
        constructor(customer) {
            this.customer = customer;
        }
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", User_1.User.Responses.Partial)
    ], Value.prototype, "customer", void 0);
    CustomerUser.Value = Value;
})(CustomerUser || (exports.CustomerUser = CustomerUser = {}));
