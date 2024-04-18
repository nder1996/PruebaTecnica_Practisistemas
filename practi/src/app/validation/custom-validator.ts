import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { OperadoresModel } from 'src/model/operadoresModel';


/**
 * Clase que contiene métodos de validación personalizados para su uso en formularios y otras partes de la aplicación.
 */
export class CustomValidator {
    
    /**
     * Extrae el identificador de operador de un string en el formato "id - nombre".
     * @param objetoOperadorId El string que contiene el identificador de operador en formato "id - nombre".
     * @returns El identificador de operador como un número.
     */
    extraerIdOperador(objetoOperadorId: string): number {
        const partes = objetoOperadorId.split(' - ');
        return parseInt(partes[0]);
    }

     /**
     * Verifica si el identificador de operador extraído de un string coincide con algún identificador de operador en una lista dada.
     * @param lista La lista de operadores.
     * @param operador El identificador de operador en formato string.
     * @returns True si hay coincidencia, False de lo contrario.
     */
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