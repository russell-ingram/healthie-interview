import { useState, type FormEvent } from 'react'
import type { CharacterSummary } from '../types/character'
import { CharacterPicker } from './CharacterPicker'

type NewItemFormProps = {
  onAdd: (title: string, character: CharacterSummary) => void
}

export function NewItemForm({ onAdd }: NewItemFormProps) {
  const [title, setTitle] = useState('')
  const [character, setCharacter] = useState<CharacterSummary | null>(null)

  const trimmedTitle = title.trim()
  const canSubmit = trimmedTitle !== '' && character !== null

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!canSubmit) return

    onAdd(trimmedTitle, character)
    setTitle('')
    setCharacter(null)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-start dark:bg-slate-900"
    >
      <input
        aria-label="Title"
        placeholder="What needs doing?"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800"
      />
      <CharacterPicker value={character} onChange={setCharacter} />
      <button
        type="submit"
        disabled={!canSubmit}
        className="rounded-lg bg-violet-600 px-4 py-2 font-medium text-white hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Add
      </button>
    </form>
  )
}
