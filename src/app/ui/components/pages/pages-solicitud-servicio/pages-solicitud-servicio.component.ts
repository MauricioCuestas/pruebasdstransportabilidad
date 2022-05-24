import { Component, OnInit } from '@angular/core';
import { OwnerUserDTO } from 'src/app/infraestructure/interfaces/request/OwnerUserDTO';
import { ProcesoDTO } from 'src/app/infraestructure/interfaces/request/ProcesoDTO';
import { ProcessRequestDTO } from 'src/app/infraestructure/interfaces/request/ProcessRequestDTO';
import { RequestParamsDTO } from 'src/app/infraestructure/interfaces/request/RequestParamsDTO';
import { ValuesDTO } from 'src/app/infraestructure/interfaces/request/ValuesDTO';
import { ApiBpmService } from 'src/app/infraestructure/services/api-bpm.service';

@Component({
  selector: 'app-pages-solicitud-servicio',
  templateUrl: './pages-solicitud-servicio.component.html',
  styleUrls: ['./pages-solicitud-servicio.component.scss']
})
export class PagesSolicitudServicioComponent implements OnInit {

  constructor(private serviceBPM:ApiBpmService) { }

  ngOnInit(): void {
  }
  

  send(){
    console.log("enviado")
    this.receiveParametersBPM()
  }



  receiveParametersBPM(){
    const callParameters = new RequestParamsDTO();
            callParameters.ownerUser = new OwnerUserDTO();
            callParameters.processId = new ProcesoDTO();
            callParameters.processId.processId = "SolicitudTransporte.SolicitudTransporte",
            callParameters.containerId = "SolicitudTransporte_1.0.0-SNAPSHOT";
            callParameters.taskId = "",
            callParameters.taskStatus = "";
            callParameters.ownerUser.user = "";
            callParameters.ownerUser.password = "";
            callParameters.processInstance = "",
            callParameters.processInstanceId = "",
            callParameters.parametros = new ValuesDTO();
            callParameters.parametros.values = {
              "value": "prueba"
            }

            console.log(callParameters)
    this.serviceBPM.iniciarInstancia(callParameters).subscribe(data =>{
      console.log("data",data)
    })
  }




}
