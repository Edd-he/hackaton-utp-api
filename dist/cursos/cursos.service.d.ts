import { HttpService } from '@nestjs/axios';
import { IUserSession } from 'src/users/types/user-session.interface';
export declare class CursosService {
    private readonly http;
    constructor(http: HttpService);
    fetchGrades(session: IUserSession): Promise<{
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
