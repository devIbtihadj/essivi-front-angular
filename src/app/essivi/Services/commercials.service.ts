import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/assets/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommercialsService {

  constructor(private http : HttpClient) { }


  public getAll() : Observable<any>{
    return this.http.get<any>(environment.backendHost+"commercial/all")
  }

  public getAllClientsForCommercial(idCommercial : number) : Observable<any>{
    return this.http.get<any>(environment.backendHost+"commercial"+idCommercial+"/clients/all")
  }

  public getAllPayementsRecievedByCommercial(idCommercial : number) : Observable<any>{
    return this.http.get<any>(environment.backendHost+"commercial"+idCommercial+"/payements/all")
  }

  public getAllLivraisonsDoneByCommercial(idCommercial : number) : Observable<any>{
    return this.http.get<any>(environment.backendHost+"commercial"+idCommercial+"/payements/all")
  }



}
