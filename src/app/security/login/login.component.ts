import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginFormGroup! : FormGroup

  constructor(private fb : FormBuilder, private securityService : SecurityService, private router : Router)
  {}

  ngOnInit(): void {
    this.onInitRegisterFb()
  }

  onInitRegisterFb(){
    this.loginFormGroup = this.fb.group({
      email : this.fb.control(null),
      password : this.fb.control(null)
    })
  }


  onLogin(){
    this.securityService.login(this.loginFormGroup.value).subscribe({
      next : (data)=>{
        this.securityService.setToken(data.data.token)
        this.router.navigate(['/dashboard'])
      }, error : (err)=>{
        alert(err)
      }
    })
  }

}

