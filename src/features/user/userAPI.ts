import { User } from './types'
import {
  getSolidDataset,
  getThing,
  getStringNoLocale,
  getUrl,
  getStringWithLocale,
  getUrlAll,
  getThingAll,
  saveSolidDatasetAt,
  createSolidDataset,
} from '@inrupt/solid-client'
import { fetch } from '@inrupt/solid-client-authn-browser'
import { vcard, foaf } from 'rdf-namespaces'
import { getHospexUri } from '../offer/offerAPI'
import uniq from 'lodash/uniq'

export const getUser = async (webId: string): Promise<User | null> => {
  const user: User = {
    id: webId,
    name: '',
    avatar: '',
    about: { en: '' },
    communityIds: [],
    hospexDocuments: [],
    offerIds: [],
  }

  const dataset = await getSolidDataset(webId, { fetch })

  const userThing = getThing(dataset, webId)
  if (!userThing) return null
  user.name =
    (getStringNoLocale(userThing, vcard.fn) ||
      getStringNoLocale(userThing, foaf.name)) ??
    ''
  const avatarUrl = getUrl(userThing, vcard.hasPhoto) ?? ''
  user.avatar = avatarUrl ? await getProtectedImage(avatarUrl) : ''
  user.about.en =
    (getStringNoLocale(userThing, vcard.note) ||
      getStringWithLocale(userThing, vcard.note, 'en')) ??
    ''

  // here we fetch user's hospex document(s)
  try {
    const hospexUri = getHospexUri(webId)
    const hospexDataset = await getSolidDataset(hospexUri, { fetch })

    user.hospexDocuments.push(hospexUri)

    const userThing2 = getThing(hospexDataset, webId)
    if (userThing2) {
      user.communityIds = getUrlAll(
        userThing2,
        'https://hospex.example.com/terms/0.1#memberOf',
      )

      const offerIds1 = getUrlAll(
        userThing2,
        'https://hospex.example.com/terms/0.1#offers',
      )

      const allThings = getThingAll(hospexDataset)
      const offerIds2 = allThings
        .map(thing => ({
          thing,
          url: getUrl(thing, 'https://hospex.example.com/terms/0.1#offeredBy'),
        }))
        .filter(({ url }) => url === webId)
        .map(({ thing }) => thing.url)

      user.offerIds = uniq([...offerIds1, ...offerIds2])
    }
  } catch (e) {
    e
  }

  return user
}

/**
 * https://alphahydrae.com/2021/02/how-to-display-an-image-protected-by-header-based-authentication/
 */
export const getProtectedImage = async (url: string): Promise<string> => {
  // Fetch the image.
  const response = await fetch(url)

  // Create an object URL from the data.
  const blob = await response.blob()
  const objectUrl = URL.createObjectURL(blob)
  return objectUrl
}

export const createHospexDocument = async (uri: string) => {
  try {
    await getSolidDataset(uri, { fetch })
  } catch (error) {
    // save the solid dataset to the new place

    return await saveSolidDatasetAt(uri, createSolidDataset(), {
      fetch,
    })
  }
  throw new Error('document already exists')
}

/*
 * This is how to query turtle document with SPARQL and rdflib
export const queryTurtle = <T extends Record<string, string>>(
  turtle: string,
  baseUrl: string,
  sparql: string,
): T[] => {
  const store = rdflib.graph()
  rdflib.parse(turtle, store, baseUrl, 'text/turtle')
  const query = rdflib.SPARQLToQuery(sparql, false, store)

  const bindings: Bindings[] = store.querySync(query)
  return bindings.map(
    a =>
      Object.fromEntries(
        Object.entries(a).map(([key, val]) => [key.substr(1), val.value]),
      ) as T,
  )
}
*/
