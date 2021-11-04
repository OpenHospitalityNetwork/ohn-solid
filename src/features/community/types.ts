import { LanguageString } from '../../types'

export interface Community {
  id: string
  name: LanguageString
  about: LanguageString
  groupId: string
  memberIds: string[]
}
