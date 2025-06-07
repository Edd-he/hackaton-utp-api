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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarioController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const calendario_service_1 = require("./calendario.service");
const request_calendar_dto_1 = require("./dto/request-calendar.dto");
let CalendarioController = class CalendarioController {
    constructor(calendarioService) {
        this.calendarioService = calendarioService;
    }
    getAll(request) {
        return this.calendarioService.fetchCalendar(request);
    }
    getAllByPortal(request) {
        return this.calendarioService.fetchCalendarPortal(request);
    }
};
exports.CalendarioController = CalendarioController;
__decorate([
    (0, common_1.Post)('class-calendario'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_calendar_dto_1.RequestCalendarDto]),
    __metadata("design:returntype", void 0)
], CalendarioController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('portal-calendario'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_calendar_dto_1.RequestCalendarDto]),
    __metadata("design:returntype", void 0)
], CalendarioController.prototype, "getAllByPortal", null);
exports.CalendarioController = CalendarioController = __decorate([
    (0, common_1.Controller)('calendario'),
    __metadata("design:paramtypes", [calendario_service_1.CalendarioService])
], CalendarioController);
//# sourceMappingURL=calendario.controller.js.map