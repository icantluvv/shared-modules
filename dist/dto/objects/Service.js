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
exports.Service = void 0;
const Int_1 = require("../tsPrimitives/Int");
const Price_1 = require("../primitives/Price");
const UUID_1 = require("../tsPrimitives/UUID");
const class_validator_1 = require("class-validator");
var Service;
(function (Service) {
    let Parameters;
    (function (Parameters) {
        class Retrieve {
            constructor(page, per, salons, employees, value) {
                this.salons = salons;
                this.employees = employees;
                this.value = value;
                this.page = page;
                this.per = per;
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
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Int_1.Int)
        ], Retrieve.prototype, "page", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Int_1.Int)
        ], Retrieve.prototype, "per", void 0);
        Parameters.Retrieve = Retrieve;
        class RetrieveFull {
            constructor(salon) {
                this.salon = salon;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], RetrieveFull.prototype, "salon", void 0);
        Parameters.RetrieveFull = RetrieveFull;
        class Create {
            constructor(title, description, category, language) {
                this.title = title;
                this.description = description;
                this.category = category;
                this.language = language;
            }
        }
        Parameters.Create = Create;
        class Patch {
            constructor(title, description, category, language) {
                this.title = title;
                this.description = description;
                this.category = category;
                this.language = language;
            }
        }
        Parameters.Patch = Patch;
    })(Parameters = Service.Parameters || (Service.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Full {
            constructor(id, title, description, category, procedure) {
                this.id = id;
                this.title = title;
                this.description = description;
                this.category = category;
                this.procedure = procedure;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Full.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Full.prototype, "procedure", void 0);
        Responses.Full = Full;
        class Partial {
            constructor(id, title, description, category, minPrice, minDuration) {
                this.id = id;
                this.title = title;
                this.description = description;
                this.category = category;
                this.minPrice = minPrice;
                this.minDuration = minDuration;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Partial.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Price_1.Price)
        ], Partial.prototype, "minPrice", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Int_1.Int)
        ], Partial.prototype, "minDuration", void 0);
        Responses.Partial = Partial;
        class Micro {
            constructor(id, title, description, category) {
                this.id = id;
                this.title = title;
                this.description = description;
                this.category = category;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Micro.prototype, "id", void 0);
        Responses.Micro = Micro;
    })(Responses = Service.Responses || (Service.Responses = {}));
})(Service || (exports.Service = Service = {}));
