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
exports.Auth = void 0;
const class_validator_1 = require("class-validator");
const User_1 = require("./User");
var Auth;
(function (Auth) {
    let Parameters;
    (function (Parameters) {
        class AppleToken {
            constructor(token, firstName, lastName, email, emailVerified) {
                this.token = token;
                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.emailVerified = emailVerified;
            }
        }
        __decorate([
            (0, class_validator_1.IsEmail)(),
            __metadata("design:type", String)
        ], AppleToken.prototype, "email", void 0);
        Parameters.AppleToken = AppleToken;
        class GoogleToken {
            constructor(token, firstName, lastName) {
                this.token = token;
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
        Parameters.GoogleToken = GoogleToken;
    })(Parameters = Auth.Parameters || (Auth.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Full {
            constructor(accessToken, refreshToken, user) {
                this.accessToken = accessToken;
                this.refreshToken = refreshToken;
                this.user = user;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", User_1.User.Responses.Full)
        ], Full.prototype, "user", void 0);
        Responses.Full = Full;
        class Partial {
            constructor(accessToken, refreshToken) {
                this.accessToken = accessToken;
                this.refreshToken = refreshToken;
            }
        }
        Responses.Partial = Partial;
    })(Responses = Auth.Responses || (Auth.Responses = {}));
})(Auth || (exports.Auth = Auth = {}));
