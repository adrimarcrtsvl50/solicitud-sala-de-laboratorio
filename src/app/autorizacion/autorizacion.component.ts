import { Component, OnInit, } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Usuarios } from '../interfaz/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autorizacion',
  templateUrl: './autorizacion.component.html',
  styleUrls: ['./autorizacion.component.scss']
})

export class AutorizacionComponent implements OnInit {
  solicitudes: Usuarios[];
  idbuscar: number;
  constructor(private router:Router,private servicesService: ServicesService) { }
  ngOnInit() {  
    this.servicesService.getSolicitudes().subscribe(datos => {this.solicitudes = datos; console.log(datos)});
  }
  getBuscar() {
    if (this.idbuscar == null)
    {
      this.servicesService.getSolicitudes().subscribe(datos => {this.solicitudes = datos; console.log(datos)});
      alert("1");
    }
    else
    {
      this.servicesService.getSolicitud(this.idbuscar).subscribe(datos => {this.solicitudes[0] = datos; console.log(datos)});
      alert("2");
    }
  }
  aprobar(solicitud:Usuarios):void {
    localStorage.setItem("idSolicitud", solicitud.idSolicitud.toLocaleString());
    this.servicesService.aprobarSolicitud(solicitud).subscribe(data=>{
      solicitud=data;
      alert("Se aprobo correctamente el bloque");
      this.router.navigate(["Autorizacion"]);
    })
  }
  rechazar(solicitud:Usuarios):void {
    localStorage.setItem("idSolicitud", solicitud.idSolicitud.toLocaleString());
    this.servicesService.rechazarSolicitud(solicitud).subscribe(data=>{
      solicitud=data;
      alert("Se rechazo correctamente el bloque");
      this.router.navigate(["Autorizacion"]);
    })
  }
}
