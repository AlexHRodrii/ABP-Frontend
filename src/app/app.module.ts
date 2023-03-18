import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './components/boton/boton.component';
import { InputComponent } from './components/input/input.component';
import { TextoComponent } from './components/texto/texto.component';
import { InstalacionComponent } from './components/instalacion/instalacion.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    TextoComponent,
    InputComponent,
    InstalacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
