import { Controller, Get } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';


@Controller('empleados')
export class EmpleadosController 
    {
        constructor(private readonly servicio: EmpleadosService){}
        
            @Get()
            getempleado(): string{
                return this.servicio.getempleado();
            }
        
    }
