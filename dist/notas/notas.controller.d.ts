import { IUserSession } from 'src/users/types/user-session.interface';
import { NotasService } from './notas.service';
export declare class NotasController {
    private readonly notasService;
    constructor(notasService: NotasService);
    getGrades(cursoId: string, session: IUserSession): Promise<{
        curso: any;
        notas: any;
    }>;
}
