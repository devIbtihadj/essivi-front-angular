import { ClientModel } from "./client.model"
import { LivraisonModel } from "./livraison.model"

export interface CommandeModel{
  id : number
  date_cde : Date
  date_voulu_reception : Date
  client : ClientModel
  livraisons : LivraisonModel[]
}
