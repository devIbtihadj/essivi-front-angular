import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Type_vehiculeModel } from 'src/app/essivi/models/type_vehicule.model';
import { VehiculeService } from 'src/app/essivi/Services/vehicule.service';
import Swal from 'sweetalert2';

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
  newAddTypeFormGroupModif! : FormGroup

  file! : File



  constructor(private fb : FormBuilder, private typeService : VehiculeService, private toastr : ToastrService)
  {}


  ngOnInit(): void {
    this.onInitAddFG()
    this.onInitListType()
  }



  onInitListType(){
    this.typeService.getAllTypeVehicule().subscribe({
      next:(data)=>{
        this.listeTypes=data.data
        console.log("ok")
      }, error : (err)=>{
        console.log("err")
      }
    })
  }

  onInitAddFG(){
    this.newAddTypeFormGroup = this.fb.group({
      id : this.fb.control(null),
      libelle_type : this.fb.control(null),
      image : this.fb.control(null)
    })

    this.newAddTypeFormGroupModif = this.fb.group({
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
    this.newAddTypeFormGroupModif = this.fb.group({
      id : this.fb.control(type.id),
      libelle_type : this.fb.control(type.libelle_type),
      image : this.fb.control(type.id)
    })
  }

  onGetDelete(type : Type_vehiculeModel){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Etes-vous sure?',
      text: "Ce type de véhicule sera supprimée",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OUI, Supprimer!',
      cancelButtonText: 'Non, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.typeService.deleteTypeVehicule(type.id).subscribe({
          next : (data)=>{
            console.log("DATA "+data)
            this.ngOnInit()
            swalWithBootstrapButtons.fire(
              'Supprimé!',
              'Cet type a été supprimé.',
              'success'
            )
          }, error : (err)=>{
            console.log("ERROR "+err)
            this.ngOnInit()
            swalWithBootstrapButtons.fire(
              'Opération impossible',
              'Cet type ne peut être supprimé',
              'error'
            )
          }
        })

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          'Cette typr est toujours conservé',
          'error'
        )
      }
    })
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
        this.onInitListType()
      }, error : (err)=>{
        console.log("err "+err)
      }
    })
  }

  onSaveModify(){
    let formData = new FormData();
    console.log(this.newAddTypeFormGroupModif.controls['id'].value)
    formData.set("id", this.newAddTypeFormGroupModif.controls['id'].value)
    formData.set("libelle_type", this.newAddTypeFormGroupModif.controls['libelle_type'].value)
    formData.set("image", this.file)
    this.typeService.updateTypeVehicule(formData, this.newAddTypeFormGroupModif.controls['id'].value).subscribe({
      next : (data)=>{
        console.log("data "+data)
        this.onInitListType()
      }, error : (err)=>{
        console.log("err "+err)
      }
    })
  }


}
