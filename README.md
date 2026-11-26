# designacoes-vida-e-ministerio-api

REST API for automating Christian Life and Ministry Meeting assignments (S-38 rules), built with Clean Architecture and powered by the decoupled domain package [`@lalsilva/designacoes-vida-e-ministerio-core`](https://github.com/lalsilva).

## Architecture

The application keeps business rules decoupled from infrastructure concerns:

- **Domain Core (`@lalsilva/designacoes-vida-e-ministerio-core`):** Pure TypeScript package published on GitHub Packages containing domain types, enums, S-38 eligibility/conflict validators, and candidate ranking algorithms.
- **Application (`src/application`):** Pure TypeScript use cases and repository ports, with zero framework or ORM coupling.
- **Infrastructure (`src/infra`):** NestJS (Fastify adapter), Drizzle ORM (PostgreSQL), Zod validation, mappers, and Composition Root modules.

## Tech Stack

- **Runtime & Language:** Node.js (LTS) + TypeScript (strict mode)
- **HTTP Framework:** NestJS + Fastify Adapter (`@nestjs/platform-fastify`)
- **Database & ORM:** PostgreSQL + Drizzle ORM / Drizzle Kit
- **Validation:** Zod
- **Testing:** Vitest + SWC (`unplugin-swc`)
- **Package Manager & Containers:** pnpm + Docker Compose

## Prerequisites

- Node.js 22+
- pnpm
- Docker and Docker Compose
- GitHub Personal Access Token with `read:packages` scope configured in your global `~/.npmrc`:

```ini
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## Getting Started

```bash
# 1. Copy environment variables
cp .env.example .env

# 2. Start PostgreSQL
docker compose up -d

# 3. Install dependencies
pnpm install

# 4. Run in watch mode
pnpm start:dev
```

## Scripts

| Command            | Description                                   |
| :----------------- | :-------------------------------------------- |
| `pnpm start:dev`   | Start API in watch mode                       |
| `pnpm build`       | Compile application with SWC                  |
| `pnpm typecheck`   | Run TypeScript type checking (`tsc --noEmit`) |
| `pnpm test`        | Run unit tests with Vitest                    |
| `pnpm test:watch`  | Run Vitest in watch mode                      |
| `pnpm test:cov`    | Run tests with V8 coverage report             |
| `pnpm db:generate` | Generate Drizzle SQL migrations               |
| `pnpm db:migrate`  | Apply Drizzle migrations                      |
| `pnpm db:push`     | Push schema directly to local database        |
| `pnpm db:studio`   | Open Drizzle Studio                           |

## Development Standards

- **Branching:** Gitflow (`main`, `develop`, `feature/*`)
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/) in English

## License

See the [LICENSE](./LICENSE) file for details.
