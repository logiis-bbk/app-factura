import { Component, OnInit } from '@angular/core';
import { Factura } from '../modelo/factura';
//importamos el servicio
import { ServicioService } from '../servicio/servicio.service';


@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.css']
})
export class HogarComponent implements OnInit {

 

  facturas: Factura[] = []


  //injeccion de dependencias
  constructor(public servicio: ServicioService) { }

  ngOnInit(): void {
    this.getFactura();
  }
  // private getFactura() {
  //   this.servicio.getFactura().subscribe (
  //     res => {
  //       console.log(res)
  //       this.facturas = res

  //    }, error=> {
  //      console.log(error)
  //    }
  // )


  getFactura(): void {
    this.servicio.getFactura().subscribe(res => {
      console.log(res)
      const { facturas } = res
      this.facturas = facturas;
    });
  }



}


