# Turcanime Landing

Landing page for **Turcanime** (Android) and **Turcanime Desktop** — anime streaming apps with no ads, no accounts, no limits.

- Android APK: [latest release](https://github.com/turcaman/turcanime/releases/latest)
- Desktop installers: [latest release](https://github.com/turcaman/turcanime-desktop/releases/latest)

Built with **Astro 6** + **Tailwind CSS 4**.

## Stack

| Layer       | Technology                               |
|-------------|------------------------------------------|
| Framework   | Astro 6 (`^6.2.1`)                       |
| Styling     | Tailwind CSS 4 (`^4.2.4`) via `@tailwindcss/vite` |
| Icons       | Lucide (`@lucide/astro` `^1.14.0`)       |
| Fonts       | Inter + JetBrains Mono (via Fontsource)  |
| Node        | >= 22.12.0                               |

## Requirements

- **Node.js** >= 22.12.0

## Setup

```bash
npm install
npm run dev       # Start dev server (localhost:4321)
```

## Available Scripts

| Script   | Command                      | Description                         |
|----------|------------------------------|-------------------------------------|
| `dev`    | `npm run dev`                | Start dev server (localhost:4321)   |
| `build`  | `npm run build`              | Build static site to `dist/`        |
| `preview`| `npm run preview`            | Preview production build locally    |
| `bump`   | `node scripts/bump.mjs`      | Fetch latest GitHub releases → update version & download URLs |

## Project Structure

```
src/
  lib/          → release.ts (current version + download URLs for Android + Desktop)
  components/   → Hero, Features, Downloads, DownloadMenu, FAQ, Footer
  layouts/      → Layout.astro (SEO, OG meta, JSON-LD, lang="es")
  pages/        → index.astro (single page: Hero + Features + Downloads + FAQ)
  styles/       → global.css (Tailwind import, @theme, custom animations)
scripts/        → bump.mjs (automated version bump from GitHub releases)
public/         → favicon.webp, og-image.webp, robots.txt, sitemap.xml
```

## Features

- **Single-page landing** in Spanish with Hero, Features, Downloads, FAQ, and Footer
- **Animated Hero** with kanji glitch effect (解), floating particles, and pulsing glow
- **Multi-platform downloads**: Android (APK), Windows (.exe), Linux (.deb/.rpm), macOS (coming soon)
- **Smart OS-detect button** offering the correct direct download for the visitor's platform
- **Custom dark theme** with CSS tokens (`bg-bg`, `text-text-primary`, etc.)
- **Self-hosted fonts** (Inter + JetBrains Mono) via Fontsource
- **Complete SEO**: JSON-LD (SoftwareApplication ×2 + WebSite), Open Graph, Twitter Card, Google Site Verification, dynamic canonical URL
- **Version management**: `scripts/bump.mjs` fetches latest releases from both GitHub repos, extracts assets, and updates `src/lib/release.ts` automatically
- **Static sitemap** in `public/sitemap.xml`
- **Subtle scanlines overlay** across the entire site (CSS fixed overlay)
- **Reduced motion** respected in animations

## Version Management

Version and download URLs are centralized in `src/lib/release.ts`:

```ts
export const release = {
  android: {
    version: "1.10.7",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.10.7/turcanime-1.10.7.apk",
  },
  desktop: {
    version: "1.0.6",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.0.6/Turcanime-1.0.6-win-x64-setup.exe",
    },
    linux: {
      debUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.0.6/Turcanime-1.0.6-linux-x64.deb",
      rpmUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.0.6/Turcanime-1.0.6-linux-x64.rpm",
    },
    macos: {
      available: false,
    },
  },
} as const;
```

To update to the latest versions published on GitHub:

```bash
npm run bump
```

This fetches the latest releases from:
- `turcaman/turcanime` → finds `.apk` asset
- `turcaman/turcanime-desktop` → finds `.exe`, `.deb`, `.rpm` assets

Updates `release.ts` and creates an automatic commit with a message like `chore: bump version to android X.Y.Z / desktop A.B.C`.

## Deployment

Builds to `dist/` as a fully static site (no JavaScript runtime).

- **Host**: Cloudflare Pages
- **Domain**: `turcanime.pages.dev`
- **Output**: `dist/` (static HTML + assets)
- **Sitemap**: `public/sitemap.xml` committed to repo (no plugin)

## Conventions

- Entire site in **Spanish** (`lang="es"`)
- **Dark theme**: black background (`#000`) + purple accent (`#A855F7`)
- **No Tailwind classes for brand colors** — use CSS tokens: `bg-bg`, `text-text-primary`, `text-text-secondary`, `bg-surface`, `border-border`
- No CI, pre-commit hooks, or formatters
- No tests, lints, or typechecks configured
- **No JavaScript runtime** — 100% static site
- Minimal comments — only for non-obvious workarounds