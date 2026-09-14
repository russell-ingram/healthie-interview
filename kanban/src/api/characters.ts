import type { CharacterSummary } from '../types/character'

const API_URL = 'https://rickandmortyapi.com/graphql'

const SEARCH_CHARACTERS_QUERY = `
  query SearchCharacters($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`

type SearchCharactersResponse = {
  data?: { characters: { results: CharacterSummary[] } }
  errors?: { message: string }[]
}

export async function searchCharacters(
  name: string,
  signal?: AbortSignal,
): Promise<CharacterSummary[]> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: SEARCH_CHARACTERS_QUERY,
      variables: { name },
    }),
    signal,
  })

  if (!response.ok) {
    throw new Error(`Character search failed with status ${response.status}`)
  }

  const { data, errors } = (await response.json()) as SearchCharactersResponse
  if (errors?.length) throw new Error(errors[0].message)

  return data?.characters.results ?? []
}
