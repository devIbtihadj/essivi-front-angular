import { AddCommandeComponent } from './essivi/components/Gestion des commandes/add-commande/add-commande.component';
import { ProduitComponent } from './essivi/components/Gestion Produits/produit/produit.component';
import { CommandeComponent } from './essivi/components/Gestion des commandes/commande/commande.component';
import { LivraisonComponent } from './essivi/components/Gestion des livraisons/livraison/livraison.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import {RegisterComponent} from "./security/register/register.component";
import { LoginComponent } from './security/login/login.component';
import { DashboardComponent } from './essivi/components/dashboard/dashboard.component';
import { SecurityGuard } from './security/security.guard';
import { MarqueComponent } from './essivi/components/Gestion Produits/marque/marque.component';
import { TypeVehiculesComponent } from './essivi/components/Gestion des vehicules/type-vehicules/type-vehicules.component';
import { VehiculeComponent } from './essivi/components/Gestion des vehicules/vehicule/vehicule.component';
import { ClientComponent } from './essivi/components/Gestion des clients/client/client.component';
import { ClientCarteComponent } from './essivi/components/cartes/client-carte/client-carte.component';

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
      },
      {
        path: "vehicules", component : VehiculeComponent
      },
      {
        path: "clients", component : ClientComponent
      },
      {
        path: "carte", component : ClientCarteComponent
      },
      {
        path: "livraisons", component : LivraisonComponent
      },
      {
        path: "commandes", component : CommandeComponent
      },
      {
        path: "produits", component : ProduitComponent
      },
      {
        path: "add-commande", component : AddCommandeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
