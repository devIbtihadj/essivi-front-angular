import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environments/environment.prod';
import { loginModel } from './login/login.model';
import { registerModel } from './register/register.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  requestHeader = new HttpHeaders(
    { "No-Auth" : "True"}
  );

  constructor(private http : HttpClient) { }

  public setToken(jwtToken : string){
    console.log("token set")
    localStorage.setItem('token', jwtToken)
    console.log("token"+localStorage.getItem('token'))
  }

  public getToken() : string{
    return localStorage.getItem('token')!;
  }

  public clear(){
    localStorage.clear();
  }


  public isLoggedIn(){
    return this.getToken();
  }

  public me() : Observable<any>{
    return this.http.post<any>(environment.backendHost+"me", "")
  }



  public saveCommercial(registerM : registerModel) : Observable<any>{
    return this.http.post<any>(environment.backendHost+"auth/register", registerM, {headers : this.requestHeader})
  }


  login(loginM : loginModel) : Observable<any>{
    return this.http.post<any>(environment.backendHost+"auth/login", loginM, {headers : this.requestHeader})

  }

}
