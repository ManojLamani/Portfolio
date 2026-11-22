# Manoj Lamani — Portfolio

Personal portfolio of **Manoj Chandrappa Lamani**, Full-Stack Developer and AI/ML engineer from Bengaluru. It showcases my projects, tech stack and open-source contributions.

Built with **Next.js**, **Tailwind CSS** and **Framer Motion**, exported as a fully static site.

- **GitHub:** [github.com/ManojLamani](https://github.com/ManojLamani)
- **LinkedIn:** [linkedin.com/in/manoj-lamani-4aa866325](https://www.linkedin.com/in/manoj-lamani-4aa866325)
- **Email:** [manojlamani4996@gmail.com](mailto:manojlamani4996@gmail.com)

---

## Features

- **Hero** — letter-by-letter name reveal, typed role carousel, and an orbiting ring of tech icons (click any icon or the centre to jump to the tech stack), plus animated stats.
- **About** — summary, education card and highlights.
- **Tech Stack** — two scrolling logo rows and grouped skills (languages, frontend, backend, databases, AI & ML, cloud & tools, core CS).
- **Projects** — filterable grid (All / AI & ML / Full-Stack / Data) with generated cover art, 3D tilt on hover and a details modal with highlights, stack and links.
- **Open Source** — upstream pull requests with merged/open status.
- **Contact** — copy-to-clipboard email and a form that opens the visitor's mail app with the message filled in.
- Cursor-following glow, scroll progress bar, floating navbar with active-section highlight, responsive layout and `prefers-reduced-motion` support.

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, static export), React 19 |
| Styling | Tailwind CSS 3, `next/font` (Inter, Space Grotesk, JetBrains Mono) |
| Animation | Framer Motion, react-type-animation |
| Icons | react-icons (Simple Icons + Feather) |
| Tooling | ESLint 9 |
| Hosting | Vercel, GitHub Pages |

## Getting Started

**Requirements:** Node.js 20.9 or newer and npm.

```bash
git clone https://github.com/ManojLamani/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server on port 3000 |
| `npm run build` | Build the static site into `out/` |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build with the `/Portfolio` base path and publish `out/` to the `gh-pages` branch |

## Project Structure

```
src/
├── app/
│   ├── layout.jsx        # Root layout: fonts, page metadata
│   ├── page.jsx          # Home page
│   ├── globals.css       # Tailwind layers and shared styles
│   └── icon.svg          # Favicon
├── components/
│   ├── Portfolio.jsx     # Client entry that renders every section
│   ├── Hero.jsx, Orbit.jsx, About.jsx, TechStack.jsx,
│   │   Projects.jsx, ProjectCover.jsx, ProjectModal.jsx,
│   │   OpenSource.jsx, Contact.jsx, Footer.jsx,
│   │   Navbar.jsx, Background.jsx, ScrollProgress.jsx
│   └── ui/               # Reusable pieces: Reveal, SectionHeading, Spotlight,
│                         # Magnetic, CountUp, TechIcon, motion presets
└── data/
    └── portfolio.js      # All site content
```

## Editing Content

Everything shown on the site lives in [`src/data/portfolio.js`](src/data/portfolio.js):

- `profile` — name, roles, location, links, about text
- `stats`, `education`, `achievements`
- `skillGroups` and `marquee` — tech stack sections
- `projects` — title, description, highlights, stack, category, GitHub and live links
- `openSource` — organizations and pull requests

To show an icon for a new technology, add it to the map in [`src/components/ui/TechIcon.jsx`](src/components/ui/TechIcon.jsx).

## Deployment

The site is a static export (`output: 'export'` in [`next.config.js`](next.config.js)), so it can be hosted anywhere.

### Vercel

Import the repository at [vercel.com/new](https://vercel.com/new). [`vercel.json`](vercel.json) sets the framework to Next.js, and every push to `main` redeploys automatically.

### GitHub Pages

```bash
npm run deploy
```

This builds with `GITHUB_PAGES=true` (base path `/Portfolio`), adds `.nojekyll` so the `_next/` folder is served, and pushes `out/` to the `gh-pages` branch.
