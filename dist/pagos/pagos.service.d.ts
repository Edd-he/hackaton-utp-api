import { HttpService } from '@nestjs/axios';
export declare class PagosService {
    private readonly http;
    constructor(http: HttpService);
    getPayments(): Promise<{
        item: string;
        descripcion: string;
        monto: string;
        vencimiento: string;
        estado: string;
    }[]>;
}
