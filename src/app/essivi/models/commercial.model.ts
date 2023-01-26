import { userModel } from "./user.model"

export interface CommercialModel {
  id : number
  nom : string
  prenom : string
  numTel : string
  quartier : string
  numIdentification : string
  nomPersonnePrevenir : string
  prenomPersonnePrevenir : string
  contactPersonnePrevenir : string
  user : userModel
}
