import { CommercialsService } from 'src/app/essivi/Services/commercials.service';
import { CommercialModel } from 'src/app/essivi/models/commercial.model';
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


  listeCommercials! : CommercialModel[]
  searchValue! : string

  listeClients! : ClientModel[]

  newAddMarqueFormGroup! : FormGroup
  newCommercialFormGroup! : FormGroup

  constructor(private fb : FormBuilder, private clientsService : ClientService, private commercialService : CommercialsService)
  {}


  ngOnInit(): void {
    this.onInitClientsListe()
    this.oninitCommercialList()
    this.newCommercialFormGroup = this.fb.group({
      commercial : this.fb.control(null),
      client : this.fb.control(null),
    })
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

  oninitCommercialList(){
    this.commercialService.getAll().subscribe({     
      next:(data)=>{
        this.listeCommercials=data.data
      }
    })
  }

  onGetModal(client : ClientModel){
    this.newCommercialFormGroup=this.fb.group({
      client : this.fb.control(client.id),
      commercial : this.fb.control(client.commercial.id),
    })
  }
  onSaveNewCommercial(){
    this.clientsService.changeCommercialForClient(this.newCommercialFormGroup.get('commercial')?.value, this.newCommercialFormGroup.get('client')?.value).subscribe({
      next:(data)=>{
        console.log('succès')
        this.ngOnInit()
      }
    })
  }


  


}
