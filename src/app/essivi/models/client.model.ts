import { CommercialModel } from "./commercial.model"

export interface ClientModel{
  id : number
  nom : string
  prenom : string
  numTel : string
  latitude : string
  longitude : string
  quartier : string
  dateEnrollement : Date
  commercial : CommercialModel
}
