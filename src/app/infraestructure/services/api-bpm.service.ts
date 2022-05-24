import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProcessRequestDTO } from '../interfaces/request/ProcessRequestDTO';
import { ProcessResponseDTO } from '../interfaces/request/ProcessResponseDTO';
import { RequestParamsDTO } from '../interfaces/request/RequestParamsDTO';
import { ApiManagerService } from './api-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ApiBpmService {

  constructor(private _api: ApiManagerService) { }

  
  iniciarInstancia(request: ProcessRequestDTO) : Observable<ProcessResponseDTO> {
    const endpoint = environment.tarea_endPoint + 'startProcess';
    return this._api.post(endpoint, request);
  }

  listarTareas(request: ProcessRequestDTO) : Observable<ProcessResponseDTO> {
    const endpoint = environment.tarea_endPoint + 'task/dasboard';
    return this._api.get(endpoint, request);
  }

  cambiarEstadoTarea (request: RequestParamsDTO) : Observable<ProcessResponseDTO> {
    const endpoint = environment.tarea_endPoint + 'task/modifyStatus';
    return this._api.put(endpoint, request);
  }

  actualizarVariable(request: ProcessRequestDTO) : Observable<ProcessResponseDTO> {
    const endpoint = environment.tarea_endPoint + 'updatevariables';
    return this._api.post(endpoint, request);
  }

}
