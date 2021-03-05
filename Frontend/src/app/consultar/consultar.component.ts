import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { Factura } from '../modelo/factura';
import { ServicioService } from '../servicio/servicio.service';
import {formatDate} from '@angular/common';



@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
   // array:
facturas: Factura[] = []

//injeccion de dependencias
constructor(public servicio: ServicioService) { }

  ngOnInit(): void {
    this.getFactura();
  }


getFactura(): void {
  this.servicio.getFactura().subscribe(res => {
    console.log(res)
    const { facturas } = res
    this.facturas = facturas;
  });
}

eliminaFactura(id: string): void {
  if(window.confirm("Estas seguro de eliminar la factura")){
    this.servicio.eliminaFactura(id).subscribe(res => {
      console.log(res)
      this.getFactura();
    }, (error) => {
      console.error(error);
    })
  }
}

myDato = Date.now();


//pendiente introducir fecha
  





}