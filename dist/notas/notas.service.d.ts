import { HttpService } from '@nestjs/axios';
import { RequestGradesDto } from './dto/request-grade.dto';
export declare class NotasService {
    private readonly http;
    constructor(http: HttpService);
    private readonly apiUrl;
    private readonly query;
    fetchGrades(request: RequestGradesDto): Promise<any>;
    getGrades(request: RequestGradesDto): Promise<{
        curso: any;
        notas: any;
    }>;
}
