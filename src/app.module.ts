import { Module } from '@nestjs/common'

import { CalendarioModule } from './calendario/calendario.module'
import { PagosModule } from './pagos/pagos.module'
import { NotasModule } from './notas/notas.module'

@Module({
  imports: [CalendarioModule, PagosModule, NotasModule],
})
export class AppModule {}
