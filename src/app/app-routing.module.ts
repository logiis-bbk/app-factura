import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateComponent } from './componentes/generate/generate.component';
import { ReporteComponent } from './componentes/reporte/reporte.component';
import { ApproveComponent } from './componentes/approve/approve.component';
import { InvoiceComponent } from './componentes/generate/invoice/invoice.component';
const routes: Routes = [

  {path: 'reporte', component: ReporteComponent},
  {path: 'approve', component: ApproveComponent},
  {path: 'generate', component: GenerateComponent,
  /* ruta para la factura */
    children:     [
        {path: 'invoice', component: InvoiceComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
