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
exports.NotasService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let NotasService = class NotasService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://api-portal.utpxpedition.com/graphql';
        this.query = `
    query GetCourseSummary($periodId: String!) {
      getCourseSummary(periodId: $periodId) {
        summary {
          campus
          enrolledCourses
          average
          relativeCycle
          creditCount
          meritOrder
          weeklyHours
          meritBelong
        }
        courses {
          courseId
          title
          catalogNumber
          approvalStatus
          professors
          teacher
          courseMode
          schedule {
            class
            courseId
            day
            endDate
            sectionId
            startDate
          }
          weeklyHours
          credits
          numberTimes
          section
          evaluations {
            name
            value
            shortName
          }
          module
          formula
          average
          relatedCourse {
            code
            description
          }
        }
      }
    }
  `;
    }
    async fetchGrades(request) {
        const variables = { periodId: request.period };
        const headers = {
            Accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${request.portal_token}`,
            applicationid: 'APP00002',
            'user-id': request.cod,
            'user-role': 'student',
        };
        const response = await (0, rxjs_1.firstValueFrom)(this.http.post(this.apiUrl, { query: this.query, variables }, { headers }));
        return response.data.data.getCourseSummary;
    }
    async getGrades(request) {
        const data = await this.fetchGrades(request);
        const course = data.courses.find((c) => c.courseId === request.course_id);
        if (!course) {
            throw new common_1.BadRequestException(`No se encontró el curso con ID: ${request.course_id}`);
        }
        const notasTraducidas = course.evaluations.map((evalItem) => ({
            nombre: evalItem.name,
            valor: evalItem.value,
            abreviatura: evalItem.shortName,
        }));
        return {
            curso: course.title,
            notas: notasTraducidas,
        };
    }
};
exports.NotasService = NotasService;
exports.NotasService = NotasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], NotasService);
//# sourceMappingURL=notas.service.js.map