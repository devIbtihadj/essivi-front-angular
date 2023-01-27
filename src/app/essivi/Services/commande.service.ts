import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environments/environment.prod';
import { CommandeModel } from '../models/commande.model';
import { LivraisonModel } from '../models/livraison.model';
import { PayementModel } from '../models/payement.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http : HttpClient) { }



  public creerCommande(idClient : number, commande : CommandeModel) : Observable<any>{
    return this.http.post<any>(environment.backendHost+"commande/creer/"+idClient, commande)
  }

  public creerLivraison(idCommercial : number, idCommande : number, livraison : LivraisonModel ) : Observable<any>{
    return this.http.post<any>(environment.backendHost+"livraion/creer/idCml/"+idCommercial+"/idCde/"+idCommande, livraison)
  }

  public creerPayement(idCommercial : number, idLivraison : number, payement : PayementModel) : Observable<any>{
    return this.http.post<any>(environment.backendHost+"payement/idCml/"+idCommercial+"/idLivr+/"+idLivraison, payement)
  }


}
