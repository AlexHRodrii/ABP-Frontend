import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TypoComponent } from './components/typo/typo.component';
import { MenuComponent } from './menu/menu.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { ImagePickerComponent } from './components/imagepicker/imagepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TypoComponent,
    InputComponent,
    MenuComponent,
    CustomCardComponent,
    ImagePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
