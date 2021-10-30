import { User } from './types'
import {
  getSolidDataset,
  getThing,
  getStringNoLocale,
  getUrl,
  getStringWithLocale,
} from '@inrupt/solid-client'
import { fetch } from '@inrupt/solid-client-authn-browser'
import { vcard, foaf } from 'rdf-namespaces'

export const getUser = async (webId: string): Promise<User | null> => {
  const dataset = await getSolidDataset(webId, { fetch })

  const user = getThing(dataset, webId)
  if (!user) return null
  const name =
    (getStringNoLocale(user, vcard.fn) || getStringNoLocale(user, foaf.name)) ??
    ''
  const avatarUrl = getUrl(user, vcard.hasPhoto) ?? ''
  const avatar = avatarUrl ? await displayProtectedImage(avatarUrl) : ''
  const about =
    (getStringNoLocale(user, vcard.note) ||
      getStringWithLocale(user, vcard.note, 'en')) ??
    ''
  return {
    id: webId,
    name,
    avatar,
    about,
    communityIds: [],
  }
}

/**
 * https://alphahydrae.com/2021/02/how-to-display-an-image-protected-by-header-based-authentication/
 */
const displayProtectedImage = async (url: string): Promise<string> => {
  // Fetch the image.
  const response = await fetch(url)

  // Create an object URL from the data.
  const blob = await response.blob()
  const objectUrl = URL.createObjectURL(blob)
  return objectUrl
}
