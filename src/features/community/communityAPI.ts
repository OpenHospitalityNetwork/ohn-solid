import {
  getSolidDataset,
  getStringEnglish,
  getThing,
  getUrlAll,
} from '@inrupt/solid-client'
import { fetch } from '@inrupt/solid-client-authn-browser'
import { rdfs, vcard } from 'rdf-namespaces'
import { getHospexUri } from '../offer/offerAPI'
import { Community } from './types'

export const getCommunitiesOfUser = async (
  webId: string,
): Promise<string[]> => {
  // @TODO replace with type indexes
  const hospexUri = getHospexUri(webId)
  const dataset = await getSolidDataset(hospexUri, { fetch })

  const user = getThing(dataset, webId)
  if (!user) return []

  const communities = getUrlAll(
    user,
    'https://hospex.example.com/terms/0.1#memberOf',
  )

  return communities
}

export const getCommunity = async (id: string): Promise<Community | null> => {
  const dataset = await getSolidDataset(id, { fetch })

  const community = getThing(dataset, id)
  if (!community) return null

  const memberIds = getUrlAll(community, vcard.hasMember)

  const name = getStringEnglish(community, rdfs.label) ?? 'Unknown Name'

  return {
    id,
    name,
    memberIds,
  }
}
