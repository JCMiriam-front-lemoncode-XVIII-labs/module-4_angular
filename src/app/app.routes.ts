import { Routes } from '@angular/router';

import { About } from './pages/about/about';
import { Crud } from './pages/crud/crud';
import { Dashboard } from './pages/dashboard/dashboard';
import { Gallery } from './pages/gallery/gallery';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: 'home', component: Home, title: 'Inicio | Angular Lab' },
  { path: 'login', component: Login, title: 'Acceso | Angular Lab' },
  { path: 'acerca-de', component: About, title: 'Acerca de | Angular Lab' },
  { path: 'dashboard', component: Dashboard, title: 'Dashboard | Angular Lab' },
  { path: 'galeria', component: Gallery, title: 'Galería | Angular Lab' },
  { path: 'crud', component: Crud, title: 'CRUD | Angular Lab' },
  { path: 'profile', component: Profile, title: 'Perfil | Angular Lab' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];
