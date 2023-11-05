import { Injectable } from '@nestjs/common';
import {empleadoModel} from './empleadoModel';


@Injectable()
export class EmpleadosService {

    /************************************************************************* 
    //Genero el array empleados y lo cargo
    **************************************************************************/
    empleados=[];  //Array que contendra la lista de empleados  
    constructor()
        {
            let listaempleados = {"id":1, "apyn":"Dennis MacAlistair Ritchie","Tel":"111-1111",'salario':1000}
            this.empleados.push(listaempleados);
            listaempleados = {"id":2, "apyn":"Richard Matthew Stallman","Tel":"222-2222",'salario':2000}
            this.empleados.push(listaempleados);
            listaempleados = {"id":3, "apyn":"Stephen Gary Wozniak","Tel":"333-3333",'salario':3000}
            this.empleados.push(listaempleados);
            listaempleados = {"id":4, "apyn":"Linus Benedict Torvalds","Tel":"444-4444",'salario':4000}
            this.empleados.push(listaempleados);
        }
    getempleado() {
       return this.empleados;       
    }

    /************************************************************************* 
    // AGREGO UN EMPLEADO (USANDO POSTMAN PARA HACERLO)
    **************************************************************************/
    agregarEmpleado(addempleado: empleadoModel)
    {
        let empleadoadd = {'id': addempleado.id, 'apyn': addempleado.apyn, 'tel': addempleado.tel, 'Salario':addempleado.salario}
        this.empleados.push(empleadoadd);
        return "Empleado agregado correctamente";
    }

    

}
