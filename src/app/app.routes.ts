import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomePage)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutPage)
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers').then(m => m.CareersPage)
  },
//   {
//     path: 'contact',
//     loadComponent: () => import('./pages/contact-page/contact-page').then(m => m.ContactPageComponent)
//   },
  {
    path: '**',
    redirectTo: ''
  }
];