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


@NgModule({
  declarations: [
    DashboardComponent,
    ProduitComponent,
    MarqueComponent,
    MarqueFilterPipe,
    VehiculeComponent,
    TypeVehiculesComponent,
    TypeVehiculeFilterPipe,
    VehiculeFilterPipe
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
