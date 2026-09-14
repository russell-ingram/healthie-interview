import type { BoardState, CharacterSummary } from '../types/board'

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

/** Hardcoded board used until cards can be created through the form. */
export const sampleBoard: BoardState = {
  items: {
    'item-1': { id: 'item-1', title: 'Fix the portal gun', character: rick },
    'item-2': { id: 'item-2', title: 'Pass math class', character: morty },
    'item-3': { id: 'item-3', title: 'Get Mega Seeds', character: morty },
    'item-4': { id: 'item-4', title: 'Find a new job', character: summer },
  },
  columns: {
    todo: ['item-1', 'item-2'],
    doing: ['item-3'],
    done: ['item-4'],
  },
}
