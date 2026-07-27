# AGENTS.md

Instructions for AI coding agents. Complement to README.md.

> Before writing code, check the available skills and load the relevant one.

## Quick Commands

| Command     | Action                                      |
|-------------|---------------------------------------------|
| `npm run dev` | Start dev server at localhost:4321        |
| `npm run build` | Build static site to `dist/`            |
| `npm run preview` | Preview production build locally       |
| `npm run bump` | Fetch latest releases, update versions    |

No test, lint, or typecheck scripts are configured. Generated types live in `.astro/types.d.ts` (gitignored) and are auto-picked up by `tsconfig.json`.

## Project

- **Framework/Runtime**: Astro 6 · Node >= 22.12.0 · static output (`dist/`)
- **Bundler/Routing**: Vite (built-in Astro) · file-based routing
- **State management**: none — static site, no JS runtime
- **Import aliases**: none configured
- **Styling**: Tailwind CSS 4 via `@tailwindcss/vite` (no PostCSS, no `tailwind.config.*`). Brand colors via CSS tokens (`bg-bg`, `text-text-primary`)
- **TypeScript**: strict (`extends astro/tsconfigs/strict`)

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/release.ts` | Version + download URLs (Android + Desktop) |
| `scripts/bump.mjs` | Automated version bump from GitHub releases |
| `src/layouts/Layout.astro` | SEO, OG, JSON-LD, canonical |
| `src/components/Hero.astro` | Hero with kanji glitch effect |
| `src/components/Features.astro` | Feature cards (3-column grid) |
| `src/components/Downloads.astro` | Multi-platform download cards |
| `src/components/DownloadMenu.astro` | OS-detecting download button |
| `src/components/FAQ.astro` | FAQ accordion |
| `src/components/Footer.astro` | Footer with GitHub links |
| `src/styles/global.css` | Design tokens, animations, scanlines |
| `src/pages/index.astro` | Single-page composition |

## Linting Rules

None configured. No CI pipeline enforces linting.

## CI/CD Gotchas

- No CI config in repo — deployment is manual via Cloudflare Pages
- Sitemap generated automatically by `@astrojs/sitemap` — no manual maintenance
- Verify with `npm run build` before deploying — no automated checks

## Conventions

- **UI language**: Spanish (`lang="es"`)
- **Theme**: Dark (#000 bg, #A855F7 accent). Brand colors via CSS tokens only
- **Comments**: Minimal — only for non-obvious workarounds
- **Runtime**: 100% static — no JavaScript runtime
- **Config**: No Tailwind config file (v4 uses Vite plugin). No PostCSS.

## 🚫 Rules

- Do NOT add runtime JavaScript dependencies — site must stay 100% static
- Do NOT use Tailwind utility classes for brand colors — use `bg-bg`, `text-text-primary`, etc.
- Do NOT create test, lint, or typecheck scripts — none are configured
- Do NOT add PostCSS config or `tailwind.config.*` — Tailwind 4 uses the Vite plugin
- Do NOT edit `src/lib/release.ts` manually — run `npm run bump` instead
- Do NOT commit without running `npm run build` first
