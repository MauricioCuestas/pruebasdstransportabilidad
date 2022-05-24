import { Injectable } from '@angular/core';
import * as rolConstants from '../utils/roles.constants'



@Injectable({
  providedIn: 'root'
})
export class RolesService {
  rol = rolConstants.ROLES;
  constructor() { 
    // TEMPORAL ESTA FUNCION SE USARA PARA ENVIAR EL TIPO DE ROL LUEGO DE LOGEAR
    this.changeRol("directivo")
  }

  changeRol(name:string){ 
    this.rol = this.rol.map(obj => {
      if (obj.name === name) {
        return {...obj, value: true};
      }
      return obj;
    });
  }

  getRoles(){
    const  seleccion = this.rol.find( valor => valor.value === true );
    return seleccion;
  }

  
}
