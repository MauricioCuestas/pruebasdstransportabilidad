import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSolicitudServicioComponent } from './pages-solicitud-servicio.component';

describe('PagesSolicitudServicioComponent', () => {
  let component: PagesSolicitudServicioComponent;
  let fixture: ComponentFixture<PagesSolicitudServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSolicitudServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSolicitudServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
