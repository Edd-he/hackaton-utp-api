import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'
import { HttpService } from '@nestjs/axios'

import { RequestCalendarDto } from './dto/request-calendar.dto'
import { Root } from './types/calendar.types'

@Injectable()
export class CalendarioService {
  constructor(private readonly http: HttpService) {}
  async fetchCalendar(request: RequestCalendarDto) {
    const url = `https://api-pao.utpxpedition.com/course/student/calendar?userId=${request['user-id']}&dateToQuery=${request.date}+00:00:00&intervalMode=day`

    const headers = {
      Authorization: `Bearer ${request.portal_token}`,
      'User-Id': request['user-id'],
      'User-Role': 'STUDENT',
      Origin: 'https://class.utp.edu.pe',
    }

    const res = await firstValueFrom(this.http.get(url, { headers }))
    return res.data
  }

  async fetchCalendarPortal(request: RequestCalendarDto) {
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
    `
    const timestamp = new Date(`${request.date}T00:00:00.000Z`).getTime()
    const variables = {
      date: timestamp,
      periods: [request.period, request.period],
    }

    const headers = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${request.portal_token}`,
      applicationid: 'APP00002',
      'user-id': request.cod,
      'user-role': 'student',
    }

    const res = await firstValueFrom(
      this.http.post(
        'https://api-portal.utpxpedition.com/graphql',
        { query, variables },
        { headers },
      ),
    )

    const result = res.data as Root

    const filteredDate = result.data.scheduleByDate.dates.find(
      (d) => d.date === request.date,
    )

    return filteredDate ?? null
  }
}
