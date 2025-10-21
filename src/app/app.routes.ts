import { Routes } from '@angular/router';
//import { HomeComponent } from './components/home/home.component'; // 👈 importe ton composant

import { AppConfig } from '../app/app.config.server';

export const routes: Routes = [
  {
    path: '', // 👈 route d’accueil
    component: 'AppConfig',// HomeComponent
  },
  {
    path: '**', // 👈 route fallback (page non trouvée)
    redirectTo: '',
    pathMatch: 'full'
  }
];
