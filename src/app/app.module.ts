import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputComponent } from './components/input/input.component';
import { TextoComponent } from './components/texto/texto.component';

@NgModule({
  declarations: [
    AppComponent,
    TextoComponent
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
