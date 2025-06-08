import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'
import { IUserSession } from 'src/users/types/user-session.interface'

@Injectable()
export class CursosService {
  constructor(private readonly http: HttpService) {}

  async fetchGrades(session: IUserSession) {
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

    const variables = { periodId: '2252' }

    const headers = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.portal_token}`,
      applicationid: 'APP00002',
      'user-id': session.cod,
      'user-role': 'student',
    }

    const response = await firstValueFrom(
      this.http.post(
        'https://api-portal.utpxpedition.com/graphql',
        { query, variables },
        { headers },
      ),
    )

    const data = response.data.data.getCourseSummary

    const summary = {
      campus: data.summary.campus,
      cursosInscritos: data.summary.enrolledCourses,
      cicloRelativo: data.summary.relativeCycle,
      totalCreditos: data.summary.creditCount,
      horasSemanales: data.summary.weeklyHours,
    }

    const courses = data.courses.map((c: any) => ({
      idCurso: c.courseId,
      titulo: c.title,
      modoCurso: c.courseMode,
      creditos: c.credits,
      horasSemanales: c.weeklyHours,
      formula: c.formula,
    }))

    return {
      resumen: summary,
      cursos: courses,
    }
  }
}
