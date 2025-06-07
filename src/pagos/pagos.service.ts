import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import * as cheerio from 'cheerio'
import { firstValueFrom } from 'rxjs'

import { RequestPaymentsDto } from './dto/request-payments.dto'

@Injectable()
export class PagosService {
  constructor(private readonly http: HttpService) {}
  async getPayments({ emplid, strm, grado }: RequestPaymentsDto) {
    const url = `https://portalestudiante.utp.edu.pe/IntegratorWithPortalC/ConsultaKardex?emplid=${emplid}&grado=${grado}&strm=${strm}`

    const response = await firstValueFrom(
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

    return result
  }
}
