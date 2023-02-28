import { MarqueModel } from './../../../models/marque.model';
import { ToastrService } from 'ngx-toastr';
import { ProduitService } from './../../../Services/produit.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Type_venteModel } from './../../../models/type_vente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{
  public page = 1
  public pageSize = 5


  searchValue! : string

  listeTypeVentes! : Type_venteModel[]

  newAddTypeVenteFormGroup! : FormGroup

  listeMarques! : MarqueModel[]

  constructor(private typeVenteService : ProduitService, private fb : FormBuilder, private toastr : ToastrService)
  {}

  ngOnInit(): void {
    this.onGetAllTypeVentes()
    this.onGetListeMarque()
    this.onInitAddFG()
  }

  onGetAllTypeVentes(){
    this.typeVenteService.getAllTypeVente().subscribe({
      next:(data)=>{
        this.listeTypeVentes=data.data
      }
    })
  }

  onGetDataToUpdate(type : Type_venteModel){

  }

  onGetDetails(type : Type_venteModel){
    
  }
  onGetDelete(type : Type_venteModel){

  }

  onGetListeMarque(){
    this.typeVenteService.getAllMarques().subscribe({
      next: (data)=>{
        this.listeMarques=data.data
      }
    })
  }

  onSaveModify(){

  }
  onSaveTypeVente(){

  }
  onInitAddFG(){
    this.newAddTypeVenteFormGroup = this.fb.group({
      id : this.fb.control(null),
      libelle_type_vente : this.fb.control(null),
      prix_unit : this.fb.control(null),
      qte_composition : this.fb.control(null),
      marque : this.fb.control(null)
    })
  }
  
}
