import { IUserSession } from 'src/users/types/user-session.interface';
import { CursosService } from './cursos.service';
export declare class CursosController {
    private readonly cursosService;
    constructor(cursosService: CursosService);
    getCourses(session: IUserSession): Promise<{
        resumen: {
            campus: any;
            cursosInscritos: any;
            cicloRelativo: any;
            totalCreditos: any;
            horasSemanales: any;
        };
        cursos: any;
    }>;
}
