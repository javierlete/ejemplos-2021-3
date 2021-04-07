import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo.component';

import localeEs from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { MayusculadorPipe } from './mayusculador.pipe';
import { FosforitoDirective } from './fosforito.directive';
import { AnoserqueDirective } from './anoserque.directive';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MayusculadorPipe,
    FosforitoDirective,
    AnoserqueDirective
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
