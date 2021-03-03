import { Component, OnInit } from '@angular/core';
/* importamos el servicio creado*/
import { VentaService } from '../../venta.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})

export class GenerateComponent implements OnInit {

  ventas=null;

  ven={

        id_factura: "1254",
        fecha: "03/03/2021",
        id_cliente: null,
        nombre_cliente: null,
        direccion: null,
        telefono: null,
        correo: null

  }

  constructor(private ventasServicio: VentaService) { }

  ngOnInit() {
    
   }

  /*
  ngOnInit() {
   this.traerTodos()
  }

  traerTodos() {
    this.ventasServicio.traerTodos().subscribe(result => this.ventas = result);
  }

  enviar() {
    this.ventasServicio.enviar(this.ventas).subscribe)(
      datos=> {
        if (datos['resultado']==='OK') {
          alert (datos['mensaje']);
          this.traerTodos();
        }
      }
    );
  }

  traerUno(id_factura) {
    this.ventasServicio.traerUno(id_factura).subscribe(
      datos=> {
        if (datos['resultado']==='OK') {
          alert (datos['mensaje']);
          this.traerTodos();
        }
      }
    );
  }

*/

}
