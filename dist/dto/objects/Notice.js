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
exports.Notice = void 0;
const class_validator_1 = require("class-validator");
const UUID_1 = require("../tsPrimitives/UUID");
var Notice;
(function (Notice) {
    let Responses;
    (function (Responses) {
        class Full {
            constructor(id, titleKey, messageKey, category, isRead, parameters, date) {
                this.id = id;
                this.titleKey = titleKey;
                this.messageKey = messageKey;
                this.parameters = parameters;
                this.category = category;
                this.isRead = isRead;
                this.date = date;
            }
        }
        __decorate([
            (0, class_validator_1.ValidateNested)(),
            __metadata("design:type", UUID_1.UUID)
        ], Full.prototype, "id", void 0);
        Responses.Full = Full;
    })(Responses = Notice.Responses || (Notice.Responses = {}));
})(Notice || (exports.Notice = Notice = {}));
