import { IUserSession } from 'src/users/types/user-session.interface';
import { CalendarioService } from './calendario.service';
import { RequestCalendarDto } from './dto/request-calendar.dto';
export declare class CalendarioController {
    private readonly calendarioService;
    constructor(calendarioService: CalendarioService);
    getAllByPortal(session: IUserSession, request: RequestCalendarDto): Promise<{
        fecha: string;
        clases: {
            curso: string;
            profesor: string;
            salon: string;
            dia: string;
            inicio: string;
            fin: string;
        }[];
    }>;
}
