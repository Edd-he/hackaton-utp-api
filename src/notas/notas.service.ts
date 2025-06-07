import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'

import { RequestGradesDto } from './dto/request-grade.dto'

@Injectable()
export class NotasService {
  constructor(private readonly http: HttpService) {}
  async fetchGrades(request: RequestGradesDto) {
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
    `

    const variables = { periodId: request.period }

    const headers = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${request.portal_token}`,
      applicationid: 'APP00002',
      'user-id': request.cod,
      'user-role': 'student',
    }

    const response = await firstValueFrom(
      this.http.post(
        'https://api-portal.utpxpedition.com/graphql',
        { query, variables },
        { headers },
      ),
    )

    return response.data.data.getCourseSummary
  }
}
