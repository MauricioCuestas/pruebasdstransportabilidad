import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/infraestructure/services/roles.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  roles:any;


  constructor(public ListaRoles: RolesService) { }

  ngOnInit(): void {
    this.roles= this.ListaRoles.getRoles()
  }

}
