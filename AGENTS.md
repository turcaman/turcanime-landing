# AGENTS.md

## Stack
- **Astro 6** static site, output to `dist/`
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (no PostCSS config, no `tailwind.config.*`)
- **Lucide** icons (`@lucide/astro` — import from `lucide-astro` package)
- **Static `sitemap.xml`** in `public/` — no sitemap plugin dependency
- Node >= **22.12.0**

## Commands
| Script | Command |
|--------|---------|
| dev | `npm run dev` (localhost:4321) |
| build | `npm run build` (output: `dist/`) |
| preview | `npm run preview` |

No test, lint, or typecheck scripts exist. Generated types live in `.astro/types.d.ts` (gitignored) and are auto-picked up by `tsconfig.json`.

## Project structure
```
src/
  components/   → Hero, Features, FAQ, Footer, DownloadButton
  layouts/      → Layout.astro (SEO/OG meta, lang="es")
  pages/        → index.astro (single page)
  styles/       → global.css (Tailwind import + @theme + custom keyframes)
public/         → favicon.webp, og-image.webp, robots.txt, sitemap.xml
```

## Conventions
- Site is entirely in **Spanish** (`lang="es"` on `<html>`)
- Custom dark theme defined via `@theme` in `global.css` (no Tailwind classes for brand colors; use `--color-*` tokens like `bg-bg`, `text-text-primary`, `text-text-secondary`)
- SEO/structured data is in `Layout.astro` (SoftwareApplication + WebSite schema, OG tags, Twitter card)
- No CI, no pre-commit hooks, no formatter config
- Deployed on **Cloudflare Pages**

## Generated / gitignored
- `.astro/` (generated types), `dist/` (build output), `.codegraph/` (local knowledge graph) — all gitignored
