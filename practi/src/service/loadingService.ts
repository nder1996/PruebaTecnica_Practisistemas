import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


/**
 * Servicio para gestionar el componente de carga (loading) en la aplicación.
 * Permite mostrar, activar o desactivar el componente de carga en diferentes partes de la aplicación.
 */
@Injectable({
  providedIn: 'root'
})
export class LoadingServices {
  private spinnerStateSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

   /**
   * Activa el componente de carga.
   * Este método muestra el componente de carga en la interfaz de usuario.
   */
  activarSpinner():void{
    this.spinnerStateSubject.next(true);
  }


  /**
   * Desactiva el componente de carga.
   * Este método oculta el componente de carga de la interfaz de usuario.
   */
  desactivarSpinner():void{
    this.spinnerStateSubject.next(false);
  }

  /**
   *El método getSpinnerState() de un servicio puede ser utilizado para obtener el estado actual 
    del spinner (o componente de carga) como un Observable
   * @returns 
   */
  getSpinnerState() {
    return this.spinnerStateSubject.asObservable();
  }
}