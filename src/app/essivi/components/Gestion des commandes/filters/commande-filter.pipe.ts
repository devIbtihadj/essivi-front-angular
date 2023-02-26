import { CommandeModel } from './../../../models/commande.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commandeFilter'
})
export class CommandeFilterPipe implements PipeTransform {

  transform(commandes: CommandeModel[], searchValue: string): CommandeModel[] {

    if(!commandes || !searchValue){
      return commandes;
    }

    return commandes.filter(commande =>
      commande.client.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
