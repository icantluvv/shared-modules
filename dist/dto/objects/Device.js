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
exports.Device = void 0;
const UUID_1 = require("../tsPrimitives/UUID");
const class_validator_1 = require("class-validator");
var Device;
(function (Device) {
    let Parameters;
    (function (Parameters) {
        class System {
            constructor(manufacturer, model, system, appVersion, country, fcmToken) {
                this.manufacturer = manufacturer;
                this.model = model;
                this.system = system;
                this.appVersion = appVersion;
                this.country = country;
                this.fcmToken = fcmToken;
            }
        }
        Parameters.System = System;
    })(Parameters = Device.Parameters || (Device.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Full {
            constructor(id, version) {
                this.id = id;
                this.version = version;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Full.prototype, "id", void 0);
        Responses.Full = Full;
    })(Responses = Device.Responses || (Device.Responses = {}));
})(Device || (exports.Device = Device = {}));
