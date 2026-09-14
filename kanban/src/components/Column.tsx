import type { ColumnId } from '../constants/columns'
import type { Item } from '../types/board'
import { CardView } from './CardView'

type ColumnProps = {
  id: ColumnId
  title: string
  items: Item[]
}

export function Column({ id, title, items }: ColumnProps) {
  const headingId = `column-${id}-heading`

  return (
    <section
      aria-labelledby={headingId}
      className="flex flex-col rounded-xl bg-slate-100 p-3 dark:bg-slate-900"
    >
      <header className="mb-3 flex items-center justify-between px-1">
        <h2
          id={headingId}
          className="font-semibold text-slate-700 dark:text-slate-200"
        >
          {title}
        </h2>
        <span className="rounded-full bg-slate-200 px-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {items.length}
        </span>
      </header>

      {items.length === 0 ? (
        <p className="rounded-lg border border-dashed border-slate-300 p-4 text-center text-sm text-slate-500 dark:border-slate-700">
          No items
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item.id}>
              <CardView item={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
