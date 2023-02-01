import { Pipe, PipeTransform } from '@angular/core';
import { VehiculeModel } from 'src/app/essivi/models/vehicule.model';

@Pipe({
  name: 'vehiculeFilter'
})
export class VehiculeFilterPipe implements PipeTransform {

  transform(vehicules: VehiculeModel[], searchValue: string): VehiculeModel[] {

    if(!vehicules || !searchValue){
      return vehicules;
    }

    return vehicules.filter(v =>
      v.immatriculation.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
