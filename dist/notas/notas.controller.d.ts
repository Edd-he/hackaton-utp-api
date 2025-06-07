import { NotasService } from './notas.service';
import { RequestGradesDto } from './dto/request-grade.dto';
export declare class NotasController {
    private readonly notasService;
    constructor(notasService: NotasService);
    findAll(request: RequestGradesDto): Promise<any>;
}
