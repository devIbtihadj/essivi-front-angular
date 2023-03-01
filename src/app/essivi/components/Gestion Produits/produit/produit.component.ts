import { environment } from './../../../../../assets/environments/environment.prod';
import { MarqueModel } from './../../../models/marque.model';
import { ToastrService } from 'ngx-toastr';
import { ProduitService } from './../../../Services/produit.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Type_venteModel } from './../../../models/type_vente.model';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


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

  typeForDetail! : Type_venteModel 


  file! : File


  backendStaticFolder : string = ""+environment.backendHost+"static"

  constructor(private typeVenteService : ProduitService, private fb : FormBuilder, private toastr : ToastrService, private sanitizer: DomSanitizer)
  {}

  ngOnInit(): void {
    this.onGetAllTypeVentes()
    this.onGetListeMarque()
    this.onInitAddFG()
  }
  
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
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
    this.typeForDetail = type
  }
  onGetDelete(type : Type_venteModel){

  }

  onSelectedFile(event : any){
    this.file = <File>event.target.files[0]
    console.log(this.file)
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
    let formData = new FormData();
    formData.set("id", this.newAddTypeVenteFormGroup.controls['id'].value)
    formData.set("libelle_type_vente", this.newAddTypeVenteFormGroup.controls['libelle_type_vente'].value)
    formData.set("prix_unit", this.newAddTypeVenteFormGroup.controls['prix_unit'].value)
    formData.set("qte_composition", this.newAddTypeVenteFormGroup.controls['qte_composition'].value)
    formData.set("image", this.file)
    this.typeVenteService.creerType_vente(formData, this.newAddTypeVenteFormGroup.get('marque')?.value).subscribe({
      next: (data)=>{
        this.ngOnInit()
      }
    })
  }
  onInitAddFG(){
    this.newAddTypeVenteFormGroup = this.fb.group({
      id : this.fb.control(null),
      libelle_type_vente : this.fb.control(null),
      prix_unit : this.fb.control(null),
      qte_composition : this.fb.control(null),
      marque : this.fb.control(null),
      image : this.fb.control(null)
    })
  }
  
}
