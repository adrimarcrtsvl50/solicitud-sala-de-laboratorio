import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SolitudsalaComponent } from './components/solitudsala/solitudsala.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBuilder } from 'ngx-dynamic-form-builder';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SolitudsalaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [    DynamicFormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
