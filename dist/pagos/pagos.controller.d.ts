import { IUserSession } from 'src/users/types/user-session.interface';
import { PagosService } from './pagos.service';
export declare class PagosController {
    private readonly pagosService;
    constructor(pagosService: PagosService);
    findAll(session: IUserSession): Promise<{
        item: string;
        descripcion: string;
        monto: string;
        vencimiento: string;
        estado: string;
    }[]>;
}
