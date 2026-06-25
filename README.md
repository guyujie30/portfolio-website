# Portfolio Website

A full-stack personal website for documenting my journey into LLM decision-making, agent development, and practical frontend engineering.

The site is designed as a personal research workbench rather than a static resume. It combines a bold neo-brutalist visual system with database-backed content for profile information, project notes, and long-form writing.

## Features

- Four public pages: Home, About, Projects, and Notes.
- Dynamic note detail pages with readable article content.
- Neo-brutalist UI style with thick borders, hard shadows, saturated colors, and mechanical button feedback.
- Supabase PostgreSQL integration through Prisma.
- Fallback local content when database environment variables are missing.
- Project-local agent skills and `AGENTS.md` instructions for Codex-based development workflow.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Prisma
- Supabase PostgreSQL
- Lucide React
- CSS custom properties and hand-written responsive styles

## Project Structure

```text
src/app              Next.js routes
src/views            Page-level view components
src/components       Shared UI components
src/services         Data access layer
src/data             Fallback content
src/lib              Prisma client
prisma               Prisma schema, migrations, and seed script
public               Static assets
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Copy the example environment file:

```bash
cp .env.example .env
```

Fill in the database variables:

```env
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."
```

Generate Prisma Client:

```bash
pnpm prisma:generate
```

Run migrations:

```bash
pnpm prisma:migrate --name init
```

Seed the database:

```bash
pnpm prisma:seed
```

Start the development server:

```bash
pnpm dev
```

Open:

```text
http://127.0.0.1:3000
```

## Scripts

```bash
pnpm dev              Start the local development server
pnpm build            Create a production build
pnpm start            Start the production server
pnpm prisma:generate  Generate Prisma Client
pnpm prisma:migrate   Run Prisma migrations
pnpm prisma:seed      Seed profile, projects, and notes
pnpm prisma:studio    Open Prisma Studio
```

## Content Model

- `Profile`: personal introduction and public links.
- `Project`: featured projects, research experiments, and reference links.
- `Note`: article list and detail content.

Pages should access content through `src/services/content.ts` instead of scattering Prisma queries across React components.

## Environment Notes

The real `.env` file is intentionally ignored by Git. Keep Supabase credentials, passwords, tokens, and direct database URLs out of commits.

For local development without database variables, the app falls back to `src/data/fallback.ts`.

## Author

Built by Guyujie / Luffy, a graduate student exploring LLM decision-making and agent systems.
