# atypicalesper.github.io

Personal portfolio of **Tarun Singh** — [atypicalesper.github.io](https://atypicalesper.github.io)

## Stack

- **Next.js 15** — App Router, static export
- **GSAP** — page transitions, staggered lists, background orbs, custom cursor
- **CSS** — no UI library, hand-rolled styles

## Pages

| Route | Description |
|---|---|
| `/` | Intro |
| `/about` | About |
| `/work` | Personal projects + client work |
| `/experience` | Work history, skills, education |
| `/drumkit` | Drum machine (bonus) |

## Dev

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` trigger a GitHub Actions workflow that builds and deploys to GitHub Pages via `actions/deploy-pages`.
