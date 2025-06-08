import { HttpService } from '@nestjs/axios'
import { BadRequestException, Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'

import { RequestGradesDto } from './dto/request-grade.dto'

@Injectable()
export class NotasService {
  constructor(private readonly http: HttpService) {}

  private readonly apiUrl = 'https://api-portal.utpxpedition.com/graphql'

  private readonly query = `
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

  async fetchGrades(request: RequestGradesDto) {
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
        this.apiUrl,
        { query: this.query, variables },
        { headers },
      ),
    )

    return response.data.data.getCourseSummary
  }

  async getGrades(request: RequestGradesDto) {
    const data = await this.fetchGrades(request)
    const course = data.courses.find((c) => c.courseId === request.course_id)

    if (!course) {
      throw new BadRequestException(
        `No se encontró el curso con ID: ${request.course_id}`,
      )
    }

    const notasTraducidas = course.evaluations.map((evalItem) => ({
      nombre: evalItem.name,
      valor: evalItem.value,
      abreviatura: evalItem.shortName,
    }))

    return {
      curso: course.title,
      notas: notasTraducidas,
    }
  }
}
