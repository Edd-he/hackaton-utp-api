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
exports.NotasController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const notas_service_1 = require("./notas.service");
const tokens_1 = require("../common/constants/tokens");
let NotasController = class NotasController {
    constructor(notasService) {
        this.notasService = notasService;
    }
    findAll() {
        return this.notasService.fetchGrades({
            cod: 'u21217252',
            period: '2252',
            portal_token: tokens_1.TOKEN_PORTAL,
        });
    }
};
exports.NotasController = NotasController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotasController.prototype, "findAll", null);
exports.NotasController = NotasController = __decorate([
    (0, common_1.Controller)('notas'),
    __metadata("design:paramtypes", [notas_service_1.NotasService])
], NotasController);
//# sourceMappingURL=notas.controller.js.map