import { LatLngTuple } from 'leaflet'

export interface Offer {
  id: string
  position: LatLngTuple
  userId: string
  about: { [language: string]: string[] }
}
