import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HogarComponent } from './hogar/hogar.component';
import { CrearComponent } from './crear/crear.component';
import { ConsultarComponent } from './consultar/consultar.component';


/* Se grean las rutas a partir de los componentes importados*/
const routes: Routes = [
    
  {path: '', redirectTo:'/crear', pathMatch:'full'},
  {path: 'hogar', component:HogarComponent},
  {path: 'crear', component:CrearComponent},
  {path: 'consultar', component:ConsultarComponent}



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
