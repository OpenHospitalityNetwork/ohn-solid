import { LatLngTuple } from 'leaflet'
import { LanguageString } from '../../types'

export interface Offer {
  id: string
  position: LatLngTuple
  userId: string
  about: LanguageString
}
