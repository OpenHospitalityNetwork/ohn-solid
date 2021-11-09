import {
  asUrl,
  buildThing,
  createThing,
  getDecimal,
  getSolidDataset,
  getStringEnglish,
  getThing,
  getThingAll,
  getUrl,
  removeThing,
  saveSolidDatasetAt,
  setThing,
  ThingPersisted,
} from '@inrupt/solid-client'
import { fetch } from '@inrupt/solid-client-authn-browser'
import { LatLngTuple } from 'leaflet'
import { rdf, rdfs } from 'rdf-namespaces'
import HOSPEX from '../../vocabularies/HOSPEX'
import { LanguageString } from '../../types'
import { Offer } from './types'
import GEO from '../../vocabularies/GEO'

export const getHospexUri = (webId: string) => {
  const baseUrl = /^(https?:\/\/.*)\/profile\/card#me$/g.exec(webId)?.[1]
  if (!baseUrl) throw new Error('unable to generate hospex uri from webId')
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
        thing &&
        (url === HOSPEX.Accommodation.value ||
          // this is for backwards compatibility only (deprecated)
          url === 'https://hospex.example.com/terms/0.1#Accommodation'),
    )
    .map(({ thing }) => thing)
    .map(thing => {
      const id = asUrl(thing)

      const locationUri = getUrl(thing, GEO.location.value)

      if (!locationUri) return null

      const location = getThing(dataset, locationUri)

      const lat = location && getDecimal(location, GEO.lat.value)
      const long = location && getDecimal(location, GEO.long.value)

      if (lat === null || long === null) return null

      const about = getStringEnglish(thing, rdfs.comment) ?? ''

      return {
        id,
        userId: webId,
        position: [lat, long] as LatLngTuple,
        about: { en: about } as LanguageString,
      }
    })
    .filter((offer): offer is Offer => offer !== null)

  return offers
}

export const createOffer = async (offer: Offer, document: string) => {
  const dataset = await getSolidDataset(document, { fetch })

  const locationUri = `${document}#location${Date.now()}`

  const locationBuilder = buildThing({ url: locationUri })
    .setUrl(rdf.type, GEO.Point.value)
    .setDecimal(GEO.lat.value, offer.position[0])
    .setDecimal(GEO.long.value, offer.position[1])

  const offerBuilder = buildThing({ url: offer.id })
    .setUrl(rdf.type, HOSPEX.Accommodation.value)
    .setUrl(HOSPEX.offeredBy.value, offer.userId)
    .setUrl(GEO.location.value, locationUri)
    .setStringWithLocale(rdfs.comment, offer.about.en, 'en')

  const userThing =
    getThing(dataset, offer.userId) ?? createThing({ url: offer.userId })

  const newUserThing = buildThing(userThing)
    .addUrl(HOSPEX.offers.value, offer.id)
    .build()

  const newOfferThing = offerBuilder.build()
  const newLocationThing = locationBuilder.build()

  let newDataset = setThing(dataset, newOfferThing)
  newDataset = setThing(newDataset, newLocationThing)
  newDataset = setThing(newDataset, newUserThing)
  await saveSolidDatasetAt(document, newDataset, { fetch })

  return offer
}

export const updateOffer = async (offer: Offer, document: string) => {
  const dataset = await getSolidDataset(document, { fetch })
  const offerThing = getThing(dataset, offer.id) as ThingPersisted

  if (offerThing) {
    const locationUri = getUrl(offerThing, GEO.location.value) ?? ''

    const locationThing = getThing(dataset, locationUri)

    if (locationThing) {
      const offerThingBuilder = buildThing(offerThing).setStringEnglish(
        rdfs.comment,
        offer.about.en,
      )
      const locationThingBuilder = buildThing(locationThing)
        .setDecimal(GEO.lat.value, offer.position[0])
        .setDecimal(GEO.long.value, offer.position[1])
      let newDataset = setThing(dataset, offerThingBuilder.build())
      newDataset = setThing(newDataset, locationThingBuilder.build())
      await saveSolidDatasetAt(document, newDataset, { fetch })
      return offer
    }
    throw new Error('location to update not found')
  }
  throw new Error('offer to update not found')
}

export const removeOffer = async (offer: Offer) => {
  const dataset = await getSolidDataset(offer.id, { fetch })
  const offerThing = getThing(dataset, offer.id) as ThingPersisted

  if (offerThing) {
    const locationUri = getUrl(offerThing, GEO.location.value) ?? ''

    let updatedDataset = removeThing(dataset, locationUri)
    updatedDataset = removeThing(updatedDataset, offer.id)

    await saveSolidDatasetAt(offer.id, updatedDataset, { fetch })
    return offer
  }
  throw new Error('offer to remove not found')
}
