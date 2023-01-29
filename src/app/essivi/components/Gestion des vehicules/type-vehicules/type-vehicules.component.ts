import { Component, OnInit } from '@angular/core';
import { Type_vehiculeModel } from 'src/app/essivi/models/type_vehicule.model';
import { FormGroup, FormBuilder } from '@angular/forms'
import { VehiculeService } from 'src/app/essivi/Services/vehicule.service';
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-type-vehicules',
  templateUrl: './type-vehicules.component.html',
  styleUrls: ['./type-vehicules.component.css']
})
export class TypeVehiculesComponent implements OnInit{
  public page = 1
  public pageSize = 5


  searchValue! : string

  listeTypesVehicules! : Type_vehiculeModel[]

  newAddTypeVehiculeFormGroup! : FormGroup

  selectedFile! : File ;


  constructor(private fb : FormBuilder, private typeVehiculeService : VehiculeService, private toastr : ToastrService)
  {}


  ngOnInit(): void {
    this.onInitListeTypesVehicules()
  }





  onInitListeTypesVehicules(){

  }

  onInitAddFG(){
    this.newAddTypeVehiculeFormGroup = this.fb.group({
      id : this.fb.control(null),
      libelle_type : this.fb.control(null),
      image : this.fb.control(null)
    })
  }

  onFileSelected(event : any){
    console.log(this.newAddTypeVehiculeFormGroup.value)
    console.log(event)
    this.selectedFile = <File>event?.target.files[0]
  }

  onSaveTypeVehicule(){
    console.log(this.newAddTypeVehiculeFormGroup.value)
    const fileData = new FormData()
    fileData.append('image', this.selectedFile, this.selectedFile.name);
    fileData.append('libelle_type', this.newAddTypeVehiculeFormGroup.controls['libelle_type'].value)
    fileData.append('id', this.newAddTypeVehiculeFormGroup.controls['id'].value)

    console.log(fileData.get('libelle_type'))


  }

  onSaveModify(){

  }

  onGetDataToUpdate(type : Type_vehiculeModel){

  }

  onGetDelete(type : Type_vehiculeModel){

  }
}
