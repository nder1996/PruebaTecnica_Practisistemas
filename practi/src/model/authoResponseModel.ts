/**
 * Modelo de datos para representar la respuesta de autenticación.
 * Esta clase define la estructura de los datos devueltos por un servicio de autenticación.
 */
export class AuthoResponseModel {
    access_token?: string;
    token_type?: string;
    detail?:string;
    constructor(
        access_token?: string,
        token_type?: string,
        detail?: string
    ) {
        this.access_token = access_token;
        this.token_type = token_type;
        this.detail = detail;
    }
}