import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { RecargaModel } from 'src/model/recargaModel';
import { SessionCuentaService } from './session-cuenta.service';


/**
 * Servicio encargado de realizar y gestionar las operaciones relacionadas con las recargas.
 * Este servicio proporciona métodos para enviar recargas a operadores y gestionar las interacciones con la API correspondiente.
 */
@Injectable({
  providedIn: 'root'
})
export class RecargasServiceService {

  constructor(private httpClient: HttpClient,private sessionService: SessionCuentaService) { }


  // URL de la API para enviar recargas
  public apiUrl = enviroment.apiRestURL + '/api/v1/enviar_recarga';

    /**
   * Método para enviar una solicitud de recarga a un operador.
   * @param recarga Objeto RecargaModel que contiene los detalles de la recarga.
   * @returns Un observable que emite la respuesta de la API.
   */
  recargasOperador(recarga: RecargaModel): Observable<any> {
    const headers = this.sessionService.getTokenSession(); 
    return this.httpClient.post<any>(this.apiUrl, recarga, { headers: headers });
  }
  
}
