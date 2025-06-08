import { Controller, Get, Param } from '@nestjs/common'
import { Auth } from 'src/users/decorators/auth.decorator'
import { UserSession } from 'src/users/decorators/user-session.decorator'
import { IUserSession } from 'src/users/types/user-session.interface'
import { ApiBearerAuth } from '@nestjs/swagger'

import { NotasService } from './notas.service'

@Controller('notas')
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  @ApiBearerAuth()
  @Get(':cursoId/obtener-notas')
  @Auth()
  getGrades(
    @Param('cursoId') cursoId: string,
    @UserSession() session: IUserSession,
  ) {
    return this.notasService.getGrades({
      course_id: cursoId,
      cod: session.cod,
      period: '2252',
      portal_token: session.portal_token,
    })
  }
}
