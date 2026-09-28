# HookHub — MVP Spec

## 1. Overview

HookHub is a directory of cool open-source **Claude Code hooks**, displayed in a browsable grid. Each hook lives in a public GitHub repository; HookHub shows what it is and links out to it.

### What is a Claude Code hook?

Hooks are user-defined handlers that Claude Code runs automatically at points in its lifecycle (e.g. `PreToolUse`, `PostToolUse`, `SessionStart`, `Stop`, `Notification`), configured as JSON in `settings.json` or a plugin's `hooks.json`. They let developers enforce rules deterministically instead of relying on the model to remember them.

## 2. MVP scope

**Goal:** a single page at `/` that displays all curated hooks in a responsive grid.

**In scope**
- Static, curated list of hooks.
- Grid of hook cards showing name, category, description, and a link to the GitHub repo.

**Out of scope (deferred)**
- Search and category/event filtering
- Hook detail pages
- User submissions, accounts, auth
- Live GitHub API data (stars, last updated, README rendering)
- Ratings, comments, install commands

## 3. Data model

```ts
// types/hook.ts
export type HookCategory =
  | "Security"
  | "Safety & Guardrails"
  | "Code Quality"
  | "Observability"
  | "Notifications"
  | "Git"
  | "Context & Memory"
  | "Productivity"
  | "Cost & Model Routing"
  | "Collections & Learning";

export interface Hook {
  id: string;          // URL-safe slug, unique
  name: string;
  category: HookCategory;
  description: string; // 1–2 sentences, plain text
  repoUrl: string;     // must start with https://github.com/
}
```

## 4. Data source

A hand-curated, typed array in `data/hooks.ts` (`export const hooks: Hook[]`). No database, no runtime fetches — the page renders fully static.

## 5. UI

### Page: `/` (`app/page.tsx`)
- Server Component; imports `hooks` from `@/data/hooks`.
- Header: "HookHub" title + tagline + hook count.
- Grid: `grid gap-6` with `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`.
- Empty state if `hooks` is empty.

### Component: `HookCard` (`components/HookCard.tsx`)
- Category badge, name, description (clamped to 3 lines), "View on GitHub →" link (`target="_blank" rel="noopener noreferrer"`).
- Equal-height cards, hover/focus states, light + dark mode via `app/globals.css` tokens.

## 6. Technical notes

- Next.js 16 App Router, React 19, TypeScript, Tailwind v4. Check `node_modules/next/dist/docs/` before using unfamiliar APIs (see root `AGENTS.md`).
- Statically rendered — no dynamic APIs.
- Use the `@/*` path alias. No new dependencies.

## 7. Security & operations

- No user input in the MVP → minimal attack surface.
- External links only to validated `https://github.com/` URLs, always with `rel="noopener noreferrer"`.

## 8. Acceptance criteria

- [ ] `/` shows one card per entry in `data/hooks.ts` with name, category, description, and repo link.
- [ ] Grid is 1 / 2 / 3 / 4 columns at base / `sm` / `lg` / `xl`.
- [ ] Repo links open GitHub in a new tab.
- [ ] Works in light and dark mode.
- [ ] `npm run lint` and `npm run build` pass.

## 9. Future ideas

- Category/event filters, search
- `/hooks/[id]` detail pages
- GitHub API enrichment (stars, last commit)
- Community submissions
