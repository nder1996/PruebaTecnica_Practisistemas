import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { AuthoResponseModel } from 'src/model/authoResponseModel';

import { SessionStorageService } from './session-storage.service';
import { OperadoresModel } from 'src/model/operadoresModel';

@Injectable({
  providedIn: 'root'
})
export class OperadoresService {

  public apiUrl = enviroment.apiRestURL + '/api/v1/operadores';

  constructor(private httpClient: HttpClient,private storageService: SessionStorageService) { }

  getAllOperadores(): Observable<OperadoresModel[]> {
    const token = this.storageService.getData('tokenUser');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(this.apiUrl, { headers: headers }).pipe(
      map((response: any) => response.data as OperadoresModel[])
    );  
  }

}
