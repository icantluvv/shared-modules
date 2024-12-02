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
exports.Customer = void 0;
const class_validator_1 = require("class-validator");
const UUID_1 = require("../tsPrimitives/UUID");
var Customer;
(function (Customer) {
    let Parameters;
    (function (Parameters) {
        class Create {
            constructor(alias, contacts, salonId) {
                this.salonId = salonId;
                this.alias = alias;
                this.contacts = contacts;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Create.prototype, "salonId", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Create.prototype, "contacts", void 0);
        Parameters.Create = Create;
        class Registration {
            constructor(contacts) {
                this.contacts = contacts;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Registration.prototype, "contacts", void 0);
        Parameters.Registration = Registration;
        class Retrieve {
            constructor(salons, employees) {
                this.salons = salons;
                this.employees = employees;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Retrieve.prototype, "salons", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Retrieve.prototype, "employees", void 0);
        Parameters.Retrieve = Retrieve;
        class HandleInvite {
            constructor(contact) {
                this.contact = contact;
            }
        }
        Parameters.HandleInvite = HandleInvite;
    })(Parameters = Customer.Parameters || (Customer.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Full {
            constructor(id, user, contacts, alias) {
                this.id = id;
                this.user = user;
                this.alias = alias;
                this.contacts = contacts;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Full.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Full.prototype, "contacts", void 0);
        Responses.Full = Full;
        class Partial {
            constructor(id, user, contacts, alias) {
                this.id = id;
                this.user = user;
                this.alias = alias;
                this.contacts = contacts;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Partial.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Partial.prototype, "contacts", void 0);
        Responses.Partial = Partial;
        class Verify {
            constructor(contacts) {
                this.contacts = contacts;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Verify.prototype, "contacts", void 0);
        Responses.Verify = Verify;
    })(Responses = Customer.Responses || (Customer.Responses = {}));
})(Customer || (exports.Customer = Customer = {}));
