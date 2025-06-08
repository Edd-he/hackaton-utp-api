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
exports.CursosService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let CursosService = class CursosService {
    constructor(http) {
        this.http = http;
    }
    async fetchGrades(session) {
        const query = `
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
        const variables = { periodId: '2252' };
        const headers = {
            Accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.portal_token}`,
            applicationid: 'APP00002',
            'user-id': session.cod,
            'user-role': 'student',
        };
        const response = await (0, rxjs_1.firstValueFrom)(this.http.post('https://api-portal.utpxpedition.com/graphql', { query, variables }, { headers }));
        const data = response.data.data.getCourseSummary;
        const summary = {
            campus: data.summary.campus,
            cursosInscritos: data.summary.enrolledCourses,
            cicloRelativo: data.summary.relativeCycle,
            totalCreditos: data.summary.creditCount,
            horasSemanales: data.summary.weeklyHours,
        };
        const courses = data.courses.map((c) => ({
            idCurso: c.courseId,
            titulo: c.title,
            modoCurso: c.courseMode,
            creditos: c.credits,
            horasSemanales: c.weeklyHours,
            formula: c.formula,
        }));
        return {
            resumen: summary,
            cursos: courses,
        };
    }
};
exports.CursosService = CursosService;
exports.CursosService = CursosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CursosService);
//# sourceMappingURL=cursos.service.js.map