# atypicalesper.github.io

Personal portfolio of **Tarun Singh** — Software Engineer (Backend & Full-Stack) — [atypicalesper.github.io](https://atypicalesper.github.io)

An editorial, minimalist portfolio: an oversized display-serif hero, a light "paper" default theme with curated dark themes, and a hidden drum kit you stumble into rather than find in a menu.

## Stack

- **Next.js 15** — App Router, static export (`output: 'export'`)
- **GSAP** — page transitions, staggered lists, background orbs, custom cursor
- **CSS** — no UI library, hand-rolled styles in `src/styles/main.css`
- **Fonts** — Fraunces (editorial display) + Work Sans (body)

## Theming

A single light editorial theme plus three curated dark themes, switched from the picker at bottom-right (persisted to `localStorage`):

| Theme | Mood |
|---|---|
| `paper` | light · editorial (default) |
| `noir` | midnight violet |
| `midnight` | deep ocean blue |
| `ember` | warm amber dusk |

Every surface is driven by CSS custom properties (`--accent`, `--bg`, `--text`, `--surface`, `--border`, `--shadow`), so a theme is just one token block.

## Pages

| Route | Description |
|---|---|
| `/` | Editorial hero, at-a-glance stats, and selected work |
| `/work` | AI systems, projects, and client work |
| `/resume` | Experience, skills, and education |
| `/bonus` | A keyboard-playable drum kit — **easter egg**: not linked in the nav; reach it by clicking the floating cube |

## The hidden drum kit

`/bonus` is intentionally absent from the navbar. The drifting wireframe cube in the corner is the portal — a click (not a drag) drops you into the kit. Play the pads by tapping them or with `W A S D J K L`.

## Dev

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` trigger a GitHub Actions workflow that builds and deploys to GitHub Pages via `actions/deploy-pages`.
