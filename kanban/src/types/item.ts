export type ItemStatus = 'todo' | 'doing' | 'done'

/** The slice of a Rick and Morty character a card needs to render. */
export type CharacterSummary = {
  id: string
  name: string
  image: string
}

export type ItemId = string

export type Item = {
  id: ItemId
  title: string
  character: CharacterSummary
  status: ItemStatus
}
