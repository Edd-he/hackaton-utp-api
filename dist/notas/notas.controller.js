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
const auth_decorator_1 = require("../users/decorators/auth.decorator");
const user_session_decorator_1 = require("../users/decorators/user-session.decorator");
const swagger_1 = require("@nestjs/swagger");
const notas_service_1 = require("./notas.service");
let NotasController = class NotasController {
    constructor(notasService) {
        this.notasService = notasService;
    }
    getGrades(cursoId, session) {
        return this.notasService.getGrades({
            course_id: cursoId,
            cod: session.cod,
            period: '2252',
            portal_token: session.portal_token,
        });
    }
};
exports.NotasController = NotasController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':cursoId/obtener-notas'),
    (0, auth_decorator_1.Auth)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('cursoId')),
    __param(1, (0, user_session_decorator_1.UserSession)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], NotasController.prototype, "getGrades", null);
exports.NotasController = NotasController = __decorate([
    (0, common_1.Controller)('notas'),
    __metadata("design:paramtypes", [notas_service_1.NotasService])
], NotasController);
//# sourceMappingURL=notas.controller.js.map