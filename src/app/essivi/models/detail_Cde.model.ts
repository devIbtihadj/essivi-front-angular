import { CommandeModel } from "./commande.model"
import { Type_venteModel } from "./type_vente.model"

export interface Detail_CdeModel{
  id : number
  qte : number
  commande : CommandeModel
  type_vente : Type_venteModel
}


export class ModelLigneCdeClient{
  id! : number
  qte! : number
  type_vente! : Type_venteModel
}