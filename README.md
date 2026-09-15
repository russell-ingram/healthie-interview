# Healthie Full Stack Pairing — Pre-Work

Two independent projects in one repo.

| Folder | What it is |
| --- | --- |
| [`rails-api/`](rails-api/) | Rails data model: providers, clients, per-relationship plans, journal entries |
| [`kanban/`](kanban/) | React + TypeScript Kanban board backed by the Rick and Morty GraphQL API |

Each folder has its own README covering setup and stack choices.

---

## rails-api

**Requirements:** Ruby 3.4.x. SQLite ships with macOS.

> Ruby 4.0 is not supported by Rails 8.1 — install Homebrew's `ruby@3.4` formula, not the
> default `ruby` formula, which now points at 4.0.

```bash
cd rails-api
bundle install
bin/rails db:prepare
bin/rails console
```

Commands, stack choices, the data model, and the four queries are in
[`rails-api/README.md`](rails-api/README.md).

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

Each project lists what's incomplete at the end of its own README:
[`rails-api`](rails-api/README.md#notes-and-known-gaps) and
[`kanban`](kanban/README.md#notes-and-known-gaps).
