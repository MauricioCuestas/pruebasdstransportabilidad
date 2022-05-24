import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudRealizadasProgramadorComponent } from './solicitud-realizadas-programador.component';

describe('SolicitudRealizadasProgramadorComponent', () => {
  let component: SolicitudRealizadasProgramadorComponent;
  let fixture: ComponentFixture<SolicitudRealizadasProgramadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudRealizadasProgramadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudRealizadasProgramadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
