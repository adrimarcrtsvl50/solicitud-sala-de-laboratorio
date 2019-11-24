import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaz/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient
  ) { }

  path = 'http://localhost:9001/Solicitudes';
  getSolicitudes(){
    return this.http.get<Usuarios[]>(this.path);
  }
  getSolicitud(id:number){
    return this.http.get<Usuarios>(this.path+'/'+id);
  }
}
