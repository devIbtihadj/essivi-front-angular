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



}

