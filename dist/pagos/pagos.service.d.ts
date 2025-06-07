import { HttpService } from '@nestjs/axios';
import { RequestPaymentsDto } from './dto/request-payments.dto';
export declare class PagosService {
    private readonly http;
    constructor(http: HttpService);
    getPayments({ emplid, strm, grado }: RequestPaymentsDto): Promise<any[]>;
    private parseHtml;
}
