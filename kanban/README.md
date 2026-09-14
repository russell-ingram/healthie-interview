# Rick and Morty Kanban

A frontend-only Kanban board with To Do, Doing, and Done columns. Each card is assigned a
character from the public [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql).

## Running it

Requires Node 20.19+ or 22.12+ (Vite 8's minimum). `.nvmrc` pins 24 if you use nvm.

```bash
npm install
npm start
```

Opens on http://localhost:5173. No API keys or backend — the only network call is to the
public Rick and Morty API.

| Script                            | What it does                                 |
| --------------------------------- | -------------------------------------------- |
| `npm start` / `npm run dev`       | Vite dev server with hot reload              |
| `npm run build`                   | Type-check, then production build to `dist/` |
| `npm run typecheck`               | TypeScript only, no build                    |
| `npm run lint`                    | Oxlint                                       |
| `npm test` / `npm run test:watch` | Vitest                                       |
| `npm run format` / `format:check` | Prettier                                     |

## Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** - basic styling for a quick build
- **dnd-kit** (`core` + `sortable`) - drag and drop between and within columns
- **Headless UI** - character typeahead (`Combobox`)
- **canvas-confetti** - celebration when a card moves to Done
- **Vitest** - unit tests for item updates

## Structure

```
src/
├─ api/         Rick and Morty GraphQL request
├─ components/  Board, Column, cards, new item form, character picker
├─ constants/   Column definitions
├─ fixtures/    Starter items
├─ hooks/       useItems (in-memory item list), useCharacterSearch
└─ types/       Item and character types
```

## Notes and known gaps

- The board starts with a few sample items for quick testing, rather than an empty state.
- Items live in memory, so a refresh resets the board. `useItems` is where persistence
  would go.
- No editing or deleting items.
- Drag and drop is mouse-only; keyboard and touch dragging aren't supported.
- Character search shows the first page of matches (20), with no "load more".
- Tests cover the item update logic only; there are no component tests.
