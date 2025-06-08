import { HttpService } from '@nestjs/axios';
import { RequestCalendarDto } from './dto/request-calendar.dto';
export declare class CalendarioService {
    private readonly http;
    constructor(http: HttpService);
    fetchCalendar(request: RequestCalendarDto): Promise<any>;
    fetchCalendarPortal(request: RequestCalendarDto): Promise<{
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
