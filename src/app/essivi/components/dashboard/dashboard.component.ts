import { ClientService } from 'src/app/essivi/Services/client.service';
import { ProduitService } from 'src/app/essivi/Services/produit.service';
import { Component, OnInit } from '@angular/core';
import { CommandeModel } from '../../models/commande.model';
import { CommandeService } from '../../Services/commande.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

 
  public page = 1
  public pageSize = 5


  searchValue! : string

  listeCommandes! : CommandeModel[]

  myCommandeForDeytails! : CommandeModel

  totalClients! : number
  totalTypeVente! : number
  totalCommandesNotDelivred! : number
  totalCommandesDelivred! : number


  constructor(private commandeService : CommandeService, private produitService : ProduitService, private clientService : ClientService)
  {}
  ngOnInit(): void {
    this.onGetAllCommandes()
    this.onGetAllParameters()
  }



  onGetAllParameters(){
    this.produitService.getAllTypeVente().subscribe({
      next : (data)=>{
        console.log(data.data)
        this.totalTypeVente=data.data.length
      }
    })
    this.commandeService.getAllCommandesNotDeivered().subscribe({
      next: (data)=>{
        console.log(data.data)
        this.totalCommandesNotDelivred=data.data.length
      }, error : (err)=>{
        alert("err "+err)
      }
    })
    this.commandeService.getAllLivraisons().subscribe({
      next: (data)=>{
        this.totalCommandesDelivred=data.data.length
      }
    })
    this.clientService.getAllClients().subscribe({
      next: (data)=>{
        this.totalClients=data.data.length
      }
    })
  }
 

  onGetAllCommandes(){
    this.commandeService.getAllCommandesNotDeivered().subscribe({
      next : (data)=>{
        this.listeCommandes=data.data
      }
    })
  }

  onGetDetails(l : CommandeModel){
    this.myCommandeForDeytails=l
  }




}
