import { Offer } from './types'
import { fetch } from '@inrupt/solid-client-authn-browser'
import {
  asUrl,
  getDecimal,
  getSolidDataset,
  getStringByLocaleAll,
  getThing,
  getThingAll,
  getUrl,
} from '@inrupt/solid-client'
import { rdf, rdfs } from 'rdf-namespaces'
import { LatLngTuple } from 'leaflet'

const wgs84 = (a: string) => 'http://www.w3.org/2003/01/geo/wgs84_pos#' + a

// A mock function to mimic making an async request for data
export const fetchOffers = async (): Promise<Offer[]> => {
  const offers: Offer[] = []
  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 40; j++) {
      offers.push({
        id: `${i}_${j}`,
        position: [(Math.random() - 0.5) * 160, (Math.random() - 0.5) * 360],
        userId: '',
        about: { en: ['This is a description of offer ' + i + '_' + j] },
      })
    }
  }
  return offers
}

const getHospexUri = (webId: string) => {
  const baseUrl = /^(https:\/\/.*)\/profile\/card#me$/g.exec(webId)?.[1]
  return baseUrl + '/public/hospex.ttl'
}

export const getOffersOfUser = async (webId: string): Promise<Offer[]> => {
  // @TODO replace with type indexes
  const hospexUri = getHospexUri(webId)
  const dataset = await getSolidDataset(hospexUri, { fetch })

  const things = getThingAll(dataset)
  const offers = things
    .map(thing => ({ thing, url: getUrl(thing, rdf.type) }))
    .filter(
      ({ thing, url }) =>
        thing && url === 'https://hospex.example.com/terms/0.1#Accommodation',
    )
    .map(({ thing }) => thing)
    .map(thing => {
      const id = asUrl(thing)

      const locationUri = getUrl(thing, wgs84('location'))

      if (!locationUri) return null

      const location = getThing(dataset, locationUri)

      const lat = location && getDecimal(location, wgs84('lat'))
      const long = location && getDecimal(location, wgs84('long'))

      if (!(lat && long)) return null

      const about = getStringByLocaleAll(thing, rdfs.comment)

      return {
        id,
        userId: webId,
        position: [lat, long] as LatLngTuple,
        about: Object.fromEntries(about),
      }
    })
    .filter((offer): offer is Offer => offer !== null)

  return offers
}
