import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { MovieDetailComponent } from './modules/movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { BaseComponent } from './shared/base/base.component';

@NgModule({
  // Aqui declaramos los componentes que pertenecen a este módulo
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent,
    MovieDetailComponent,
    BaseComponent,
  ],
  // Aqui se importan los modulos
  imports: [
    BrowserModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  // Aqui se inyectan los servicios o pipes
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
