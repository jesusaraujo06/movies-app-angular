import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    // Aqui vamos a cargar un modulo, no un componente
    path: 'popular',
    loadChildren: () =>
      import('./modules/movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // Aqui le decimos que exporte RouterModule
  exports: [RouterModule],
})
export class AppRoutingModule {}
