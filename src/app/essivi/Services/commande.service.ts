import { CommandeModelClass } from './../models/commande.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environments/environment.prod';
import { LivraisonModel } from '../models/livraison.model';
import { PayementModel } from '../models/payement.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http : HttpClient) { }



  public creerCommande(commande : CommandeModelClass) : Observable<any>{
    console.log("commande before http :"+ JSON.stringify(commande))
    return this.http.post<any>(environment.backendHost+"commande/creer", commande)
  }

  public creerLivraison(idCommercial : number, idCommande : number, livraison : LivraisonModel ) : Observable<any>{
    return this.http.post<any>(environment.backendHost+"livraion/creer/idCml/"+idCommercial+"/idCde/"+idCommande, livraison)
  }

  public creerPayement(idCommercial : number, idLivraison : number, payement : PayementModel) : Observable<any>{
    return this.http.post<any>(environment.backendHost+"payement/idCml/"+idCommercial+"/idLivr+/"+idLivraison, payement)
  }

  public getAllLivraisons() : Observable<any>{
    return this.http.get<any>(environment.backendHost+"commande/delivered/all")
  }

  public getAllCommandesNotDeivered() : Observable<any>{
    return this.http.get<any>(environment.backendHost+"commande/notdelivered/all")
  }

  


}
