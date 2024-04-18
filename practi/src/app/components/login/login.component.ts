
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OperadoresModel } from 'src/model/operadoresModel';
import { LoadingServices } from 'src/service/loadingService';
import { NotificacionMessageService } from 'src/service/notificacionMessage.service';
import { SessionCuentaService } from 'src/service/session-cuenta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent {

  constructor(private router: Router, private fb: FormBuilder, private cdr: ChangeDetectorRef,
    private storageService: SessionCuentaService,
    private loadingService: LoadingServices, private notifacionMessage: NotificacionMessageService,
  ) { }

  public formLogin!: FormGroup;
  public hide: boolean = true;
  public validarSession: boolean = false;
  public listOperadoresModel: OperadoresModel[] = []
  public stateloading: boolean=false;

  async inicioSession() {
    this.loadingService.activarSpinner()
    if (this.formLogin.valid) {
      const usernameValue = this.formLogin.get('username')?.value;
      const passwordValue = this.formLogin.get('password')?.value;
      try {
        this.validarSession = await this.storageService.loginToken(usernameValue, passwordValue);
        this.loadingService.desactivarSpinner()
        if (this.validarSession) {
          this.notifacionMessage.openDialog('success', 'fa-regular fa-circle-check', '¡Has iniciado sesión con éxito!');
          this.router.navigateByUrl('/home');
        }
      } catch (error: any) {
        console.error('hubo un error inesperado al iniciar session : ' + error.err.detail);
      }
    }
  }



  ngAfterViewInit() {
    // No inicialices this.formLogin aquí
    this.cdr.detectChanges();
  }

   ngOnInit() {
    this.formLogin = this.fb.group({ // Inicializa this.formLogin aquí
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    
  }

    

  
   




}




