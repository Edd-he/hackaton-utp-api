import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'
import { TOKEN } from 'src/common/constants/tokens'
import { USER_ID } from 'src/common/constants/user-id'
import { HttpService } from '@nestjs/axios'
import { RequestCalendarDto } from './dto/request-calendar.dto'

@Injectable()
export class CalendarioService {
  constructor(private readonly http: HttpService) {}
  async fetchCalendar(request: RequestCalendarDto) {
    const url = `https://api-pao.utpxpedition.com/course/student/calendar?userId=${request['user-id']}&dateToQuery=${request.date}+00:00:00&intervalMode=day`

    const headers = {
      Authorization: `Bearer ${request.token_class}`,
      'User-Id': request['user-id'],
      'User-Role': 'STUDENT',
      Origin: 'https://class.utp.edu.pe',
    }

    const res = await firstValueFrom(this.http.get(url, { headers }))
    return res.data
  }
}
