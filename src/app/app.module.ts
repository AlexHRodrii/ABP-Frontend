import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TypoComponent } from './components/typo/typo.component';
import { ImagePickerComponent } from './components/imagepicker/imagepicker.component';
import { MenuComponent } from './components/menu/menu.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { ResumenProductoComponent } from './components/resumenproducto/resumenproducto.component';
import { ResumenComponent } from './components/resumen/resumen.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TypoComponent,
    InputComponent,
    MenuComponent,
    CustomCardComponent,
    ResumenProductoComponent,
    ImagePickerComponent,
    ResumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

