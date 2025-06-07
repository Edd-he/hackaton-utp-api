import { CalendarioService } from './calendario.service';
export declare class CalendarioController {
    private readonly calendarioService;
    constructor(calendarioService: CalendarioService);
    findAll(): Promise<any>;
}
