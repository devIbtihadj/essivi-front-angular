import { Pipe, PipeTransform } from '@angular/core';
import { MarqueModel } from 'src/app/essivi/models/marque.model';

@Pipe({
  name: 'marqueFilter'
})
export class MarqueFilterPipe implements PipeTransform {

  transform(marques: MarqueModel[], searchValue: string): MarqueModel[] {

    if(!marques || !searchValue){
      return marques;
    }

    return marques.filter(marque =>
      marque.libelle_marque.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
