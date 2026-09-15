# Providers, Clients, and Journal Entries

A Rails data model for providers (e.g. dietitians), their clients, the plan each client has
with each provider, and client journal entries.

## Running it

Requires Ruby 3.4.x (`.ruby-version` pins 3.4.10). Rails 8.1 does not support Ruby 4.0.
SQLite ships with macOS.

```bash
bundle install
bin/rails db:prepare
bin/rails console
```

| Command                | What it does                                 |
| ---------------------- | -------------------------------------------- |
| `bin/rails db:prepare` | Create and migrate the database; seed if new |
| `bin/rails db:seed`    | Load sample data (safe to re-run)            |
| `bin/rails console`    | Rails console for running queries            |
| `bin/rails test`       | Minitest                                     |
| `bin/ci`               | Setup, tests, and a seed check in one run    |

## Stack

- **Rails 8.1, API-only, minimal** - just Active Record and what it needs; no views,
  mailers, jobs, or deploy tooling
- **SQLite** - no database server to install
- **Minitest**

## Data model

```
users ──────────────< enrollments >────────────── users
(type: Provider)       plan: basic | premium       (type: Client)
                                                      │
                                                      └──< journal_entries
                                                            body
```

- **One `users` table, with `Provider` and `Client` as subclasses** (single-table inheritance) -
  same attributes, and a person is one or the other.
- **The plan lives on `enrollments`**, one row per provider-client pair - a client can be basic
  with one provider and premium with another.
- **Journal entries belong to the client**, not to a provider.
- **Rules are enforced in the database as well as the models** - unique emails, one enrollment
  per pair, plan limited to basic/premium, foreign keys.

## Queries

```ruby
dana = Provider.find_by(email: "dana@example.com")
alex = Client.find_by(email: "alex@example.com")

dana.clients                              # all clients for a provider
alex.providers                            # all providers for a client
alex.journal_entries.newest_first         # a client's journal entries, newest first
dana.journal_entries.newest_first         # entries across all of a provider's clients, newest first
```

Each is a `has_many` association on [`Provider`](app/models/provider.rb) or
[`Client`](app/models/client.rb); `newest_first` is a scope on
[`JournalEntry`](app/models/journal_entry.rb). Tests for all four are in
[`test/models/`](test/models/).

## Notes and known gaps

- Models only; there are no API endpoints.
- A person can't be both a provider and a client with the same email.
- Deleting a user who has enrollments or journal entries is blocked by foreign keys; there's no
  delete or archive behavior yet.
- No email format validation.
- No pagination on journal entry queries.
