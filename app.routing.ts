import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//La idea es tener tres rutas: La página principal, la del login, y la del register
const appRoutes = [
    { path: '', component: AppComponent,  pathMatch: 'full'},
    { path: 'login', component:LoginComponent, pathMatch: 'full'},
    {path:'register', component:RegisterComponent, pathMatch: 'full'}
  ];
  export const routing = RouterModule.forRoot(appRoutes);