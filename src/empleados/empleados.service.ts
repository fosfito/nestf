import { Injectable } from '@nestjs/common';

@Injectable()
export class EmpleadosService {

    getempleado():string
    {
        return 'Pablo Rodrguez';
    }
}
