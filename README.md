# Turcanime Landing

Landing page para Turcanime (Android) y Turcanime Desktop. Sitio estático, sin framework JS: un script inline detecta el SO para el botón de descarga.

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

Test del bump: `node --test scripts/bump.test.mjs`.

## Estructura

```
src/
  lib/          → Versión y URLs (release.ts) + contenido FAQ compartido (faq.ts)
  assets/       → Arte fuente del OG (no se publica)
  components/   → Hero, Features, Downloads, DownloadMenu, FAQ, Footer
  layouts/      → Layout.astro (SEO, meta, JSON-LD)
  pages/        → index.astro (página única)
  styles/       → global.css (Tailwind, tema, animaciones)
scripts/        → bump.mjs (bump automático) + bump.test.mjs
public/         → favicon.png, og-image.jpg, robots.txt
```

## Convenciones

- Tema oscuro: fondo #000, acento #A855F7. Colores de marca con tokens CSS, no clases Tailwind.
- UI en español (lang="es")
- Sin framework JS (único script inline: detección de SO)
- Comentarios solo para workarounds no obvios
