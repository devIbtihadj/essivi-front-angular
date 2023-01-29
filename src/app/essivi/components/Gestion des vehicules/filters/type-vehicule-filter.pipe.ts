import { Pipe, PipeTransform } from '@angular/core';
import { Type_vehiculeModel } from 'src/app/essivi/models/type_vehicule.model';

@Pipe({
  name: 'typeVehiculeFilter'
})
export class TypeVehiculeFilterPipe implements PipeTransform {

  transform(typesVs: Type_vehiculeModel[], searchValue: string): Type_vehiculeModel[] {

    if(!typesVs || !searchValue){
      return typesVs;
    }

    return typesVs.filter(typeV =>
      typeV.libelle_type.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
