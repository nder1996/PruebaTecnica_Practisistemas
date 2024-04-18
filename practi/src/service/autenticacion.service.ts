import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthoResponseModel } from 'src/model/authoResponseModel';
import { enviroment } from 'src/enviroments/enviroment'; // Asegúrate de que la ruta sea correcta
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private httpClient: HttpClient) { }

  public apiUrl = enviroment.apiRestURL + '/token_json';

  generateSessionTokenJson(username: string, password: string): Observable<AuthoResponseModel> {
    const body = { username: username, password: password };
    return this.httpClient.post<AuthoResponseModel>(this.apiUrl, body);
  }
}