import { Body, Controller, Post } from '@nestjs/common'
import { Auth } from 'src/users/decorators/auth.decorator'
import { UserSession } from 'src/users/decorators/user-session.decorator'
import { IUserSession } from 'src/users/types/user-session.interface'
import { ApiBearerAuth } from '@nestjs/swagger'

import { CalendarioService } from './calendario.service'
import { RequestCalendarDto } from './dto/request-calendar.dto'

@Controller('calendario')
export class CalendarioController {
  constructor(private readonly calendarioService: CalendarioService) {}

  @ApiBearerAuth()
  @Auth()
  @Post('portal-calendario')
  getAllByPortal(
    @UserSession() session: IUserSession,
    @Body() request: RequestCalendarDto,
  ) {
    request.cod = session.cod
    request.portal_token = session.portal_token
    request['user-id'] = session.cod
    return this.calendarioService.fetchCalendarPortal(request)
  }
}
