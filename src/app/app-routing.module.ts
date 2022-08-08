import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from '../app/vistas/login/login.component';
import { NuevoComponent} from '../app/vistas/nuevo/nuevo.component'; 
import { EditarComponent} from '../app/vistas/editar/editar.component'; 
import {DashboardComponent} from '../app/vistas/dashboard/dashboard.component';

const routes: Routes = [
  {path:' ', redirectTo: 'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'nuevo',component:NuevoComponent},
  {path:'editar',component:EditarComponent},
  {path:'dashboard',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent,DashboardComponent,NuevoComponent,EditarComponent]
