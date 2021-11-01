import {
  buildThing,
  createThing,
  getSolidDataset,
  getStringEnglish,
  getThing,
  getUrlAll,
  saveSolidDatasetAt,
  setThing,
} from '@inrupt/solid-client'
import { fetch } from '@inrupt/solid-client-authn-browser'
import { rdfs, vcard } from 'rdf-namespaces'
import { getHospexUri } from '../offer/offerAPI'
import { Community } from './types'

export const joinCommunity = async (communityId: string, userId: string) => {
  // append the user into the group inbox
  // TODO this must be much more secure, so people don't just add themselves into groups.
  // TODO this must be APPEND

  const groupDataset = await getSolidDataset(communityId)

  const group = getThing(groupDataset, communityId)

  if (!group) throw new Error('Community not found')

  const updatedGroup = buildThing(group).addUrl(vcard.hasMember, userId).build()

  await saveSolidDatasetAt(communityId, setThing(groupDataset, updatedGroup), {
    fetch,
  })

  // create :me 'https://hospex.example.com/terms/0.1#memberOf' communityId.
  // in hospex document
  const hospexUri = getHospexUri(userId)
  const dataset = await getSolidDataset(hospexUri, { fetch })

  const hospexUser = getThing(dataset, userId)

  const newOrUpdatedHospexUser = buildThing(
    hospexUser ?? createThing({ url: userId }),
  )
    .addUrl('https://hospex.example.com/terms/0.1#memberOf', communityId)
    .build()

  await saveSolidDatasetAt(
    hospexUri,
    setThing(dataset, newOrUpdatedHospexUser),
    { fetch },
  )
}

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
