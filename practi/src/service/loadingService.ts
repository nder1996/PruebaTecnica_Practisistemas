import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingServices {
  private spinnerStateSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  activarSpinner(activate:boolean):void{
    this.spinnerStateSubject.next(activate);
  }


  desactivarSpinner(disable:boolean):void{
    this.spinnerStateSubject.next(disable);
  }


  getSpinnerState() {
    return this.spinnerStateSubject.asObservable();
  }
}