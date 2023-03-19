import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {LoginComponent} from "./views/login/login.component";
import {RegisterComponent} from "./views/register/register.component";
import {ResumenComponent} from "./views/resumen/resumen.component";
import {ListaInstalacionesComponent} from "./views/lista-instalaciones/lista-instalaciones.component";
import {ListaProductosComponent} from "./views/lista-productos/lista-productos.component";
import {InstalacionComponent} from "./views/instalacion/instalacion.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart', component: ResumenComponent},
  {
    path: 'instalaciones', component: ListaInstalacionesComponent, children: [
      {path: ':id', component: InstalacionComponent},
    ]
  },
  {path: 'productos', component: ListaProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
