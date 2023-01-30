import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Type_vehiculeModel } from 'src/app/essivi/models/type_vehicule.model';
import { VehiculeService } from 'src/app/essivi/Services/vehicule.service';

@Component({
  selector: 'app-type-vehicules',
  templateUrl: './type-vehicules.component.html',
  styleUrls: ['./type-vehicules.component.css']
})
export class TypeVehiculesComponent implements OnInit{

  public page = 1
  public pageSize = 5


  searchValue! : string

  listeTypes! : Type_vehiculeModel[]

  newAddTypeFormGroup! : FormGroup

  file! : File



  constructor(private fb : FormBuilder, private typeService : VehiculeService, private toastr : ToastrService)
  {}


  ngOnInit(): void {
    this.onInitAddFG()
  }



  onInitAddFG(){
    this.newAddTypeFormGroup = this.fb.group({
      id : this.fb.control(null),
      libelle_type : this.fb.control(null),
      image : this.fb.control(null)
    })
  }

  onSelectedFile(event : any){
    this.file = <File>event.target.files[0]
    console.log(this.file)
  }
  onGetDataToUpdate(type : Type_vehiculeModel){

  }

  onGetDelete(type : Type_vehiculeModel){

  }

  onSaveMarque(){
    console.log(this.newAddTypeFormGroup.controls['libelle_type'].value)
    let formData = new FormData();
    formData.set("id", this.newAddTypeFormGroup.controls['id'].value)
    formData.set("libelle_type", this.newAddTypeFormGroup.controls['libelle_type'].value)
    formData.set("image", this.file)
    console.log(this.newAddTypeFormGroup.value)
    console.log(formData)
    this.typeService.createTypeVehicule(formData).subscribe({
      next : (data)=>{
        console.log("data "+data)
      }, error : (err)=>{
        console.log("err "+err)
      }
    })
  }

  onSaveModify(){

  }


}
