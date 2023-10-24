import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';

@NgModule({
  // Aqui declaramos los componentes que pertenecen a este módulo
  declarations: [MoviesComponent, MovieDetailComponent],
  // Aqui se importan los modulos
  imports: [MoviesRoutingModule, CardModule, ButtonModule],
  // Aqui se inyectan los servicios o pipes
  providers: [],
})
export class MoviesModule {}
