import {
  buildThing,
  createThing,
  getSolidDataset,
  getStringEnglish,
  getThing,
  getUrl,
  getUrlAll,
  saveSolidDatasetAt,
  setThing,
} from '@inrupt/solid-client'
import { fetch } from '@inrupt/solid-client-authn-browser'
import { sioc, vcard } from 'rdf-namespaces'
import { getHospexUri } from '../offer/offerAPI'
import { Community } from './types'

export const joinCommunity = async (community: Community, userId: string) => {
  // append the user into the group inbox
  // TODO this must be much more secure, so people don't just add themselves into groups.
  // TODO this must be APPEND
  fetch(community.groupId, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/sparql-update' },
    body: `
        INSERT DATA {
            <${community.groupId}> <${vcard.hasMember}> <${userId}> .
        }
    `,
  })

  // create :me 'https://hospex.example.com/terms/0.1#memberOf' communityId.
  // in hospex document
  const hospexUri = getHospexUri(userId)
  const dataset = await getSolidDataset(hospexUri, { fetch })

  const hospexUser = getThing(dataset, userId)

  const newOrUpdatedHospexUser = buildThing(
    hospexUser ?? createThing({ url: userId }),
  )
    .addUrl('https://hospex.example.com/terms/0.1#memberOf', community.id)
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

export const getCommunity = async (id: string): Promise<Community> => {
  const community: Community = {
    id,
    name: {},
    about: {},
    groupId: '',
    memberIds: [] as string[],
  }

  const dataset = await getSolidDataset(id, { fetch })

  const communityThing = getThing(dataset, id)
  if (!communityThing) throw new Error("Community couldn't be fetched")

  community.name.en =
    getStringEnglish(communityThing, sioc.name) ?? 'Unknown Name'
  community.groupId = getUrl(communityThing, sioc.has_usergroup) ?? ''

  community.about.en = getStringEnglish(communityThing, sioc.about) ?? ''

  try {
    const memberDataset = await getSolidDataset(community.groupId, { fetch })
    const memberThing = getThing(memberDataset, community.groupId)
    if (memberThing)
      community.memberIds = getUrlAll(memberThing, vcard.hasMember)
  } catch (error) {
    console.log(error)
  }
  return community
}
