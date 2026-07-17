# AGENTS.md

Instructions for AI coding agents working on this project. Complement to README.md — read that first for project overview.

## Quick Commands

| Script   | Command                      | Description                         |
|----------|------------------------------|-------------------------------------|
| dev      | `npm run dev`                | Start dev server (localhost:4321)   |
| build    | `npm run build`              | Build static site to `dist/`        |
| preview  | `npm run preview`            | Preview production build locally    |
| bump     | `node scripts/bump.mjs`      | Fetch latest GitHub releases → update version & download URLs |

No test, lint, or typecheck scripts exist. Generated types live in `.astro/types.d.ts` (gitignored) and are auto-picked up by `tsconfig.json`.

## Project Overview

**Astro 6** static site. Multi-platform landing page for Android + Desktop apps.

- **Output**: `dist/` (fully static, no JS runtime)
- **Styling**: Tailwind CSS 4 via `@tailwindcss/vite` plugin (no PostCSS, no `tailwind.config.*`)
- **Icons**: Lucide (`@lucide/astro`)
- **Fonts**: Self-hosted via Fontsource (Inter + JetBrains Mono)
- **Sitemap**: Static `sitemap.xml` in `public/` — no plugin dependency
- **Node**: >= 22.12.0
- **Language**: Spanish (`lang="es"` on `<html>`)

## Key Files Reference

| Purpose                            | File                                                  |
|------------------------------------|-------------------------------------------------------|
| Version + download URLs (Android + Desktop) | `src/lib/release.ts`                                  |
| Automated version bump script      | `scripts/bump.mjs`                                    |
| SEO, OG, JSON-LD, canonical        | `src/layouts/Layout.astro`                            |
| Hero (kanji glitch, particles)     | `src/components/Hero.astro`                           |
| Features grid (3 columns)          | `src/components/Features.astro`                       |
| Multi-platform download cards      | `src/components/Downloads.astro`                      |
| OS-aware download button           | `src/components/DownloadMenu.astro`                   |
| FAQ accordion                      | `src/components/FAQ.astro`                            |
| Footer (GitHub links)              | `src/components/Footer.astro`                         |
| Design tokens, animations, scanlines | `src/styles/global.css`                              |
| Single page composition            | `src/pages/index.astro`                               |

## Architecture

### Version Management
`src/lib/release.ts` exports a `release` const with:
- `android: { version, apkUrl }`
- `desktop: { version, windows: { exeUrl }, linux: { debUrl, rpmUrl } }`

Updated by `scripts/bump.mjs` which:
1. Fetches latest release from `turcaman/turcanime` → extracts APK asset
2. Fetches latest release from `turcaman/turcanime-desktop` → extracts `.exe`, `.deb`, `.rpm` assets
3. Writes `release.ts` and commits automatically

### SEO / Structured Data (Layout.astro)
- **SoftwareApplication** ×2: Android app + Desktop app (with version + downloadUrl)
- **WebSite**: landing page metadata
- **Open Graph**: title, description, image, type, url, site_name
- **Twitter Card**: summary_large_image
- **Google Site Verification**: meta tag
- **Canonical URL**: dynamic via `Astro.url`

### Animations & Visual Effects (global.css)
- **CSS custom properties** (`@theme`): colors, fonts — used via `bg-bg`, `text-text-primary`, etc.
- **Component classes** (`@layer components`): `.btn-primary`, `.card-feature`
- **Utilities** (`@layer utilities`):
  - `glitch` keyframe (dual-layer red + purple offset)
  - `glow-pulse` (purple glow)
  - `particle-float` (rising particles in Hero)
  - `.kanji-glitch` (pseudo-element glitch on 解 kanji)
  - `.scanlines` (fixed overlay with repeating purple-tinted lines on `<body>`)
- **Reduced motion** respected via `@media (prefers-reduced-motion: reduce)`

## Conventions

- **Spanish UI** — all user-facing strings in Spanish
- **Dark theme** — Black background (`--color-bg: #000`) with purple accent (`--color-primary: #A855F7`)
- **No Tailwind classes for brand colors** — use CSS tokens: `bg-bg`, `text-text-primary`, `text-text-secondary`, `bg-surface`, `border-border`
- **No CI, no pre-commit hooks, no formatter config**
- **No tests, no lint, no typecheck scripts**
- **Deployed on Cloudflare Pages** (domain: `turcanime.pages.dev`)
- **Static sitemap.xml** in `public/` — committed to git
- **Minimal comments** — only for non-obvious workarounds

## Component Details

- **Hero.astro**: Full-screen hero with kanji glitch effect (解), particle animation, title, tagline, DownloadMenu, version badge
- **Features.astro**: 3-column grid with Lucide icons (Play, Search, Shield), `card-feature` styling
- **Downloads.astro**: 3-platform cards (Android, Windows, Linux) with version badges and download buttons
- **DownloadMenu.astro**: OS-detecting primary button (Android/Windows/Linux → direct download; others → anchor to #descargas)
- **FAQ.astro**: `<details>` elements with `+`/`×` rotate toggle, `card-feature` styling
- **Footer.astro**: Two GitHub links (Android + Desktop) centered, tagline

## Generated / Gitignored

- `.astro/` (generated types), `dist/` (build output), `.codegraph/` (local knowledge graph), `node_modules/` — all gitignored