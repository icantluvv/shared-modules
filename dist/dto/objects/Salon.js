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
exports.Salon = void 0;
const Address_1 = require("../primitives/Address");
const Timetable_1 = require("./Timetable");
const UUID_1 = require("../tsPrimitives/UUID");
const class_validator_1 = require("class-validator");
var Salon;
(function (Salon) {
    let Parameters;
    (function (Parameters) {
        class Create {
            constructor(name, type, timeZoneId, localeId, timetable, address, contacts, logo, description) {
                this.name = name;
                this.type = type;
                this.logo = logo;
                this.timeZoneId = timeZoneId;
                this.localeId = localeId;
                this.description = description;
                this.timetable = timetable;
                this.address = address;
                this.contacts = contacts;
            }
        }
        __decorate([
            (0, class_validator_1.IsTimeZone)(),
            __metadata("design:type", String)
        ], Create.prototype, "timeZoneId", void 0);
        __decorate([
            (0, class_validator_1.IsLocale)(),
            __metadata("design:type", String)
        ], Create.prototype, "localeId", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Timetable_1.Timetable.Parameters.Create.Pattern)
        ], Create.prototype, "timetable", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Address_1.Address)
        ], Create.prototype, "address", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Create.prototype, "contacts", void 0);
        Parameters.Create = Create;
        class Patch {
            constructor(name, type, description, logo) {
                this.name = name;
                this.type = type;
                this.description = description;
                this.logo = logo;
            }
        }
        Parameters.Patch = Patch;
    })(Parameters = Salon.Parameters || (Salon.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Full {
            constructor(id, name, type, address, isActive, canEdit, isFavorite, localeId, timeZoneId, description, logo) {
                this.id = id;
                this.name = name;
                this.type = type;
                this.description = description;
                this.logo = logo;
                this.address = address;
                this.isActive = isActive;
                this.canEdit = canEdit;
                this.isFavorite = isFavorite;
                this.localeId = localeId;
                this.timeZoneId = timeZoneId;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Full.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Address_1.Address)
        ], Full.prototype, "address", void 0);
        __decorate([
            (0, class_validator_1.IsLocale)(),
            __metadata("design:type", String)
        ], Full.prototype, "localeId", void 0);
        __decorate([
            (0, class_validator_1.IsTimeZone)(),
            __metadata("design:type", String)
        ], Full.prototype, "timeZoneId", void 0);
        Responses.Full = Full;
        class Partial {
            constructor(id, name, type, address, isFavorite, logo) {
                this.id = id;
                this.name = name;
                this.type = type;
                this.address = address;
                this.isFavorite = isFavorite;
                this.logo = logo;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Partial.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Address_1.Address)
        ], Partial.prototype, "address", void 0);
        Responses.Partial = Partial;
    })(Responses = Salon.Responses || (Salon.Responses = {}));
})(Salon || (exports.Salon = Salon = {}));
