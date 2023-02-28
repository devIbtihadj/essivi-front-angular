import { Type_venteModel } from './../../../models/type_vente.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'produitFilter'
})
export class ProduitFilterPipe implements PipeTransform {

  transform(typeVentes: Type_venteModel[], searchValue: string): Type_venteModel[] {

    if(!typeVentes || !searchValue){
      return typeVentes;
    }

    return typeVentes.filter(typeVente =>
      typeVente.libelle_type_vente.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      || 
      typeVente.marque.libelle_marque.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }

}
