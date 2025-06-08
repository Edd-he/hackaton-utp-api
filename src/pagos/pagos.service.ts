import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import * as cheerio from 'cheerio'
import { lastValueFrom } from 'rxjs'

@Injectable()
export class PagosService {
  constructor(private readonly http: HttpService) {}
  async getPayments() {
    const url = `https://portalestudiante.utp.edu.pe/IntegratorWithPortalC/ConsultaKardex?emplid=00001387717&grado=PREG&strm=2252`

    const response = await lastValueFrom(
      this.http.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'text/html, */*; q=0.01',
          Referer:
            'https://portalestudiante.utp.edu.pe/IntegratorWithPortalC/EstadoCuenta',
        },
      }),
    )
    const html = response.data
    return this.parseHtml(html)
  }

  private parseHtml(html: string) {
    const raw = cheerio.load(html)
    const rows = raw('.cursos_detalle tr')
    const result = []

    rows.each((_, row) => {
      const cells = raw(row).find('td')

      result.push({
        item: raw(cells[0]).text().trim(),
        descripcion: raw(cells[1]).text().trim(),
        monto: raw(cells[2]).text().trim(),
        vencimiento: raw(cells[3]).text().trim(),
        estado: raw(cells[4]).text().trim(),
      })
    })

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
