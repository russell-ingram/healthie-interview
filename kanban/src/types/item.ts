import type { CharacterSummary } from './character'

export type ItemStatus = 'todo' | 'doing' | 'done'

export type ItemId = string

export type Item = {
  id: ItemId
  title: string
  character: CharacterSummary
  status: ItemStatus
}
