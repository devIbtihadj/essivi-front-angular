import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Type_vehiculeModel } from 'src/app/essivi/models/type_vehicule.model';
import { VehiculeModel } from 'src/app/essivi/models/vehicule.model';
import { VehiculeService } from 'src/app/essivi/Services/vehicule.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit{


  public page = 1
  public pageSize = 5


  searchValue! : string

  listeVehicules! : VehiculeModel[]
  listeTypes! : Type_vehiculeModel[]

  newAddVehiculeFormGroup! : FormGroup
  newAddVehiculeFormGroupModif! : FormGroup



  constructor(private fb : FormBuilder, private vehiculeService : VehiculeService)
  {}

  ngOnInit(): void {
    this.onInitListType()
    this.onInitAddFG()
    this.onInitListVehicule()



  }


  onInitAddFG(){
    this.newAddVehiculeFormGroup = this.fb.group({
      id : this.fb.control(null),
      immatriculation : this.fb.control(null),
      type_vehicule_id : this.fb.control(null)
    })


    this.newAddVehiculeFormGroupModif = this.fb.group({
      id : this.fb.control(null),
      immatriculation : this.fb.control(null),
      type_vehicule_id : this.fb.control(null)
    })
  }

  onInitListVehicule(){
    this.vehiculeService.getAllVehicule().subscribe({
      next : (data)=>{
        this.listeVehicules = data.data
      }, error : (err)=>{
        console.log("err "+err)
      }
    })
  }

  onInitListType(){
    this.vehiculeService.getAllTypeVehicule().subscribe({
      next:(data)=>{
        this.listeTypes=data.data
        console.log("ok"+data.data)
      }, error : (err)=>{
        alert("err "+err)
      }
    })
  }

  onGetDataToUpdate(vehicule : VehiculeModel){

  }

  onGetDelete(vehicule : VehiculeModel){

  }

  onSaveVehicule(){
    alert(this.newAddVehiculeFormGroup.controls['type_vehicule_id'].value)
    this.vehiculeService.creerVehicule(this.newAddVehiculeFormGroup.value).subscribe({
      next : (data)=>{
        this.listeVehicules=data.data
        this.ngOnInit()
      }, error : (err)=>{
        //TOASTR CETTE IMMA EXISTE DEJA
        console.log("err "+err)
      }
    })
  }

  onSaveModify(){

  }
}
