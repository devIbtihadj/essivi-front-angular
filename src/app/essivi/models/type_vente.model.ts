import { MarqueModel } from "./marque.model"


export interface Type_venteModel{
  id : number
  libelle_type_vente : string
  prix_unit : number
  image : string
  qte_contenu_unitaire : number
  qte_composition : number
  marque : MarqueModel
}
