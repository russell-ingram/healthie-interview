import type { ColumnId } from '../constants/columns'

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
}

export type BoardState = {
  items: Record<ItemId, Item>
  /** Card order within each column, top to bottom. */
  columns: Record<ColumnId, ItemId[]>
}
