import { CalendarioService } from './calendario.service';
import { RequestCalendarDto } from './dto/request-calendar.dto';
export declare class CalendarioController {
    private readonly calendarioService;
    constructor(calendarioService: CalendarioService);
    getAll(request: RequestCalendarDto): Promise<any>;
    getAllByPortal(request: RequestCalendarDto): Promise<import("./types/calendar.types").Date>;
}
