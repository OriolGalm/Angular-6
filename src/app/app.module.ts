import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { EscenaComponent } from './app/home/escena/escena.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EscenaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
