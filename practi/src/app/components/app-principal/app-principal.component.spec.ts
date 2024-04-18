import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrincipalComponent } from './app-principal.component';

describe('AppPrincipalComponent', () => {
  let component: AppPrincipalComponent;
  let fixture: ComponentFixture<AppPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPrincipalComponent]
    });
    fixture = TestBed.createComponent(AppPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
