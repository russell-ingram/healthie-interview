# Healthie Full Stack Pairing — Pre-Work

Two independent projects in one repo.

| Folder | What it is |
| --- | --- |
| `rails-api/` | Rails data model: providers, clients, per-relationship plans, journal entries |
| `kanban/` | React + TypeScript Kanban board backed by the Rick and Morty GraphQL API |

---

## rails-api

**Requirements:** Ruby 3.4.x and Rails 8.1.x. SQLite ships with macOS.

> Ruby 4.0 is not supported by Rails 8.1 — install Homebrew's `ruby@3.4` formula, not the
> default `ruby` formula, which now points at 4.0.

```bash
cd rails-api
bundle install
bin/rails db:migrate
bin/rails db:seed
bin/rails console
```

Schema overview, model relationships, and the four required queries: _TODO — fill in once the models exist._

The required ActiveRecord queries live in `rails-api/QUERIES.md` (or `db/seeds.rb` / a rake task — decide and update this line).

---

## kanban

**Requirements:** Node 20+.

```bash
cd kanban
npm install
npm run dev
```

Opens on http://localhost:5173. No auth or API keys needed — it calls the public
Rick and Morty GraphQL API at https://rickandmortyapi.com/graphql.

Component structure and library choices: _TODO — fill in once built._

---

## Notes / known gaps

_TODO — anything left incomplete goes here so we can talk about it in the session._
