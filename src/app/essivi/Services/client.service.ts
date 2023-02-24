import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environments/environment.prod';
import { ClientModel } from '../models/client.model';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }


  public creerClient(client : ClientModel, idCommercial : number) : Observable<any>{
    return this.http.post<any>(environment.backendHost+"client/creer/comm/"+idCommercial, client)
  }

  public modifierClient(client : ClientModel) : Observable<any>{
    return this.http.put<any>(environment.backendHost+"client/update/comm/"+client.id, client)
  }

  public getAllCommandesForClient(idClient : number) : Observable<any>{
    return this.http.get<any>(environment.backendHost+"client/"+idClient+"/commandes/all")
  }


  public getAllCommandesForClientNotDelivred(idClient : number) : Observable<any>{
    return this.http.get<any>(environment.backendHost+"client/"+idClient+"/commandes/notdelivred")
  }


  public getAllCommandesNotDeivred() : Observable<any>{
    return this.http.get<any>(environment.backendHost+"client/commandes/notdelivred")
  }

  public getAllClients() : Observable<any>{
    return this.http.get<any>(environment.backendHost+"client/get/all")
  }

  public getClient(idClient : number) : Observable<any>{
    return this.http.get<any>(environment.backendHost+"client/get/"+idClient)
  }


  public creerCommercialClient(idCommercial : number, idClient : number) : Observable<any>{
    return this.http.post<any>(environment.backendHost+"commercial_client/idComm/"+idCommercial+"/idCli/"+idClient, null)
  }

  public getAllCommercialsClients() : Observable<any>{
    return this.http.get<any>(environment.backendHost+"client/get/all")
  }


  public getCommercial_client(id : number) : Observable<any>{
    return this.http.get<any>(environment.backendHost+"commercial_client/get"+id)
  }

  public changeCommercialForClient(idCommercial : number, idClient : number) : Observable<any>{
    return this.http.put<any>(environment.backendHost+"commercial_client/change/idComm/"+idCommercial+"/idCli/"+idClient, null)
  }


}

