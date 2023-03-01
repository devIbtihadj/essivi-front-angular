import { MarqueModel } from './../../../models/marque.model';
import { ProduitService } from 'src/app/essivi/Services/produit.service';
import { ModelLigneCdeClient } from './../../../models/detail_Cde.model';
import { CommandeService } from './../../../Services/commande.service';
import { FormGroup, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Type_venteModel } from 'src/app/essivi/models/type_vente.model';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit{

  newAddCommandeFormGroup! : FormGroup


  public page = 1
  public pageSize = 8

  boolAdd! : boolean
  sommeVente : number = 0
  sommeAchat : number = 0
  formAddLigneVente! : UntypedFormGroup
  listeProduits! : Type_venteModel[]
  listeTypeVente! : Type_venteModel[]
  formModifLigneVente! : UntypedFormGroup
  ligneCmdeClient : ModelLigneCdeClient = new ModelLigneCdeClient()
  myIndexModif! : number
  boolProp : boolean = false
  listeMarque! : MarqueModel[]


  total! : number


  allLigneCmdeClients : ModelLigneCdeClient[] = []

  constructor(private commandeService : CommandeService, private fb : FormBuilder, private produitService : ProduitService)
  {}



  ngOnInit(): void {
    this.initForms()
    this.initListeTypeVente()
    this.total = 0
    this.initListeMarque()
  }


  initForms() {
    
    this.formAddLigneVente = this.fb.group({
      id : this.fb.control(null),
      qte : this.fb.control(null),
      marque : this.fb.control(null),
      type_vente : this.fb. control(null)
    })

    this.formModifLigneVente = this.fb.group({
      id : this.fb.control(null),
      qte : this.fb.control(null),
      marque : this.fb.control(null),
      type_vente : this.fb. control(null)
    })

  }
  initListeTypeVente() {
    this.produitService.getAllTypeVente().subscribe({
      next : (data)=>{
        this.listeTypeVente=data.data
      }
    })
  }

  initListeMarque(){
    this.produitService.getAllMarques().subscribe({
      next : (data)=>{
        this.listeMarque=data.data
      }
    }) 
  }


  onGetDataToUpdate(ligne : ModelLigneCdeClient){

  }

  onGetDelete(ligne : ModelLigneCdeClient){

  }

  validerVente(){

  }
  handleMarqueAdd(){
    this.produitService.getAllForMarque(this.formAddLigneVente.get('marque')?.value).subscribe({
      next:(data)=>{
        this.listeTypeVente=data.data
        console.log(data.data)
      }
    })
  }

  validateAddLigneVente(){
    console.log("**************************************"+this.formAddLigneVente.get('type_vente')?.value)
    this.produitService.getTypeVente(this.formAddLigneVente.get('type_vente')?.value).subscribe({
      next : (data)=>{


      this.ligneCmdeClient.type_vente=data.data
      this.total = 0
      this.ligneCmdeClient.qte = this.formAddLigneVente.get('qte')?.value
      this.allLigneCmdeClients.push(this.ligneCmdeClient)
      console.log("-------------------- "+JSON.stringify(this.ligneCmdeClient?.type_vente?.marque))
      for(let i=0; i< this.allLigneCmdeClients.length; i++){
        this.total = this.total +(this.allLigneCmdeClients[i].qte*this.allLigneCmdeClients[i].type_vente.prix_unit)
      }
      
      this.formAddLigneVente.reset()

    this.ligneCmdeClient = new ModelLigneCdeClient()
    




      }

      
    })

    
     
  }

  initFormsAdd(){
    this.formAddLigneVente = this.fb.group({
      idArticle : this.fb.control(null),
      idTypeVente : this.fb.control(null),
      qte : this.fb.control(null),
    })
  }

  validateModifLigneVente(){

  }
  handleMarqueModif(){

  }

}


