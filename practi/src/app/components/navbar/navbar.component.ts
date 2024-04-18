import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/service/session-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  constructor(
    private sessionStorage: SessionStorageService,
    private router: Router
  ) { }

  cerrarSession() {
    this.sessionStorage.clearStorage();
    this.router.navigateByUrl('/login');
  }

}
