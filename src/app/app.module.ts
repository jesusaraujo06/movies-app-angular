import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { BaseComponent } from './shared/base/base.component';

@NgModule({
  // Aqui declaramos los componentes que pertenecen a este módulo
  declarations: [AppComponent, LoginComponent, BaseComponent],
  // Aqui se importan los modulos
  imports: [
    BrowserModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  // Aqui se inyectan los servicios o pipes
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
