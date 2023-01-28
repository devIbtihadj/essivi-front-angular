import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { MarqueModel } from 'src/app/essivi/models/marque.model';
import { ProduitService } from 'src/app/essivi/Services/produit.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit{

  public page = 1
  public pageSize = 5


  searchValue! : string

  listeMarques! : MarqueModel[]

  newAddMarqueFormGroup! : FormGroup

  constructor(private marqueService : ProduitService, private fb : FormBuilder, private toastr : ToastrService)
  {}


  ngOnInit(): void {
    this.onGetlisteMarques()
    this.onInitAddFG()
  }

  onGetlisteMarques(){
    this.marqueService.getAllMarques().subscribe({
      next : (data)=>{
        this.listeMarques = data.data
      }, error : (err)=>{
        console.log(err)
      }
    })
  }


  onInitAddFG(){
    this.newAddMarqueFormGroup = this.fb.group({
      id : this.fb.control(null),
      libelle_marque : this.fb.control(null)
    })
  }


  onSaveMarque(){
    this.marqueService.creerMarque(this.newAddMarqueFormGroup.value).subscribe({
      next : (data)=>{
        console.log('saved')
        try{
          this.toastr.success("Marque enrégistrée", "Succès")
        }catch(e){
            alert("err")
        }

        this.onGetlisteMarques()
        this.newAddMarqueFormGroup.reset()
      }, error : (err)=>{
        console.log('error '+err.message)
        this.newAddMarqueFormGroup.reset()
      }
    })
  }



  onGetDataToUpdate(marque : MarqueModel){
    this.newAddMarqueFormGroup.reset()
    this.newAddMarqueFormGroup = this.fb.group({
      id : marque.id,
      libelle_marque : marque.libelle_marque
    })
  }

  onSaveModify(){
    this.marqueService.updateMarque(this.newAddMarqueFormGroup.value).subscribe({
      next : (data)=>{
        this.newAddMarqueFormGroup.reset()
        this.onGetlisteMarques()
      }, error : (err)=>
      console.log("error ")
    })
  }







  onGetDelete(marque : MarqueModel){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Etes-vous sure?',
      text: "Cette marque sera supprimée",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OUI, Supprimer!',
      cancelButtonText: 'Non, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.marqueService.deleteMarque(marque.id).subscribe({
          next : (data)=>{
            console.log("DATA "+data)
            this.ngOnInit()
            swalWithBootstrapButtons.fire(
              'Supprimé!',
              'Cette marque a été supprimée.',
              'success'
            )
          }, error : (err)=>{
            console.log("ERROR "+err)
            this.ngOnInit()
            swalWithBootstrapButtons.fire(
              'Opération impossible',
              'Cette marque ne peut être supprimée',
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
          'Cette marque est toujours conservée',
          'error'
        )
      }
    })
  }


}
