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
exports.CalendarioController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const calendario_service_1 = require("./calendario.service");
const tokens_1 = require("../common/constants/tokens");
const user_id_1 = require("../common/constants/user-id");
let CalendarioController = class CalendarioController {
    constructor(calendarioService) {
        this.calendarioService = calendarioService;
    }
    findAll() {
        return this.calendarioService.fetchCalendar({
            token_class: tokens_1.TOKEN,
            'user-id': user_id_1.USER_ID,
            date: '2025-06-07'
        });
    }
};
exports.CalendarioController = CalendarioController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalendarioController.prototype, "findAll", null);
exports.CalendarioController = CalendarioController = __decorate([
    (0, common_1.Controller)('calendario'),
    __metadata("design:paramtypes", [calendario_service_1.CalendarioService])
], CalendarioController);
//# sourceMappingURL=calendario.controller.js.map