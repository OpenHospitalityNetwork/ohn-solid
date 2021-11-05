import { LanguageString } from '../../types'

export interface Community {
  id: string
  name: LanguageString
  about: LanguageString
  image: string
  groupId: string
  memberIds: string[]
}
