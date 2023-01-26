import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProduitComponent } from './components/Gestion Produits/produit/produit.component';
import { MarqueComponent } from './components/Gestion Produits/marque/marque.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProduitComponent,
    MarqueComponent
  ],
  imports: [
    CommonModule
  ], exports : [
    DashboardComponent
  ]
})
export class EssiviModule { }
