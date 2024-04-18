import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { OperadoresModel } from 'src/model/operadoresModel';
import { SessionStorageService } from './session-storage.service';
import { RecargaModel } from 'src/model/recargaModel';

@Injectable({
  providedIn: 'root'
})
export class RecargasServiceService {

  constructor(private httpClient: HttpClient,private storageService: SessionStorageService) { }

  public apiUrl = enviroment.apiRestURL + '/api/v1/enviar_recarga';

  recargasOperador(recarga: RecargaModel): Observable<any> {
    const token = this.storageService.getData('tokenUser'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.post<any>(this.apiUrl, recarga, { headers: headers });
  }
  
}
