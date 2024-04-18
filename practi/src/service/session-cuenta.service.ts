import { Injectable } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';
import { AuthoResponseModel } from 'src/model/authoResponseModel';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { SessionStorageService } from './session-storage.service';
import { CanActivate, Router } from '@angular/router';
import { NotificacionMessageService } from './notificacionMessage.service';
import { HttpHeaders } from '@angular/common/http';


/**
 * Servicio encargado de gestionar la sesión de cuenta del usuario.
 * Proporciona métodos para iniciar sesión, verificar el estado de la sesión, cerrar sesión
 * y obtener el token de sesión para autorización en las solicitudes HTTP.
 * Además, implementa CanActivate para controlar el acceso a las rutas protegidas.
 */
@Injectable({
  providedIn: 'root'
})
export class SessionCuentaService implements CanActivate {
  toast: any; // Variable para manejar notificaciones de error

  constructor(private authService: AutenticacionService,
    private storageService: SessionStorageService, private router: Router, private notifacionMessage: NotificacionMessageService) { }

  public tokenResponse: AuthoResponseModel = new AuthoResponseModel();

  /**
  * Método para realizar el inicio de sesión y obtener el token de sesión.
  * @param username Nombre de usuario.
  * @param password Contraseña del usuario.
  * @returns Una promesa que se resuelve en true si el inicio de sesión fue exitoso, false en caso contrario.
  */
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


  /**
  * Método que se ejecuta antes de cargar una ruta para verificar si el usuario tiene acceso.
  * @returns True si el usuario tiene acceso a la ruta, false en caso contrario.
  */
  canActivate(): boolean {
    const token = this.storageService.getData('tokenUser');
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }



  /**
     * Método para cerrar la sesión y limpiar el token de sesión.
     */
  SignClearToken() {
    this.storageService.clearStorage();
  }


  /**
 * Método para obtener el token de sesión y configurarlo en los encabezados de la solicitud HTTP.
 * @returns HttpHeaders configurados con el token de sesión.
 */
  getTokenSession(): any {
    try {
      const token = this.storageService.getData('tokenUser');
      if (!token) {
        console.error("No ahí token disponible")
      }
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
  }




}
