import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './components/pages/pages.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { BodyComponent } from './components/pages/body/body.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { LeftComponent } from './components/pages/body/left/left.component';
import { RightComponent } from './components/pages/body/right/right.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
