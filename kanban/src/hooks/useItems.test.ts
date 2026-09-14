import { describe, expect, it } from 'vitest'
import { sampleItems } from '../fixtures/sampleItems'
import { reorderItem, setItemStatus } from './useItems'

// sampleItems, in order:
//   item-1 todo, item-2 todo, item-3 doing, item-4 done

const ids = (items: { id: string }[]) => items.map((item) => item.id)

describe('setItemStatus', () => {
  it('changes only that item’s status', () => {
    const items = setItemStatus(sampleItems, 'item-1', 'done')

    expect(items.map((item) => item.status)).toEqual([
      'done',
      'todo',
      'doing',
      'done',
    ])
  })

  it('keeps the order of the list', () => {
    const items = setItemStatus(sampleItems, 'item-4', 'todo')

    expect(ids(items)).toEqual(ids(sampleItems))
  })
})

describe('reorderItem', () => {
  it('moves an item down to the target’s place', () => {
    const items = reorderItem(sampleItems, 'item-1', 'item-2')

    expect(ids(items)).toEqual(['item-2', 'item-1', 'item-3', 'item-4'])
  })

  it('moves an item up to the target’s place', () => {
    const items = reorderItem(sampleItems, 'item-4', 'item-1')

    expect(ids(items)).toEqual(['item-4', 'item-1', 'item-2', 'item-3'])
  })

  it('returns the list unchanged when the target is not an item', () => {
    expect(reorderItem(sampleItems, 'item-1', 'todo')).toBe(sampleItems)
  })

  it('does not mutate the list it was given', () => {
    const before = structuredClone(sampleItems)

    reorderItem(sampleItems, 'item-1', 'item-4')
    setItemStatus(sampleItems, 'item-1', 'done')

    expect(sampleItems).toEqual(before)
  })
})
