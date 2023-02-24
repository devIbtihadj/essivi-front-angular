import { Pipe, PipeTransform } from '@angular/core';
import { ClientModel } from 'src/app/essivi/models/client.model';
import { Commercial_ClientModel } from 'src/app/essivi/models/commercial_client.model';

@Pipe({
  name: 'clientFilter'
})
export class ClientFilterPipe implements PipeTransform {

  transform(cli: ClientModel[], searchValue: string): ClientModel[] {

    if(!cli || !searchValue){
      return cli;
    }

    return cli.filter(cl_one =>
      cl_one.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
