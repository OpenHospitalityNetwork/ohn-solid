import { LanguageString } from '../../types'

export interface User {
  id: string
  name: string
  avatar: string
  about: LanguageString
  communityIds: string[]
  offerIds: string[]
  hospexDocuments: string[]
}
