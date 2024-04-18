import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }


  // Método para guardar datos en sessionStorage
  saveData(key: string, data: any): void {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  // Método para obtener datos de sessionStorage
  getData(key: string): any {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Método para actualizar datos en sessionStorage
  updateData(key: string, newData: any): void {
    const existingData = this.getData(key);
    if (existingData) {
      // Actualizar los datos existentes
      Object.assign(existingData, newData);
      this.saveData(key, existingData);
    }
  }

  // Método para eliminar datos de sessionStorage
  deleteData(key: string): void {
    sessionStorage.removeItem(key);
  }

  // Método para limpiar todos los datos de sessionStorage
  clearStorage(): void {
    sessionStorage.clear();
    
  }

}
