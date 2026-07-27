# Turcanime Landing

Landing page para Turcanime (Android) y Turcanime Desktop. Sitio estático, sin JavaScript runtime.

## Stack

Astro 6 · Tailwind CSS 4 · Lucide · Fontsource (Inter + JetBrains Mono) · Node >= 22.12.0

## Setup

```bash
npm install
npm run dev
```

## Scripts

| Comando   | Descripción                              |
|-----------|------------------------------------------|
| `dev`     | Inicia servidor de desarrollo (localhost:4321) |
| `build`   | Compila el sitio estático a `dist/`      |
| `preview` | Previsualiza la build de producción      |
| `bump`    | Actualiza versión y URLs de descarga desde GitHub |

## Estructura

```
src/
  lib/          → Versión actual y URLs de descarga (release.ts)
  components/   → Hero, Features, Downloads, DownloadMenu, FAQ, Footer
  layouts/      → Layout.astro (SEO, meta, JSON-LD)
  pages/        → index.astro (página única)
  styles/       → global.css (Tailwind, tema, animaciones)
scripts/        → bump.mjs (actualización automática de versión)
public/         → favicon.webp, og-image.webp, robots.txt
```

## Convenciones

- Tema oscuro: fondo #000, acento #A855F7. Colores de marca con tokens CSS, no clases Tailwind.
- UI en español (lang="es")
- Sin runtime JavaScript — sitio 100% estático
- Comentarios solo para workarounds no obvios
