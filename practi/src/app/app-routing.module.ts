import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPrincipalComponent } from './components/app-principal/app-principal.component';
import { LoginComponent } from './components/login/login.component';
import { SessionCuentaService } from 'src/service/session-cuenta.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AppPrincipalComponent, canActivate: [SessionCuentaService] }, // Aquí se agrega el guardián
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
