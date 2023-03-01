import { FormGroup, FormBuilder } from '@angular/forms';
import { CommandeService } from './../../../Services/commande.service';
import { CommandeModel } from './../../../models/commande.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})



export class CommandeComponent implements OnInit{

  public page = 1
  public pageSize = 5


  searchValue! : string

  listeCommandes! : CommandeModel[]

  myCommandeForDeytails! : CommandeModel



  constructor(private commandeService : CommandeService, private fb : FormBuilder)
  {}
  ngOnInit(): void {
    this.onGetAllCommandes()
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
