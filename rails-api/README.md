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

| Command                | What it does                                   |
| ---------------------- | ---------------------------------------------- |
| `bin/rails db:prepare` | Create and migrate the database; seed if new   |
| `bin/rails console`    | Rails console for running queries              |
| `bin/rails test`       | Minitest                                       |
| `bin/ci`               | Setup, tests, and a seed check in one run      |

## Stack

- **Rails 8.1, API-only, minimal** - just Active Record and what it needs; no views,
  mailers, jobs, or deploy tooling
- **SQLite** - no database server to install
- **Minitest** - ships with Rails
