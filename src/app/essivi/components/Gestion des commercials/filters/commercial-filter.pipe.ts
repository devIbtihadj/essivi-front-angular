import { CommercialModel } from 'src/app/essivi/models/commercial.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commercialFilter'
})
export class CommercialFilterPipe implements PipeTransform {

  transform(commercials: CommercialModel[], searchValue: string): CommercialModel[] {

    if(!commercials || !searchValue){
      return commercials;
    }

    return commercials.filter(commercial =>
      commercial.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ||
      commercial.prenom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }
}
