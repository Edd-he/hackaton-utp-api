import { Controller, Get } from '@nestjs/common'
import { UserSession } from 'src/users/decorators/user-session.decorator'
import { IUserSession } from 'src/users/types/user-session.interface'
import { Auth } from 'src/users/decorators/auth.decorator'
import { ApiBearerAuth } from '@nestjs/swagger'

import { CursosService } from './cursos.service'

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @ApiBearerAuth()
  @Auth()
  @Get('obtener-cursos')
  getCourses(@UserSession() session: IUserSession) {
    return this.cursosService.fetchGrades(session)
  }
}
