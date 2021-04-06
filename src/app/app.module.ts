import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo.component';

import localeEs from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
