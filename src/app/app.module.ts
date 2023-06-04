import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ImovelComponent } from './components/imovel/imovel.component';
import { ProprietarioComponent } from './components/proprietario/proprietario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImovelComponent,
    ProprietarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
