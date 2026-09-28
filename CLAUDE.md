# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

HookHub is a Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 app, currently the unmodified `create-next-app` scaffold — no custom routes, components, or data layer exist yet beyond `app/layout.tsx` and `app/page.tsx`.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript)

There is no test runner configured yet.

## Architecture notes

- App Router only (`app/` directory) — no `pages/` directory exists.
- Path alias `@/*` maps to the repo root (`tsconfig.json`).
- Fonts: Geist Sans/Mono are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`).
- Styling is Tailwind v4 via `@tailwindcss/postcss` (see `postcss.config.mjs`); there is no `tailwind.config.*` file since v4 configures via CSS (`app/globals.css`).
- `next.config.ts` is currently empty — no custom Next config (rewrites, images, etc.) is in place.

## Working in this Next.js version

Per `AGENTS.md`, this project pins a Next.js version that may differ from the App Router APIs and conventions in training data. Before writing or changing routing, data-fetching, layouts, or config code, check `node_modules/next/dist/docs/` (organized into `01-app`, `02-pages`, `03-architecture`, `04-community`) for the current API shape rather than assuming prior Next.js knowledge.
