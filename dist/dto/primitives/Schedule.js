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
exports.Schedule = void 0;
const class_validator_1 = require("class-validator");
const Int_1 = require("../tsPrimitives/Int");
var Schedule;
(function (Schedule) {
    class Pattern {
        constructor(pattern) {
            this.schedule = pattern;
        }
        toJSON() {
            switch (true) {
                case this.schedule instanceof Schedule.Week:
                    return {
                        weekly: {
                            week: this.schedule
                        }
                    };
                case this.schedule instanceof Schedule.Cycled:
                    return {
                        cycled: {
                            cycle: this.schedule
                        }
                    };
                case this.schedule instanceof Schedule.Day:
                    return {
                        daily: {
                            day: this.schedule
                        }
                    };
                case this.schedule instanceof Schedule.Empty:
                    return {
                        empty: {
                            empty: ''
                        }
                    };
            }
        }
        static fromJSON(json) {
            if (json.weekly) {
                return new Pattern(json.weekly.week);
            }
            else if (json.cycled) {
                return new Pattern(json.cycled.cycle);
            }
            else if (json.daily) {
                return new Pattern(json.daily.day);
            }
            else if (json.empty) {
                return new Pattern(new Empty());
            }
            else {
                throw new Error("Unknown Schedule pattern type");
            }
        }
    }
    Schedule.Pattern = Pattern;
    class Week {
        constructor(monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
            this.monday = monday;
            this.tuesday = tuesday;
            this.wednesday = wednesday;
            this.thursday = thursday;
            this.friday = friday;
            this.saturday = saturday;
            this.sunday = sunday;
        }
    }
    Schedule.Week = Week;
    class Cycled {
        constructor(startDay, workDays, restDays) {
            this.startDay = startDay;
            this.workDays = workDays;
            this.restDays = restDays;
        }
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", Int_1.Int)
    ], Cycled.prototype, "restDays", void 0);
    Schedule.Cycled = Cycled;
    class Day {
        constructor(workTime, offTime) {
            this.workTime = workTime;
            this.offTime = offTime;
        }
    }
    Schedule.Day = Day;
    class Empty {
    }
    Schedule.Empty = Empty;
})(Schedule || (exports.Schedule = Schedule = {}));
