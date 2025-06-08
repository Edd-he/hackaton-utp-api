import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'

import { CursosService } from './cursos.service'
import { CursosController } from './cursos.controller'

@Module({
  imports: [HttpModule],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}
