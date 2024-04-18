import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';

import { OperadoresModel } from 'src/model/operadoresModel';
import { SessionCuentaService } from './session-cuenta.service';

/**
 * Servicio encargado de realizar operaciones relacionadas con los operadores.
 */
@Injectable({
  providedIn: 'root'
})
export class OperadoresService {

  // URL de la API para obtener operadores
  public apiUrl = enviroment.apiRestURL + '/api/v1/operadores';

  constructor(private httpClient: HttpClient, private sessionService: SessionCuentaService) { }



   /**
   * Método para obtener todos los operadores.
   * @returns Un observable que emite un array de objetos OperadoresModel.
   */
  getAllOperadores(): Observable<OperadoresModel[]> {
    const headers = this.sessionService.getTokenSession(); 
    return this.httpClient.get(this.apiUrl, { headers: headers }).pipe(
      map((response: any) => response.data as OperadoresModel[])
    );
  }

}
