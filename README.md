# Healthie Full Stack Pairing — Pre-Work

Two independent projects in one repo.

| Folder | What it is |
| --- | --- |
| [`rails-api/`](rails-api/) | Rails data model: providers, clients, per-relationship plans, journal entries |
| [`kanban/`](kanban/) | React + TypeScript Kanban board backed by the Rick and Morty GraphQL API |

Each folder has its own README covering setup and stack choices.

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

Schema overview, model relationships, and the four required queries: _TODO._

---

## kanban

**Requirements:** Node 20.19+ or 22.12+.

```bash
cd kanban
npm install
npm start
```

Opens on http://localhost:5173. Scripts, stack choices, and component structure are in
[`kanban/README.md`](kanban/README.md).

---

## Notes / known gaps

_TODO — anything left incomplete goes here so we can talk about it in the session._
