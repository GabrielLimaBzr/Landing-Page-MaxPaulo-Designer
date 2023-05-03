import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/template/header/header.component";
import { MainComponent } from './components/template/main/main.component';
import { Section1Component } from './components/template/section1/section1.component';
import { Section2Component } from './components/template/section2/section2.component';
import { Section3Component } from './components/template/section3/section3.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
