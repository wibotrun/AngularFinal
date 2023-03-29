import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './Pages/catalogo/catalogo.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';

const routes: Routes = [
  {path:"",component:CatalogoComponent},
  {path:"alta",component:RegistroComponent},
  {path:"ingresar",component:LoginComponent},
  {path:"Champs/:uuid",component:DetalleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
