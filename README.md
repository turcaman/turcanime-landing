# Turcanime Landing

Landing page for [Turcanime](https://github.com/turcaman/turcanime) — la app de anime para Android sin anuncios, sin cuentas, sin límites.

Built with **Astro 6** + **Tailwind CSS 4**.

## Stack

| Layer       | Technology                               |
|-------------|------------------------------------------|
| Framework   | Astro 6 (`^6.2.1`)                       |
| Styling     | Tailwind CSS 4 (`^4.2.4`)                |
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
| `bump`   | `node scripts/bump.mjs`      | Fetch latest GitHub release → update version & APK URL |

## Project Structure

```
src/
  lib/          → release.ts (current version + APK download URL)
  components/   → Hero, Features, FAQ, Footer, DownloadButton
  layouts/      → Layout.astro (SEO, OG meta, JSON-LD, lang="es")
  pages/        → index.astro (single page: Hero + Features + FAQ + Footer)
  styles/       → global.css (Tailwind import, @theme, custom animations)
scripts/        → bump.mjs (automated version bump from GitHub releases)
public/         → favicon.webp, og-image.webp, robots.txt, sitemap.xml
```

## Features

- **Single-page landing** en español con Hero, Features, FAQ y Footer
- **Hero animado** con efecto glitch en kanji 解, partículas flotantes y glow pulsante
- **Tema oscuro** personalizado con tokens CSS (`bg-bg`, `text-text-primary`, etc.)
- **Fuentes auto-hospedadas** (Inter + JetBrains Mono) via Fontsource
- **SEO completo**: JSON-LD (SoftwareApplication + WebSite), Open Graph, Twitter Card, Google Site Verification, canonical URL
- **Version management**: `scripts/bump.mjs` obtiene el último release de GitHub, extrae el APK y actualiza `src/lib/release.ts` automáticamente
- **Sitemap estático** en `public/sitemap.xml`

## Version Management

La versión y URL de descarga se centralizan en `src/lib/release.ts`:

```ts
export const release = {
  version: "1.10.5",
  apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.10.5/turcanime-1.10.5.apk",
} as const;
```

Para actualizar a la última versión publicada en GitHub:

```bash
npm run bump
```

Esto obtiene el release más reciente del repositorio `turcaman/turcanime`, busca el asset `.apk`, actualiza `release.ts` y crea un commit automático.

## Deployment

Builds to `dist/` as a fully static site.

- **Host**: Cloudflare Pages
- **Domain**: `turcanime.pages.dev`
- **Output**: `dist/` (static HTML + assets)

## Conventions

- Todo el sitio está en **español** (`lang="es"`)
- Sin tests, lints ni typechecks configurados
- Sin CI, pre-commit hooks ni formatters
- **Sin JavaScript runtime** — sitio 100% estático
