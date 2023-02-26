import { CommandeService } from './../../../Services/commande.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LivraisonModel } from 'src/app/essivi/models/livraison.model';
import { ToastrService } from 'ngx-toastr';
import { ProduitService } from 'src/app/essivi/Services/produit.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit{

  public page = 1
  public pageSize = 5


  searchValue! : string

  listeLivraisons! : LivraisonModel[]

  myLivraisonForDeytails! : LivraisonModel

  newAddMarqueFormGroup! : FormGroup

  constructor(private commandeService : CommandeService, private fb : FormBuilder, private toastr : ToastrService)
  {}
  ngOnInit(): void {
    this.onGetAllLivraisons()
  }

  onGetAllLivraisons(){
    this.commandeService.getAllLivraisons().subscribe({
      next:(data)=>{
        this.listeLivraisons =data.data
      }
    })
  }


  onGetDetails(l : LivraisonModel){
    this.myLivraisonForDeytails=l
  }

  
}
