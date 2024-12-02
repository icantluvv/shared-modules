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
exports.Employee = void 0;
const class_validator_1 = require("class-validator");
const ProfessionalEmployee_1 = require("../enums/ProfessionalEmployee");
const UUID_1 = require("../tsPrimitives/UUID");
const Timetable_1 = require("./Timetable");
const Position_1 = require("./Position");
const User_1 = require("./User");
var Employee;
(function (Employee) {
    let Parameters;
    (function (Parameters) {
        class Retrieve {
            constructor(salonsId) {
                this.salonsId = salonsId;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Retrieve.prototype, "salonsId", void 0);
        Parameters.Retrieve = Retrieve;
        class Invite {
            constructor(salonId, positionId, contacts, timetable, description) {
                this.salonId = salonId;
                this.positionId = positionId;
                this.contacts = contacts;
                this.timetable = timetable;
                this.description = description;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Invite.prototype, "salonId", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Invite.prototype, "positionId", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Invite.prototype, "contacts", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Timetable_1.Timetable.Parameters.Create.Pattern)
        ], Invite.prototype, "timetable", void 0);
        Parameters.Invite = Invite;
        class Patch {
            constructor(positionId) {
                this.positionId = positionId;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Patch.prototype, "positionId", void 0);
        Parameters.Patch = Patch;
    })(Parameters = Employee.Parameters || (Employee.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Full {
            constructor(id, user, canEdit, contacts, salonId, position, description) {
                this.id = id;
                this.user = user;
                this.description = description;
                this.canEdit = canEdit;
                this.salonId = salonId;
                this.contacts = contacts;
                this.position = position;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Full.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", ProfessionalEmployee_1.ProfessionalEmployee)
        ], Full.prototype, "user", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Full.prototype, "contacts", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Full.prototype, "salonId", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Position_1.Position.Responses.Full)
        ], Full.prototype, "position", void 0);
        Responses.Full = Full;
        class Partial {
            constructor(id, contacts, position, user) {
                this.id = id;
                this.contacts = contacts;
                this.position = position;
                this.user = user;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Partial.prototype, "id", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", User_1.User.Responses.Partial)
        ], Partial.prototype, "user", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Partial.prototype, "contacts", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Position_1.Position.Responses.Partial)
        ], Partial.prototype, "position", void 0);
        Responses.Partial = Partial;
    })(Responses = Employee.Responses || (Employee.Responses = {}));
})(Employee || (exports.Employee = Employee = {}));
