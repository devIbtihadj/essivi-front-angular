import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProduitComponent } from './components/Gestion Produits/produit/produit.component';
import { MarqueComponent } from './components/Gestion Produits/marque/marque.component';
import { MarqueFilterPipe } from './components/Gestion Produits/filters/marque-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehiculeComponent } from './components/Gestion des vehicules/vehicule/vehicule.component';
import { TypeVehiculeFilterPipe } from './components/Gestion des vehicules/filters/type-vehicule-filter.pipe';
import { TypeVehiculesComponent } from './components/Gestion des vehicules/type-vehicules/type-vehicules.component';
import { VehiculeFilterPipe } from './components/Gestion des vehicules/filters/vehicule-filter.pipe';
import { ClientComponent } from './components/Gestion des clients/client/client.component';
import { ClientFilterPipe } from './components/Gestion des clients/filters/client-filter.pipe';
import { ClientCarteComponent } from './components/cartes/client-carte/client-carte.component';
import { LivraisonComponent } from './components/Gestion des livraisons/livraison/livraison.component';
import { LivraisonFilterPipe } from './components/Gestion des livraisons/filters/livraison-filter.pipe';
import { CommandeComponent } from './components/Gestion des commandes/commande/commande.component';
import { CommandeFilterPipe } from './components/Gestion des commandes/filters/commande-filter.pipe';
import { ProduitFilterPipe } from './components/Gestion Produits/filters/produit-filter.pipe';
import { AddCommandeComponent } from './components/Gestion des commandes/add-commande/add-commande.component';
import { CommercialComponent } from './components/Gestion des commercials/commercial/commercial.component';
import { CommercialFilterPipe } from './components/Gestion des commercials/filters/commercial-filter.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    ProduitComponent,
    MarqueComponent,
    MarqueFilterPipe,
    VehiculeComponent,
    TypeVehiculesComponent,
    TypeVehiculeFilterPipe,
    VehiculeFilterPipe,
    ClientComponent,
    ClientFilterPipe,
    ClientCarteComponent,
    LivraisonComponent,
    LivraisonFilterPipe,
    CommandeComponent,
    CommandeFilterPipe,
    ProduitFilterPipe,
    AddCommandeComponent,
    CommercialComponent,
    CommercialFilterPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut : 2500,
      progressBar : true,
    }),
  ], exports : [
    DashboardComponent
  ]
})
export class EssiviModule { }
