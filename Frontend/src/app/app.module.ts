import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { GenerateComponent } from './componentes/generate/generate.component';
import { ApproveComponent } from './componentes/approve/approve.component';
import { ReporteComponent } from './componentes/reporte/reporte.component';
import { InvoiceComponent } from './componentes/generate/invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    GenerateComponent,
    ApproveComponent,
    ReporteComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
