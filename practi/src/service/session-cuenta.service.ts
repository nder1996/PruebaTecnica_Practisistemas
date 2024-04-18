import { Injectable } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';
import { AuthoResponseModel } from 'src/model/authoResponseModel';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { SessionStorageService } from './session-storage.service';
import { CanActivate, Router } from '@angular/router';
import { NotificacionMessageService } from './notificacionMessage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionCuentaService implements CanActivate {
  toast: any;

  constructor(private authService: AutenticacionService,
    private storageService: SessionStorageService, private router: Router, private notifacionMessage: NotificacionMessageService) { }

  public tokenResponse: AuthoResponseModel = new AuthoResponseModel();

  async loginToken(username: string, password: string): Promise<boolean> {
    try {
      const data = await this.authService.generateSessionTokenJson(username, password).toPromise();
      if (data && data.access_token && data.access_token.length > 0) {
        this.storageService.saveData('tokenUser', data.access_token);
        return true;
      } if (data?.detail) {
        this.notifacionMessage.openDialog('alert', 'fa-solid fa-triangle-exclamation', data.detail);
      }
    } catch (err: any) {
      this.notifacionMessage.openDialog('error', 'fa-solid fa-triangle-exclamation', err.error.detail);
      return false;
    }
    return false;
  }


  canActivate(): boolean {
    const token = this.storageService.getData('tokenUser');
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }




  SignClearToken() {
    this.storageService.clearStorage();
  }




}
