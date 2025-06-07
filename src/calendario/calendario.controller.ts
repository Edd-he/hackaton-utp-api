import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CalendarioService } from './calendario.service'
import { TOKEN } from 'src/common/constants/tokens'
import { USER_ID } from 'src/common/constants/user-id'

@Controller('calendario')
export class CalendarioController {
  constructor(private readonly calendarioService: CalendarioService) {}

  @Get()
  findAll() {
    return this.calendarioService.fetchCalendar({
      token_class: TOKEN,
      'user-id': USER_ID,
      date:'2025-06-07'
    })
  }
}
