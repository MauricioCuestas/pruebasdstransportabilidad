import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjusteSolicitudServiciosComponent } from './ajuste-solicitud-servicios.component';

describe('AjusteSolicitudServiciosComponent', () => {
  let component: AjusteSolicitudServiciosComponent;
  let fixture: ComponentFixture<AjusteSolicitudServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjusteSolicitudServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjusteSolicitudServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
