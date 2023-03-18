import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './components/boton/boton.component';
import { InputComponent } from './components/input/input.component';
import { TextoComponent } from './components/texto/texto.component';
import { ImagePickerComponent } from './components/imagepicker/imagepicker.component';
import { NgpImagePickerModule } from 'ngp-image-picker';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    TextoComponent,
    InputComponent,
    ImagePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgpImagePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
