import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { NotasService } from './notas.service'
import { TOKEN_PORTAL } from 'src/common/constants/tokens'

@Controller('notas')
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  @Get()
  findAll() {
    return this.notasService.fetchGrades({
      cod: 'u21217252',
      period: '2252',
      portal_token: TOKEN_PORTAL,
    })
  }
}
