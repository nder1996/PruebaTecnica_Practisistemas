import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionMessageComponent } from './notificacion-message.component';

describe('NotificacionMessageComponent', () => {
  let component: NotificacionMessageComponent;
  let fixture: ComponentFixture<NotificacionMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificacionMessageComponent]
    });
    fixture = TestBed.createComponent(NotificacionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
