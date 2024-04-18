/**
 * Modelo de datos para representar una recarga.
 * Esta clase define la estructura de los datos relacionados con una recarga en la aplicación.
 */
export class RecargaModel {
    operador_id?: number;
    numero?: number;
    valor?: number;
    constructor(
        operador_id?: number,
        numero?: number,
        valor?: number
    ) {
        this.operador_id = operador_id;
        this.numero = numero;
        this.valor = valor;
    }
}