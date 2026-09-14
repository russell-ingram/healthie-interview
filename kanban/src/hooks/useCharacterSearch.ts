import { useEffect, useState } from 'react'
import { searchCharacters } from '../api/characters'
import type { CharacterSummary } from '../types/character'

const SEARCH_DELAY_MS = 300

export function useCharacterSearch(query: string) {
  const [characters, setCharacters] = useState<CharacterSummary[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const timeout = setTimeout(() => {
      setIsLoading(true)
      searchCharacters(query, controller.signal)
        .then((results) => {
          setCharacters(results)
          setError(null)
        })
        .catch((err: Error) => {
          if (!controller.signal.aborted) setError(err)
        })
        .finally(() => {
          if (!controller.signal.aborted) setIsLoading(false)
        })
    }, SEARCH_DELAY_MS)

    return () => {
      clearTimeout(timeout)
      controller.abort()
    }
  }, [query])

  return { characters, isLoading, error }
}
