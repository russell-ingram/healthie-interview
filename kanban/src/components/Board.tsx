import { COLUMN_IDS, COLUMN_TITLES } from '../constants/columns'
import type { BoardState } from '../types/board'
import { Column } from './Column'

type BoardProps = {
  board: BoardState
}

export function Board({ board }: BoardProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {COLUMN_IDS.map((columnId) => (
        <Column
          key={columnId}
          id={columnId}
          title={COLUMN_TITLES[columnId]}
          items={board.columns[columnId].map((itemId) => board.items[itemId])}
        />
      ))}
    </div>
  )
}
