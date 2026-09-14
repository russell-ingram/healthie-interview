import type { Item } from '../types/board'

type CardViewProps = {
  item: Item
}

export function CardView({ item }: CardViewProps) {
  return (
    <article className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <img
        src={item.character.image}
        alt=""
        className="size-10 shrink-0 rounded-full"
      />
      <div className="min-w-0">
        <h3 className="truncate font-medium text-slate-900 dark:text-white">
          {item.title}
        </h3>
        <p className="truncate text-sm text-slate-500 dark:text-slate-400">
          {item.character.name}
        </p>
      </div>
    </article>
  )
}
