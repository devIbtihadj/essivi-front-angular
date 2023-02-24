import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientModel } from 'src/app/essivi/models/client.model';
import { Commercial_ClientModel } from 'src/app/essivi/models/commercial_client.model';
import { ClientService } from 'src/app/essivi/Services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})


export class ClientComponent implements OnInit{

  public page = 1
  public pageSize = 5


  searchValue! : string

  listeClients! : ClientModel[]

  newAddMarqueFormGroup! : FormGroup


  constructor(private fb : FormBuilder, private clientsService : ClientService)
  {}


  ngOnInit(): void {
    this.onInitClientsListe()
  }


  onInitClientsListe(){
    this.clientsService.getAllCommercialsClients().subscribe({
      next : (data)=>{
        this.listeClients = data.data
        console.log(data.data)
      }, error : (err)=>{
        console.log('err '+err.httpMessage)
      }
    })
  }
}
