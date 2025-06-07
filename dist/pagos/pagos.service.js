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
exports.PagosService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const cheerio = require("cheerio");
const rxjs_1 = require("rxjs");
let PagosService = class PagosService {
    constructor(http) {
        this.http = http;
    }
    async getPayments({ emplid, strm, grado }) {
        const url = `https://portalestudiante.utp.edu.pe/IntegratorWithPortalC/ConsultaKardex?emplid=${emplid}&grado=${grado}&strm=${strm}`;
        const response = await (0, rxjs_1.lastValueFrom)(this.http.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'X-Requested-With': 'XMLHttpRequest',
                Accept: 'text/html, */*; q=0.01',
                Referer: 'https://portalestudiante.utp.edu.pe/IntegratorWithPortalC/EstadoCuenta',
            },
        }));
        const html = response.data;
        return this.parseHtml(html);
    }
    parseHtml(html) {
        const raw = cheerio.load(html);
        const rows = raw('.cursos_detalle tr');
        const result = [];
        rows.each((_, row) => {
            const cells = raw(row).find('td');
            result.push({
                item: raw(cells[0]).text().trim(),
                descripcion: raw(cells[1]).text().trim(),
                monto: raw(cells[2]).text().trim(),
                vencimiento: raw(cells[3]).text().trim(),
                estado: raw(cells[4]).text().trim(),
            });
        });
        return result;
    }
};
exports.PagosService = PagosService;
exports.PagosService = PagosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], PagosService);
//# sourceMappingURL=pagos.service.js.map