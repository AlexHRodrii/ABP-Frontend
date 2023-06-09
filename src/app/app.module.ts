import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TypoComponent } from './components/typo/typo.component';
import { MenuComponent } from './components/menu/menu.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { ResumenProductoComponent } from './components/resumenproducto/resumenproducto.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ResumenComponent } from './views/resumen/resumen.component';
import { InstalacionComponent } from './views/instalacion/instalacion.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ListaInstalacionesComponent } from './views/lista-instalaciones/lista-instalaciones.component';
import { ListaProductosComponent } from './views/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TypoComponent,
    InputComponent,
    MenuComponent,
    CustomCardComponent,
    ResumenProductoComponent,
    DashboardComponent,
    ResumenComponent,
    InstalacionComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListaInstalacionesComponent,
    ListaProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

