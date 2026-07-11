# AGENTS.md

## Stack
- **Astro 6** (`^6.2.1`) — static site, output to `dist/`
- **Tailwind CSS 4** (`^4.2.4`) via `@tailwindcss/vite` plugin (no PostCSS config, no `tailwind.config.*`)
- **Lucide** icons (`@lucide/astro` `^1.14.0`)
- **Fontsource** for self-hosted fonts: `@fontsource/inter` `^5.2.5`, `@fontsource/jetbrains-mono` `^5.2.5`
- **Static `sitemap.xml`** in `public/` — no sitemap plugin dependency
- Node >= **22.12.0**

## Commands
| Script   | Command                      |
|----------|------------------------------|
| dev      | `npm run dev` (localhost:4321) |
| build    | `npm run build` (output: `dist/`) |
| preview  | `npm run preview`            |
| bump     | `node scripts/bump.mjs`      |

No test, lint, or typecheck scripts exist. Generated types live in `.astro/types.d.ts` (gitignored) and are auto-picked up by `tsconfig.json`.

## Project structure
```
src/
  lib/          → release.ts (version + APK URL config)
  components/   → Hero, Features, FAQ, Footer, DownloadButton
  layouts/      → Layout.astro (SEO/OG meta, lang="es")
  pages/        → index.astro (single page — Hero + Features + FAQ + Footer)
  styles/       → global.css (Tailwind import + @theme + custom animations)
scripts/        → bump.mjs (fetch latest GitHub release → update release.ts)
public/         → favicon.webp, og-image.webp, robots.txt, sitemap.xml
```

## Conventions
- Site is entirely in **Spanish** (`lang="es"` on `<html>`)
- Custom dark theme via `@theme` in `global.css`:
  - Color tokens: `--color-primary` (#A855F7), `--color-bg` (#000), `--color-surface` (#0A0A0A), `--color-surface-elevated` (#111), `--color-border` (#262626), `--color-primary-btn` (#7C3AED), `--color-text-primary` (#FFF), `--color-text-secondary` (#BCBCBC)
  - Font tokens: `--font-sans` (Inter), `--font-mono` (JetBrains Mono)
  - No Tailwind classes for brand colors; use tokens like `bg-bg`, `text-text-primary`, `text-text-secondary`
- CSS component classes in `@layer components`: `.btn-primary` (purple button with focus-visible ring), `.card-feature` (elevated card for features/FAQ)
- CSS custom animations in `@layer utilities`:
  - `glitch` (2.8s/2.2s dual-layer red + purple offset)
  - `glow-pulse` (2s purple glow keyframe)
  - `particle-float` (rising particles in Hero)
  - `.kanji-glitch` (pseudo-element glitch on the 解 kanji)
  - `.scanlines` (fixed overlay with repeating purple-tinted lines on `<body>`)
- **Version management**: `src/lib/release.ts` exports a `release` const with `version` and `apkUrl`. Updated by `scripts/bump.mjs` which fetches the latest GitHub release from `turcaman/turcanime`, extracts the APK asset URL, writes the file, and commits automatically.
- **Component details**:
  - `Hero.astro`: Full-screen hero with kanji glitch effect, particle animation, title, tagline, DownloadButton, and version badge
  - `Features.astro`: 3-column grid with Lucide icons (Play, Search, Shield)
  - `FAQ.astro`: `<details>` elements with `+`/`×` rotate toggle, `card-feature` styling
  - `Footer.astro`: Single GitHub link centered in the footer
  - `DownloadButton.astro`: Downloads the APK from `release.apkUrl`
- SEO/structured data is in `Layout.astro`:
  - SoftwareApplication + WebSite JSON-LD schema
  - OG tags (title, description, image, type, url)
  - Twitter card (summary_large_image)
  - Google Site Verification meta tag (`inisPcLQqbRi1tEyPP_nFq2EmMI54_cXhb_QIFlcTaw`)
  - Canonical URL uses `Astro.url` (dynamic)
- No CI, no pre-commit hooks, no formatter config
- Deployed on **Cloudflare Pages** (domain: `turcanime.pages.dev`)

## Generated / gitignored
- `.astro/` (generated types), `dist/` (build output), `.codegraph/` (local knowledge graph), `node_modules/` — all gitignored
