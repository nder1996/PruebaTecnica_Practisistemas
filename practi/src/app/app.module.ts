import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { AppPrincipalComponent } from './components/app-principal/app-principal.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { CustomValidator } from './validation/custom-validator';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NotificacionMessageComponent } from './components/notificacion-message/notificacion-message.component'


@NgModule({
  declarations: [
    AppComponent,
    AppPrincipalComponent,
    LoginComponent,
    NavbarComponent,
    LoadingSpinnerComponent,
    NotificacionMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule, // Agregar MatDialogModule aquí
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [CustomValidator,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }