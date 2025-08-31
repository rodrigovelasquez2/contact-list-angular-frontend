import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./contact-list-component/contact-list-component')
    },
    {
        path: 'form',
        loadComponent: () => import('./contact-form-component/contact-form')
    }

];
