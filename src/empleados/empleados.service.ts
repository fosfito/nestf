import { Injectable } from '@nestjs/common';

@Injectable()
export class EmpleadosService {
    get empleado():string
    {
        return "Pablo Rodrguez";
    }
}
