import { Router } from '@angular/router';
import { CommandeService } from './../../../Services/commande.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { CommercialModel } from 'src/app/essivi/models/commercial.model';
import { CommercialsService } from 'src/app/essivi/Services/commercials.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent {
  public page = 1
  public pageSize = 5


  searchValue! : string

  listeCommercials! : CommercialModel[]

  newAddCommercialFormGroup! : FormGroup

  constructor(private router : Router, private commercialService : CommercialsService  , private fb : FormBuilder, private toastr : ToastrService)

  {}


  ngOnInit(): void {
    this.onGetlisteCommercials()
    this.onInitAddFG()
  }

  onGetlisteCommercials(){
    this.commercialService.getAll().subscribe({
      next : (data)=>{
        this.listeCommercials = data.data
      }, error : (err)=>{
        console.log(err)
      }
    })
  }


  onInitAddFG(){
    this.newAddCommercialFormGroup = this.fb.group({
      id : this.fb.control(null),
      email : this.fb.control(null),
      password : this.fb.control("arvin"),
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





  onGetDataToUpdate(commercial : CommercialModel){
    this.newAddCommercialFormGroup.reset()
    this.newAddCommercialFormGroup = this.fb.group({
      id : commercial.id,


    })
  }

  onSaveModify(){

  }

  addCommercial(){
    this.router.navigateByUrl('/register/commercial')
  }

/*
  onSaveModify(){
    this.commercialService. (this.newAddCommercialFormGroup.value).subscribe({
      next : (data)=>{
        this.newAddCommercialFormGroup.reset()
        this.onGetlisteCommercials()
      }, error : (err)=>
      console.log("error ")
    })
  }
*/





}