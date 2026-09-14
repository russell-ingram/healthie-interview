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
| `npm run format` / `format:check` | Prettier                                     |

## Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** - basic styling for a quick build
