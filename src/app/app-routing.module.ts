import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren:  './layout/layout.module'
      },
   
    ]
  },
  // {path: '',   redirectTo: '/login', pathMatch: 'full'},
  // {path: 'login' , component: LoginComponent},
  // {path: 'dashboard', component: LayoutComponent}
];


