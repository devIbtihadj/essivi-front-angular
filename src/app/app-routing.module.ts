import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import {RegisterComponent} from "./security/register/register.component";
import { LoginComponent } from './security/login/login.component';
import { DashboardComponent } from './essivi/components/dashboard/dashboard.component';
import { SecurityGuard } from './security/security.guard';
import { MarqueComponent } from './essivi/components/Gestion Produits/marque/marque.component';
import { TypeVehiculesComponent } from './essivi/components/Gestion des vehicules/type-vehicules/type-vehicules.component';

const routes: Routes = [
  {
    path: "register/commercial", component : RegisterComponent
  },
  {
    path: "login", component : LoginComponent
  },
  {
    path: "", component: TemplateComponent, children: [
      {
        path : "dashboard", component : DashboardComponent, canActivate : [SecurityGuard]
      },
      {
        path : "marques", component : MarqueComponent
      },
      {
        path : "types-vehicules", component : TypeVehiculesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
