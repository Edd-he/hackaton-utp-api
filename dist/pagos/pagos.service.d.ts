import { HttpService } from '@nestjs/axios';
export declare class PagosService {
    private readonly http;
    constructor(http: HttpService);
    getPayments(): Promise<any[]>;
    private parseHtml;
}
