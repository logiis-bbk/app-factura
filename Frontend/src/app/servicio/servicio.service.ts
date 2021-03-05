// se elimino el archivo : servicio.service.spec.ts
import { Injectable } from '@angular/core';
//se importa modulos Injectable / http / atributos de la factura / environments
import { HttpClient } from '@angular/common/http';
import { Factura } from '../modelo/factura';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  // url:string = environment.baseUrl
  baseUrl = environment.baseUrl;

  //injeccion de dependencia:

  constructor(public http: HttpClient) { }


  public getFactura() {
    // return this.http.get<Factura[]>(this.url+'/factura')
    return this.http.get<any>(this.baseUrl);
  }
}
