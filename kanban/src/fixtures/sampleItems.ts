import type { CharacterSummary } from '../types/character'
import type { Item } from '../types/item'

const avatar = (id: number) =>
  `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`

const rick: CharacterSummary = {
  id: '1',
  name: 'Rick Sanchez',
  image: avatar(1),
}
const morty: CharacterSummary = {
  id: '2',
  name: 'Morty Smith',
  image: avatar(2),
}
const summer: CharacterSummary = {
  id: '3',
  name: 'Summer Smith',
  image: avatar(3),
}

/** Starter items so the board isn't empty on first load. */
export const sampleItems: Item[] = [
  { id: 'item-1', title: 'Fix portal gun', character: rick, status: 'todo' },
  { id: 'item-2', title: 'Pass math class', character: morty, status: 'todo' },
  { id: 'item-3', title: 'Get Mega Seeds', character: morty, status: 'doing' },
  { id: 'item-4', title: 'Find a new job', character: summer, status: 'done' },
]
