import { Body, Controller, Post } from '@nestjs/common'
import { TOKEN_PORTAL } from 'src/common/constants/tokens'

import { NotasService } from './notas.service'
import { RequestGradesDto } from './dto/request-grade.dto'

@Controller('notas')
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  @Post()
  findAll(@Body() request: RequestGradesDto) {
    return this.notasService.fetchGrades({
      cod: request.cod,
      period: '2252',
      portal_token: TOKEN_PORTAL,
    })
  }
}
