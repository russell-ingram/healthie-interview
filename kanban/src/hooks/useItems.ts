import { useState } from 'react'
import { sampleItems } from '../fixtures/sampleItems'
import type { Item, ItemId, ItemStatus } from '../types/item'

/**
 * In-memory stand-in for a real data source. Components only use what this
 * returns, so adding persistence or an API wouldn't change them.
 */
export function useItems() {
  const [items, setItems] = useState(sampleItems)

  return {
    items,
    setItemStatus: (itemId: ItemId, status: ItemStatus) =>
      setItems((current) => setItemStatus(current, itemId, status)),
    reorderItem: (itemId: ItemId, targetId: ItemId) =>
      setItems((current) => reorderItem(current, itemId, targetId)),
  }
}

export function setItemStatus(
  items: Item[],
  itemId: ItemId,
  status: ItemStatus,
): Item[] {
  return items.map((item) => (item.id === itemId ? { ...item, status } : item))
}

/** Moves the item to the target item's place in the list. */
export function reorderItem(
  items: Item[],
  itemId: ItemId,
  targetId: ItemId,
): Item[] {
  const from = items.findIndex((item) => item.id === itemId)
  const to = items.findIndex((item) => item.id === targetId)
  if (from === -1 || to === -1) return items

  return items.toSpliced(from, 1).toSpliced(to, 0, items[from])
}
