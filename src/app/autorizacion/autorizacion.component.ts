import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Usuarios } from '../interfaz/usuarios';

@Component({
  selector: 'app-autorizacion',
  templateUrl: './autorizacion.component.html',
  styleUrls: ['./autorizacion.component.scss']
})
export class AutorizacionComponent implements OnInit {
  user:Usuarios = new Usuarios();
  Persona:any=[
    {nombre:"miguel",apellido:"orjuela",estado:true},
    {nombre:"guerra",apellido:"ivan",estado:true},
  ];
  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
  }
  getTodasSolicitudes() {
    this.servicesService.getSolicitudes().subscribe(usuarios => {console.log(usuarios); });
  }
  getSoloSolicitud() {
    this.servicesService.getSolicitud(3).subscribe(usuarios => {console.log(usuarios); });
  }
}
