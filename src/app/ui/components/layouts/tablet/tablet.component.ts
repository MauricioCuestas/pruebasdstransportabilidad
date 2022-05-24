import { Component, OnInit } from '@angular/core';
import { OwnerUserDTO } from 'src/app/infraestructure/interfaces/request/OwnerUserDTO';
import { ProcesoDTO } from 'src/app/infraestructure/interfaces/request/ProcesoDTO';
import { RequestParamsDTO } from 'src/app/infraestructure/interfaces/request/RequestParamsDTO';
import { ValuesDTO } from 'src/app/infraestructure/interfaces/request/ValuesDTO';
import { ApiBpmService } from 'src/app/infraestructure/services/api-bpm.service';
import { RolesService } from 'src/app/infraestructure/services/roles.service';
import { statesTaskActions } from 'src/app/infraestructure/utils/estados.contants';


@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.scss']
})
export class TabletComponent implements OnInit {
  roles:any;
  constructor(public ListaRoles: RolesService,private serviceBPM:ApiBpmService) { }

  ngOnInit(): void {
    this.roles= this.ListaRoles.getRoles()
  } 

  send(){
    console.log("enviado")
    this.updateParametersBPM()
  }


  updateParametersBPM(){
    const callParameters = new RequestParamsDTO();
            callParameters.ownerUser = new OwnerUserDTO();
            callParameters.processId = new ProcesoDTO();
            callParameters.processId.processId = "SolicitudTransporte.SolicitudTransporte",
            callParameters.containerId = "SolicitudTransporte_1.0.0-SNAPSHOT";
            callParameters.taskId = 9,
            callParameters.taskStatus = statesTaskActions.started;
            callParameters.ownerUser.user = "";
            callParameters.ownerUser.password = "";
            callParameters.processInstance = "",
            callParameters.processInstanceId = "",
            callParameters.parametros = new ValuesDTO();
            callParameters.parametros.values = {
              "value": "prueba"
            }

            console.log(callParameters)
    this.serviceBPM.cambiarEstadoTarea(callParameters).subscribe(data =>{
      console.log("data",data)
    })
  }
  

}
