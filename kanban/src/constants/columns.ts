import type { ItemStatus } from '../types/item'

export const COLUMNS: { status: ItemStatus; title: string }[] = [
  { status: 'todo', title: 'To Do' },
  { status: 'doing', title: 'Doing' },
  { status: 'done', title: 'Done' },
]
