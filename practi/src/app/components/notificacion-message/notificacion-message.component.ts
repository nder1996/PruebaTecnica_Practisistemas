import { Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notificacion-message',
  templateUrl: './notificacion-message.component.html',
  styleUrls: ['./notificacion-message.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotificacionMessageComponent {
  public data: any;
  constructor(
   public dialogRef: MatDialogRef<NotificacionMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public dataFromDialog: any
  ) {
    this.data = dataFromDialog;
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }
  
}