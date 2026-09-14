import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { Item } from '../types/item'
import { CardView } from './CardView'

type DraggableCardProps = {
  item: Item
}

export function DraggableCard({ item }: DraggableCardProps) {
  const { listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: item.id, data: { status: item.status } })

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      className={`cursor-grab ${isDragging ? 'opacity-40' : ''}`}
      {...listeners}
    >
      <CardView item={item} />
    </div>
  )
}
