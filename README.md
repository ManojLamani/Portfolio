# Manoj Lamani — Portfolio

Personal portfolio built with **Next.js** (App Router, static export), **Tailwind CSS** and **Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The static site is written to `out/`.

## Deploy

- **Vercel:** import the repository; Vercel detects Next.js and builds it automatically.
- **GitHub Pages:** `npm run deploy` builds with the `/Portfolio` base path and publishes `out/` to the `gh-pages` branch.

## Editing content

All text, projects, skills and open-source links live in [`src/data/portfolio.js`](src/data/portfolio.js).
