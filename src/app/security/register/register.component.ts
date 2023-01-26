import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerFormGroup! : FormGroup

  constructor(private fb : FormBuilder, private router : Router, private securityService : SecurityService)
  {}

  ngOnInit(): void {
    this.initRegisterFb()
  }

  initRegisterFb(){
    this.registerFormGroup = this.fb.group({
      email : this.fb.control(null),
      password : this.fb.control("2023"),
      nom : this.fb.control(null),
      prenom : this.fb.control(null),
      numTel : this.fb.control(null),
      numIdentification : this.fb.control(null),
      quartier : this.fb.control(null),
      nomPersonnePrevenir : this.fb.control(null),
      prenomPersonnePrevenir : this.fb.control(null),
      contactPersonnePrevenir : this.fb.control(null),
      typeUser : this.fb.control("Commercial")

    })
  }


  onSaveCommercial(){
    this.securityService.saveCommercial(this.registerFormGroup.value).subscribe({
      next : (data)=>{
        alert('Saved')
        this.registerFormGroup.reset()
      }, error : (err)=>{
        alert(err.message+" : my error")
      }
    })
  }


}
