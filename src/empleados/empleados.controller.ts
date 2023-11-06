import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { empleadoModel } from './empleadoModel'


@Controller('empleados')
export class EmpleadosController 
    {
        constructor(private readonly servicio: EmpleadosService){}
        
        @Get()
        getempleados(){
        return this.servicio.getempleados();
        }

        @Get(':id')
        getempleado(@Param('id') id: string){
        return this.servicio.getempleado(id);
        }

           

        @Post()
        agregarEmpleado(@Body() addempleado: empleadoModel)
        {
            return this.servicio.agregarEmpleado(addempleado);
        }
        /*
        BODY para el postman:
        {"id": 5, 
        "apyn":"Ada Lovelace",
        "tel":"555-5555",
        "salario":5000}
        */

        @Delete(':id')
        eliminarEmpleado(@Param('id') id: string) {
        return this.servicio.eliminarEmpleado(id);
        }

        @Put(':id')
        updateempleado(
                        @Param('id') id:number,
                        @Body('apyn') apyn:string,
                        @Body('tel') tel:string,
                        @Body('salario') salario:number,
                      )
        {
                  return this.updateempleado(updateempleado)  
        }
    }

