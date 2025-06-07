import { HttpService } from '@nestjs/axios';
import { RequestGradesDto } from './dto/request-grade.dto';
export declare class NotasService {
    private readonly http;
    constructor(http: HttpService);
    fetchGrades(request: RequestGradesDto): Promise<any>;
}
