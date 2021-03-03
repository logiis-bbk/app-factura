import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consecutivo1 } from './consecutivo-1';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  /* direccion donde estan los archivos php. */
  url = "http://localhost/Backend/"


  constructor(private http: HttpClient) { }

  traerTodos() {
    return this.http.get(`${this.url}getAll.php`);
  }

  enviar(consecutivo:Consecutivo1) {
    return this.http.post(`${this.url}post.php`, JSON.stringify(consecutivo));

  }

  traerUno(codigo: number) {
    return this.http.get(`${this.url}get.php?codigo=${codigo}`);
  }

  seleccionar(codigo: number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificacion(consecutivo:Consecutivo1) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(consecutivo));
  }

  deleteMascota(consecutivo: Consecutivo1) {
    return this.http.delete(`${this.url}/delete.php?idMascota=${consecutivo.id_factura}`);
  }

  updateMascota(consecutivo: Consecutivo1) {
    return this.http.put(`${this.url}/update.php`, consecutivo)
  }
};
