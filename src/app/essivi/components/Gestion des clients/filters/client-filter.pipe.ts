import { Pipe, PipeTransform } from '@angular/core';
import { Commercial_ClientModel } from 'src/app/essivi/models/commercial_client.model';

@Pipe({
  name: 'clientFilter'
})
export class ClientFilterPipe implements PipeTransform {

  transform(comm_cli: Commercial_ClientModel[], searchValue: string): Commercial_ClientModel[] {

    if(!comm_cli || !searchValue){
      return comm_cli;
    }

    return comm_cli.filter(comm_clione =>
      comm_clione.client.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
