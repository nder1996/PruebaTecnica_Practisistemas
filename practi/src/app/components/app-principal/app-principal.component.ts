import { ChangeDetectorRef, Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { OperadoresModel } from 'src/model/operadoresModel';
import { OperadoresService } from 'src/service/operadores.service';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecargasServiceService } from 'src/service/recargas.service';
import { RecargaModel } from 'src/model/recargaModel';
import { CustomValidator } from 'src/app/validation/custom-validator';
import { NotificacionMessageService } from 'src/service/notificacionMessage.service';
import { SessionStorageService } from 'src/service/session-storage.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-app-principal',
  templateUrl: './app-principal.component.html',
  styleUrls: ['./app-principal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppPrincipalComponent implements OnInit, AfterViewInit {

  public listAutoCompleteOperador: OperadoresModel[] = [];
  public filtroOperador: Observable<string[]> = of([]);
  public formRecarga!: FormGroup;
  public operadoresModel: OperadoresModel = new OperadoresModel();
  public respuestaRecargaOperador: string = "";
  public recargaModel: RecargaModel = new RecargaModel();

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private operadoresService: OperadoresService,
    private recargaService: RecargasServiceService,
    private validation: CustomValidator,
    private notifacionMessage: NotificacionMessageService,
    private sessionStorage: SessionStorageService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.formRecarga = this.fb.group({
      operadorM: ['', Validators.required],
      numeroOperador: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      valorRecarga: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1)]],
    });
  }

  async ngAfterViewInit() {
    await this.getAllOperadores();
    this.filtroOperador = this.formRecarga.get('operadorM')?.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filterOperador(value))
    ) as Observable<string[]>;
    this.cdr.detectChanges();
  }

  private _filterOperador(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (!this.listAutoCompleteOperador) {
      return [];
    }
    return this.listAutoCompleteOperador
      .filter(operador => {
        const idMatches = operador.id?.toString().includes(filterValue);
        const nameMatches = operador.name?.toLowerCase().includes(filterValue);
        return Boolean(idMatches || nameMatches);
      })
      .map(operador => `${operador.id} - ${operador.name}`);
  }


  async getAllOperadores() {
    this.listAutoCompleteOperador = [];
    try {
      const data = await this.operadoresService.getAllOperadores().toPromise();
      if (data) {
        this.listAutoCompleteOperador = data;
      }
    } catch (err) {
      this.notifacionMessage.openDialog('error', 'fa-solid fa-bug', 'Hubo un error al cargar la lista de operadores');
    }
  }

  async enviarRecarga() {
    if (this.formRecarga.valid) {
      this.recargaModel.operador_id = this.validation.extraerIdOperador(this.formRecarga.get('operadorM')?.value);
      this.recargaModel.numero = +this.formRecarga.get('numeroOperador')?.value;
      this.recargaModel.valor = +this.formRecarga.get('valorRecarga')?.value;
      await this.postRecargarOperador(this.recargaModel);
    }
  }



  validarAutoCompleteOperadorEventBlur(event: any) {
    setTimeout(() => {
      if (event?.target?.value) {
        const value = event?.target?.value;
        const coincidenciaOperador: boolean = this.validation.coincidenciasIdOperador(this.listAutoCompleteOperador, value);
        if (!coincidenciaOperador) {
          this.formRecarga.controls['operadorM'].setValue('');
        }
      }
    }, 500);
  }

  async postRecargarOperador(recargaModel: RecargaModel) {
    this.respuestaRecargaOperador = "";
    try {
      const data = await this.recargaService.recargasOperador(recargaModel).toPromise();
      if (data && data.message) {
        this.respuestaRecargaOperador = data.message;
        this.notifacionMessage.openDialog('success', 'fa-solid fa-circle-info', data.message);
      }
    } catch (err: any) {
      this.notifacionMessage.openDialog('alert', 'fa-solid fa-triangle-exclamation', err.error.message);
    }
  }



}