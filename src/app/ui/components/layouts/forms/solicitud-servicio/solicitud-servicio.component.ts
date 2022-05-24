import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-servicio',
  templateUrl: './solicitud-servicio.component.html',
  styleUrls: ['./solicitud-servicio.component.scss']
})
export class SolicitudServicioComponent implements OnInit {
  @Input() title!:string; 
  constructor() { }

  ngOnInit(): void {
    console.log(this.title)
  }

}
