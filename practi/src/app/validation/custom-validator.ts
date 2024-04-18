import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { OperadoresModel } from 'src/model/operadoresModel';



export class CustomValidator {

    extraerIdOperador(objetoOperadorId: string): number {
        const partes = objetoOperadorId.split(' - ');
        return parseInt(partes[0]);
    }

    coincidenciasIdOperador(lista: OperadoresModel[], operador: string): boolean {
        if (!lista || !operador) {
            return false;
        }
        if(operador && lista){
            const num:number = this.extraerIdOperador(operador);
            if(num){
               const boolCoincidencia:boolean  = lista.some(item => item.id === num);
               if(boolCoincidencia==true){
                return true; 
               }
            }   
        }
       return false;
    }
    

}