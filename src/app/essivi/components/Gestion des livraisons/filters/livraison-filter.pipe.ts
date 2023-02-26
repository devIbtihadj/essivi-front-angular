import { LivraisonModel } from './../../../models/livraison.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'livraisonFilter'
})
export class LivraisonFilterPipe implements PipeTransform {

  transform(livraisons: LivraisonModel[], searchValue: string): LivraisonModel[] {

    if(!livraisons || !searchValue){
      return livraisons;
    }

    return livraisons.filter(livraison =>
      livraison.commande.client.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }
}
