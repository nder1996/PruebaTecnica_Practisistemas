import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthoResponseModel } from 'src/model/authoResponseModel';
import { enviroment } from 'src/enviroments/enviroment'; 


/**
 * Servicio encargado de gestionar la autenticación de usuarios.
 * Este servicio consume el endpoint de autenticación token_json para obtener el token de sesión de la aplicación.
 */
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {


  constructor(private httpClient: HttpClient) { }

// URL del endpoint de autenticación
  public apiUrl = enviroment.apiRestURL + '/token_json';

  
  
   /**
   * Método para generar el token de sesión JSON.
   * @param username Nombre de usuario.
   * @param password Contraseña del usuario.
   * @returns Un observable que emite un objeto de tipo AuthoResponseModel.
   */
  generateSessionTokenJson(username: string, password: string): Observable<AuthoResponseModel> {
    const body = { username: username, password: password };
    return this.httpClient.post<AuthoResponseModel>(this.apiUrl, body);
  }
}