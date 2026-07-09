# Turcaniem Landing

Landing page for [Turcanime](https://github.com/turcaman/turcanime) — built with **Astro** + **Tailwind CSS**.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 6 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide |

## Setup

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  components/     → UI components (Hero, Features, Footer, DownloadButton)
  layouts/        → Base HTML layout with SEO/OG meta
  pages/          → Routes (index.astro)
  styles/         → Global CSS with custom theme and animations
public/           → Static assets (favicon, robots.txt, sitemap)
```

## Available Scripts

```bash
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build static site to dist/
npm run preview      # Preview production build locally
```

## Deployment

Builds to `dist/` as a fully static site. Deployed on Cloudflare Pages.
