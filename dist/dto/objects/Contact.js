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
exports.Contact = void 0;
const class_validator_1 = require("class-validator");
const UUID_1 = require("../tsPrimitives/UUID");
var Contact;
(function (Contact) {
    let Parameters;
    (function (Parameters) {
        class Create {
            constructor(value, type, isVerify) {
                this.value = value;
                this.type = type;
                this.isVerify = isVerify;
            }
        }
        Parameters.Create = Create;
        class SendCode {
            constructor(recaptchaToken) {
                this.recaptchaToken = recaptchaToken;
            }
        }
        Parameters.SendCode = SendCode;
        class Verify {
            constructor(code) {
                this.code = code;
            }
        }
        Parameters.Verify = Verify;
    })(Parameters = Contact.Parameters || (Contact.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Full {
            constructor(id, value, isVerify, type) {
                this.id = id;
                this.value = value;
                this.isVerify = isVerify;
                this.type = type;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Full.prototype, "id", void 0);
        Responses.Full = Full;
        class Verified {
            constructor(isVerified) {
                this.isVerified = isVerified;
            }
        }
        Responses.Verified = Verified;
    })(Responses = Contact.Responses || (Contact.Responses = {}));
})(Contact || (exports.Contact = Contact = {}));
