import { PagosService } from './pagos.service';
import { RequestPaymentsDto } from './dto/request-payments.dto';
export declare class PagosController {
    private readonly pagosService;
    constructor(pagosService: PagosService);
    findAll(request: RequestPaymentsDto): Promise<any[]>;
}
