import {
  closestCorners,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type Active,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
  type Over,
} from '@dnd-kit/core'
import { useState } from 'react'
import { COLUMNS } from '../constants/columns'
import type { Item, ItemId, ItemStatus } from '../types/item'
import { CardView } from './CardView'
import { Column } from './Column'

type BoardProps = {
  items: Item[]
  onStatusChange: (itemId: ItemId, status: ItemStatus) => void
  onReorder: (itemId: ItemId, targetId: ItemId) => void
}

export function Board({ items, onStatusChange, onReorder }: BoardProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  )
  const [draggedItem, setDraggedItem] = useState<Item | null>(null)

  function handleDragStart({ active }: DragStartEvent) {
    setDraggedItem(items.find((item) => item.id === active.id) ?? null)
  }

  function handleDragOver({ active, over }: DragOverEvent) {
    const overStatus = statusOf(over)
    if (overStatus && overStatus !== statusOf(active)) {
      onStatusChange(String(active.id), overStatus)
    }
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    if (over) onReorder(String(active.id), String(over.id))
    setDraggedItem(null)
  }

  function handleDragCancel() {
    if (draggedItem) onStatusChange(draggedItem.id, draggedItem.status)
    setDraggedItem(null)
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {COLUMNS.map(({ status, title }) => (
          <Column
            key={status}
            status={status}
            title={title}
            items={items.filter((item) => item.status === status)}
          />
        ))}
      </div>

      <DragOverlay>
        {draggedItem && (
          <div className="cursor-grabbing rounded-lg shadow-lg">
            <CardView item={draggedItem} />
          </div>
        )}
      </DragOverlay>
    </DndContext>
  )
}

function statusOf(target: Active | Over | null) {
  return target?.data.current?.status as ItemStatus | undefined
}
