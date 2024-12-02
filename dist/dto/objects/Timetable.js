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
exports.Timetable = void 0;
const DateInterval_1 = require("../tsPrimitives/DateInterval");
const UUID_1 = require("../tsPrimitives/UUID");
const Schedule_1 = require("../primitives/Schedule");
const TimetableOwner_1 = require("../enums/TimetableOwner");
const class_validator_1 = require("class-validator");
var Timetable;
(function (Timetable) {
    let Parameters;
    (function (Parameters) {
        let Create;
        (function (Create) {
            class Pattern {
                constructor(schedule, startAt, endAt) {
                    this.schedule = schedule;
                    this.startAt = startAt;
                    this.endAt = endAt;
                }
            }
            __decorate([
                (0, class_validator_1.ValidateNested)(),
                __metadata("design:type", Schedule_1.Schedule.Pattern)
            ], Pattern.prototype, "schedule", void 0);
            Create.Pattern = Pattern;
            class Flexible {
                constructor(workDays) {
                    this.workDays = workDays;
                }
            }
            __decorate([
                (0, class_validator_1.ValidateNested)(),
                __metadata("design:type", Map)
            ], Flexible.prototype, "workDays", void 0);
            Create.Flexible = Flexible;
        })(Create = Parameters.Create || (Parameters.Create = {}));
        class SearchSlot {
            constructor(appointmentType, customerId) {
                this.appointmentType = appointmentType;
                this.customerId = customerId;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], SearchSlot.prototype, "customerId", void 0);
        Parameters.SearchSlot = SearchSlot;
        class Retrieve {
            constructor(owners, period) {
                this.owners = owners;
                this.period = period;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Retrieve.prototype, "owners", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", DateInterval_1.DateInterval)
        ], Retrieve.prototype, "period", void 0);
        Parameters.Retrieve = Retrieve;
    })(Parameters = Timetable.Parameters || (Timetable.Parameters = {}));
    let Responses;
    (function (Responses) {
        class Slots {
            constructor(intervals, timeZoneId) {
                this.intervals = intervals;
                this.timeZoneId = timeZoneId;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Slots.prototype, "intervals", void 0);
        __decorate([
            (0, class_validator_1.IsTimeZone)(),
            __metadata("design:type", String)
        ], Slots.prototype, "timeZoneId", void 0);
        Responses.Slots = Slots;
        class Schedule {
            constructor(owner, intervals, timeZoneId) {
                this.owner = owner;
                this.intervals = intervals;
                this.timeZoneId = timeZoneId;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", TimetableOwner_1.TimetableOwner)
        ], Schedule.prototype, "owner", void 0);
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", Array)
        ], Schedule.prototype, "intervals", void 0);
        __decorate([
            (0, class_validator_1.IsTimeZone)(),
            __metadata("design:type", String)
        ], Schedule.prototype, "timeZoneId", void 0);
        Responses.Schedule = Schedule;
    })(Responses = Timetable.Responses || (Timetable.Responses = {}));
})(Timetable || (exports.Timetable = Timetable = {}));
