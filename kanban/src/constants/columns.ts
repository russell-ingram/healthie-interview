export const COLUMN_IDS = ['todo', 'doing', 'done'] as const

export type ColumnId = (typeof COLUMN_IDS)[number]

export const COLUMN_TITLES: Record<ColumnId, string> = {
  todo: 'To Do',
  doing: 'Doing',
  done: 'Done',
}
