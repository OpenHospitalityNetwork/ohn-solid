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
import HOSPEX from '../../vocabularies/HOSPEX'
import uniq from 'lodash/uniq'

class HttpErrorResponse extends Error {
  constructor(response: Response, responseBody: string) {
    const message = `[${response.status} ${response.statusText}]\n${responseBody}`
    super(message)

    this.name = 'HttpErrorResponse'
    Object.setPrototypeOf(this, HttpErrorResponse.prototype)
  }
}

export const joinCommunity = async (community: Community, userId: string) => {
  // append the user into the group inbox
  // TODO this must be much more secure, so people don't just add themselves into groups.
  const response = await fetch(community.groupId, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/sparql-update' },
    body: `
        INSERT DATA {
            <${community.groupId}> <${vcard.hasMember}> <${userId}> .
        }
    `,
  })

  if (!response.ok) throw new HttpErrorResponse(response, await response.text())

  // create :me 'hospex:memberOf' communityId.
  // in hospex document
  const hospexUri = getHospexUri(userId)
  const dataset = await getSolidDataset(hospexUri, { fetch })

  const hospexUser = getThing(dataset, userId)

  const newOrUpdatedHospexUser = buildThing(
    hospexUser ?? createThing({ url: userId }),
  )
    .addUrl(HOSPEX.memberOf.value, community.id)
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

  const communities = uniq([
    ...getUrlAll(user, HOSPEX.memberOf.value),
    // this is for backwards compatibility (deprecated)
    ...getUrlAll(user, 'https://hospex.example.com/terms/0.1#memberOf'),
  ])

  return communities
}

export const getCommunity = async (id: string): Promise<Community> => {
  const community: Community = {
    id,
    name: {},
    about: {},
    groupId: '',
    image: '', //await getProtectedImage('https://picsum.photos/400'), // TODO implement fetching photo
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
