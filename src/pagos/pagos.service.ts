import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PagosService {
  constructor(private readonly http: HttpService) {}
  async getPayments() {
    const pagosSimulados = [
      {
        item: '001',
        descripcion: 'CUOTA 001',
        monto: 'S/ 970.24',
        vencimiento: '27/03/25',
        estado: 'PAGADO',
      },
      {
        item: '002',
        descripcion: 'CUOTA 002',
        monto: 'S/ 970.24',
        vencimiento: '23/04/25',
        estado: 'PAGADO',
      },
      {
        item: '003',
        descripcion: 'CUOTA 003',
        monto: 'S/ 970.24',
        vencimiento: '23/05/25',
        estado: 'PAGADO',
      },
      {
        item: '004',
        descripcion: 'CUOTA 004',
        monto: 'S/ 970.24',
        vencimiento: '23/06/25',
        estado: 'PENDIENTE DE PAGO',
      },
      {
        item: '005',
        descripcion: 'CUOTA 005',
        monto: 'S/ 970.24',
        vencimiento: '23/07/25',
        estado: 'PENDIENTE DE PAGO',
      },
    ]

    return pagosSimulados
  }
}
