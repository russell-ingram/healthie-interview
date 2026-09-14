import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { useState } from 'react'
import { useCharacterSearch } from '../hooks/useCharacterSearch'
import type { CharacterSummary } from '../types/character'

type CharacterPickerProps = {
  value: CharacterSummary | null
  onChange: (character: CharacterSummary | null) => void
}

export function CharacterPicker({ value, onChange }: CharacterPickerProps) {
  const [query, setQuery] = useState('')
  const { characters, isLoading, error } = useCharacterSearch(query)

  return (
    <Combobox
      value={value}
      onChange={onChange}
      onClose={() => setQuery('')}
      by="id"
      immediate
    >
      <div className="flex-1">
        <ComboboxInput
          aria-label="Character"
          placeholder="Search characters…"
          displayValue={(character: CharacterSummary | null) =>
            character?.name ?? ''
          }
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800"
        />
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            Couldn't load characters
          </p>
        )}
        {!error && !isLoading && characters.length === 0 && (
          <p className="mt-1 text-sm text-slate-500">No characters found</p>
        )}
      </div>

      <ComboboxOptions
        anchor="bottom start"
        className="z-10 max-h-72 w-(--input-width) rounded-lg border border-slate-200 bg-white p-1 shadow-lg [--anchor-gap:4px] empty:invisible dark:border-slate-700 dark:bg-slate-800"
      >
        {characters.map((character) => (
          <ComboboxOption
            key={character.id}
            value={character}
            className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 data-focus:bg-slate-100 dark:data-focus:bg-slate-700"
          >
            <img src={character.image} alt="" className="size-6 rounded-full" />
            {character.name}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  )
}
