import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolitudesRealizadasComponent } from './solitudes-realizadas.component';

describe('SolitudesRealizadasComponent', () => {
  let component: SolitudesRealizadasComponent;
  let fixture: ComponentFixture<SolitudesRealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolitudesRealizadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolitudesRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
