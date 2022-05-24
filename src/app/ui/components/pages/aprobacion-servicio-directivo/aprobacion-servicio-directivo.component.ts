import { Component, OnInit } from '@angular/core';
import { OwnerUserDTO } from 'src/app/infraestructure/interfaces/request/OwnerUserDTO';
import { ProcesoDTO } from 'src/app/infraestructure/interfaces/request/ProcesoDTO';
import { RequestParamsDTO } from 'src/app/infraestructure/interfaces/request/RequestParamsDTO';
import { ValuesDTO } from 'src/app/infraestructure/interfaces/request/ValuesDTO';
import { ApiBpmService } from 'src/app/infraestructure/services/api-bpm.service';
import { statesTaskActions } from 'src/app/infraestructure/utils/estados.contants';

@Component({
  selector: 'app-aprobacion-servicio-directivo',
  templateUrl: './aprobacion-servicio-directivo.component.html',
  styleUrls: ['./aprobacion-servicio-directivo.component.scss']
})
export class AprobacionServicioDirectivoComponent implements OnInit {
  show:boolean = false;
  constructor(private serviceBPM:ApiBpmService) { }

  ngOnInit(): void {
  }

  validate(){
    this.show = true
  }

  reject(){
    this.show = true
  }

  aprove(){
    this.show = false
    this.updateParametersBPM()
  }


  updateParametersBPM(){
    const callParameters = new RequestParamsDTO();
            callParameters.ownerUser = new OwnerUserDTO();
            callParameters.processId = new ProcesoDTO();
            callParameters.processId.processId = "SolicitudTransporte.SolicitudTransporte",
            callParameters.containerId = "SolicitudTransporte_1.0.0-SNAPSHOT";
            callParameters.taskId = 9,
            callParameters.taskStatus = "";
            callParameters.ownerUser.user = "";
            callParameters.ownerUser.password = "";
            callParameters.processInstance = "",
            callParameters.processInstanceId = "8",
            callParameters.parametros = new ValuesDTO();
            callParameters.parametros.values = {
              "value": "Transportabilidad"
            }

            console.log(callParameters)
    this.serviceBPM.actualizarVariable(callParameters).subscribe(data =>{
      console.log("data",data)
    })
  }

}
