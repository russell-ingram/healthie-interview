import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import type { Item, ItemStatus } from '../types/item'
import { DraggableCard } from './DraggableCard'

type ColumnProps = {
  status: ItemStatus
  title: string
  items: Item[]
}

export function Column({ status, title, items }: ColumnProps) {
  const headingId = `column-${status}-heading`
  const { setNodeRef } = useDroppable({ id: status, data: { status } })

  return (
    <section
      ref={setNodeRef}
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

      <SortableContext
        items={items.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        {items.length === 0 ? (
          <p className="rounded-lg border border-dashed border-slate-300 p-4 text-center text-sm text-slate-500 dark:border-slate-700">
            No items
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {items.map((item) => (
              <li key={item.id}>
                <DraggableCard item={item} />
              </li>
            ))}
          </ul>
        )}
      </SortableContext>
    </section>
  )
}
