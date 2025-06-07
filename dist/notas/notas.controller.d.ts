import { NotasService } from './notas.service';
export declare class NotasController {
    private readonly notasService;
    constructor(notasService: NotasService);
    findAll(): Promise<any>;
}
