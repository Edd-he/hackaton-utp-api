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
exports.CalendarioService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const axios_1 = require("@nestjs/axios");
let CalendarioService = class CalendarioService {
    constructor(http) {
        this.http = http;
    }
    async fetchCalendar(request) {
        const url = `https://api-pao.utpxpedition.com/course/student/calendar?userId=${request['user-id']}&dateToQuery=${request.date}+00:00:00&intervalMode=day`;
        const headers = {
            Authorization: `Bearer ${request.portal_token}`,
            'User-Id': request['user-id'],
            'User-Role': 'STUDENT',
            Origin: 'https://class.utp.edu.pe',
        };
        const res = await (0, rxjs_1.firstValueFrom)(this.http.get(url, { headers }));
        return res.data;
    }
    async fetchCalendarPortal(request) {
        const query = `
      query getSchedules($date: Float!, $periods: [String!]) {
        scheduleByDate(
          filters: {
            date: $date,
            classTypes: [1, 2, 3, 4, 5, 6],
            periods: $periods
          }
        ) {
          dates {
            date
            items {
              name
              typeSchedule {
                id
                name
              }
              modality {
                id
                name
                location
              }
              hasCrossing
              isRescheduled
              period
              date
              startTime
              endTime
              class {
                id
                start
                end
                type
                classType
                descAmb
                professors {
                  firstName
                  lastName
                }
                location {
                  classRoom {
                    desc
                    id
                    floor
                  }
                  building {
                    id
                    image
                    desc
                    address
                    coordinates {
                      latitude
                      longitude
                    }
                  }
                }
                professors {
                  firstName
                  lastName
                }
                instructionMode
                isReprog
                name
                desc
                linkZoom
                hours
                isClass
                isHybrid
                linkCourseClass
              }
            }
          }
        }
      }
    `;
        const timestamp = new Date(`${request.date}T00:00:00.000Z`).getTime();
        const variables = {
            date: timestamp,
            periods: [request.period, request.period],
        };
        const headers = {
            Accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${request.portal_token}`,
            applicationid: 'APP00002',
            'user-id': request.cod,
            'user-role': 'student',
        };
        const res = await (0, rxjs_1.firstValueFrom)(this.http.post('https://api-portal.utpxpedition.com/graphql', { query, variables }, { headers }));
        const result = res.data;
        const filteredDate = result.data.scheduleByDate.dates.find((d) => d.date === request.date);
        if (!filteredDate)
            return null;
        const formattedItems = filteredDate.items.map((item) => {
            const classData = item.class;
            return {
                curso: item.name,
                profesor: `${classData.professors.firstName} ${classData.professors.lastName}`,
                salon: classData.location.classRoom.id,
                dia: new Date(item.date).toLocaleDateString('es-PE', {
                    weekday: 'long',
                }),
                inicio: new Date(item.startTime).toLocaleTimeString('es-PE', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }),
                fin: new Date(item.endTime).toLocaleTimeString('es-PE', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }),
            };
        });
        return {
            fecha: filteredDate.date,
            clases: formattedItems,
        };
    }
};
exports.CalendarioService = CalendarioService;
exports.CalendarioService = CalendarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CalendarioService);
//# sourceMappingURL=calendario.service.js.map