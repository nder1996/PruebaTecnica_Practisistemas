import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificacionMessageComponent } from 'src/app/components/notificacion-message/notificacion-message.component';


/**
 * Servicio encargado de mostrar notificaciones emergentes en la aplicación.
 * Este servicio proporciona una función para abrir un diálogo de notificación con un mensaje, un tipo y un icono.
 */
@Injectable({
  providedIn: 'root',
})
export class NotificacionMessageService {



  constructor(private dialog: MatDialog) { }

  /**
   * Método para abrir un diálogo de notificación.
   * @param tipo Tipo de notificación (puede ser 'success', 'warning', 'error', etc.).
   * @param icon Icono a mostrar en la notificación.
   * @param mensaje Mensaje de la notificación.
   * @returns Una referencia al diálogo de notificación abierto.
   */
  openDialog(tipo: string, icon: string, mensaje: string): MatDialogRef<NotificacionMessageComponent> {
    const dialogRef = this.dialog.open(NotificacionMessageComponent, {
      width: '300px',
      position: { top: '20px', right: '20px' },
      data: { tipo, icon, mensaje },
      backdropClass: 'first-modal-backdrop',
      hasBackdrop: false
    });
    setTimeout(() => {
      dialogRef.close();
    }, 3000);
    return dialogRef;
  }

}

//this.dialogService.openDialog('info', 'fa-solid fa-circle-info', 'Este es un mensaje de notificación.'); informativo
//this.dialogService.openDialog('success', 'fa-regular fa-circle-check', 'Este es un mensaje de notificación.'); //exito
//this.dialogService.openDialog('alert', 'fa-solid fa-triangle-exclamation', 'Este es un mensaje de notificación.'); //alert
//this.notificacionMessageService.openDialog('error', 'fa-solid fa-bug', 'Este es un mensaje de notificación.'); //error

