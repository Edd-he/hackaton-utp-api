import { Body, Controller, Post } from '@nestjs/common'

import { CalendarioService } from './calendario.service'
import { RequestCalendarDto } from './dto/request-calendar.dto'

@Controller('calendario')
export class CalendarioController {
  constructor(private readonly calendarioService: CalendarioService) {}

  @Post('class-calendario')
  getAll(@Body() request: RequestCalendarDto) {
    return this.calendarioService.fetchCalendar(request)
  }

  @Post('portal-calendario')
  getAllByPortal(@Body() request: RequestCalendarDto) {
    return this.calendarioService.fetchCalendarPortal(request)
  }
}
