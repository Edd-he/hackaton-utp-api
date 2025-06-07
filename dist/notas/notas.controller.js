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
exports.NotasController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const tokens_1 = require("../common/constants/tokens");
const notas_service_1 = require("./notas.service");
const request_grade_dto_1 = require("./dto/request-grade.dto");
let NotasController = class NotasController {
    constructor(notasService) {
        this.notasService = notasService;
    }
    findAll(request) {
        return this.notasService.fetchGrades({
            cod: request.cod,
            period: '2252',
            portal_token: tokens_1.TOKEN_PORTAL,
        });
    }
};
exports.NotasController = NotasController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_grade_dto_1.RequestGradesDto]),
    __metadata("design:returntype", void 0)
], NotasController.prototype, "findAll", null);
exports.NotasController = NotasController = __decorate([
    (0, common_1.Controller)('notas'),
    __metadata("design:paramtypes", [notas_service_1.NotasService])
], NotasController);
//# sourceMappingURL=notas.controller.js.map