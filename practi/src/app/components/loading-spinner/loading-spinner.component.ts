import { Component } from '@angular/core';
import { LoadingServices } from 'src/service/loadingService';


@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {

  constructor(private spinnerService: LoadingServices){
  }


  public isSpinnerVisible: boolean = false;

  ngOnInit(): void {
    this.spinnerService.getSpinnerState().subscribe((state: boolean) => {
      this.isSpinnerVisible = state;
    });
  }
}
