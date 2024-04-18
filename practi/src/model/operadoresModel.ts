/**
 * Modelo de datos para representar un operador.
 * Esta clase define la estructura de los datos relacionados con un operador en la aplicación.
 */
export class OperadoresModel {
    id?: number;
    name?: string;
    constructor(
        id?: number,
        name?: string,
    ) {
        this.id = id;
        this.name = name;
    }
}