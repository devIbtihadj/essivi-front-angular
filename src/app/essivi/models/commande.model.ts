import { Detail_CdeModel, ModelLigneCdeClient } from './detail_Cde.model';
import { ClientModel } from "./client.model"
import { LivraisonModel } from "./livraison.model"

export interface CommandeModel{
  id : number
  date_cde : Date
  date_voulu_reception : Date
  client : ClientModel
  livraisons : LivraisonModel[]
  details : Detail_CdeModel[]
}

export class CommandeModelClass{
  id! : number
  date_cde! : Date
  date_voulu_reception! : Date
  client_id! : number
  livraisons! : LivraisonModel[]
  details_commandes! : ModelLigneCdeClient[]
}