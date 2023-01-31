import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Type_vehiculeModel } from '../models/type_vehicule.model';
import { environment } from 'src/assets/environments/environment.prod';
import { VehiculeModel } from '../models/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http  : HttpClient) { }


  public createTypeVehicule(type : FormData) : Observable<any>{
    return this.http.post<any>(environment.backendHost+"type_vehicule/creer", type)
  }

  public updateTypeVehicule(type : Type_vehiculeModel, id : number) : Observable<any>{
    return this.http.put<any>(environment.backendHost+"type_vehicule/update/"+id, type)
  }

  public getAllTypeVehicule() : Observable<any>{
    return this.http.get<any>(environment.backendHost+"type_vehicule/get/all")
  }

  public deleteTypeVehicule(id : number) : Observable<any>{
    return this.http.delete<any>(environment.backendHost+"type_vehicule/delete/"+id)
  }


  public creerVehicule(vehicule : VehiculeModel) : Observable<any>{
    return this.http.post<any>(environment.backendHost+"vehicule/creer", vehicule)
  }

  public updateVehicule(vehicule : VehiculeModel, id : number) : Observable<any>{
    return this.http.put<any>(environment.backendHost+"vehicule/update/"+id, vehicule)
  }

  public getAllVehicule() : Observable<any>{
    return this.http.get<any>(environment.backendHost+"vehicule/get/all")
  }

  public deleteVehicule(id : number) : Observable<any>{
    return this.http.delete<any>(environment.backendHost+"vehicule/delete/"+id)
  }




}
