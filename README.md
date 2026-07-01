# Muhammad Shumail Affan — Portfolio Website

A production-ready, JSON-driven portfolio built with React, Tailwind CSS, and React Router.

## Features

- **JSON-driven architecture** — All content lives in `src/data/*.json`. Update JSON to refresh the site.
- **11 pages** — Home, About, Skills, Experience, Projects, Project Detail, Certifications, Leadership, Achievements, Contact, 404
- **Dark / Light mode** with persistent preference
- **Global search** (⌘K / Ctrl+K)
- **Project filtering** by category and search
- **GitHub integration** — Repository links, stats, and README URLs from live API data
- **Scroll progress bar**, back-to-top, loading animation
- **Responsive**, mobile-first, accessible UI with glassmorphism and gradient accents
- **Code splitting** via React.lazy for performance

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router v7
- Framer Motion
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── data/                  # JSON source of truth
│   ├── personal.json
│   ├── projects.json
│   ├── experience.json
│   ├── skills.json
│   ├── github.json
│   └── index.js           # Data loader & utilities
├── components/
│   ├── common/            # Search, theme, scroll UI
│   ├── layout/            # Navbar, Footer, Layout
│   ├── projects/          # ProjectCard
│   └── ui/                # Button, Card, Badge, etc.
├── pages/                 # Route pages
├── context/               # ThemeContext
└── hooks/                 # useScrollProgress, useInView
```

## Updating Content

Edit the JSON files in `src/data/`. No application code changes needed for:

- Personal info, experience, education
- Projects (add `cover_image`, `live_demo`, `screenshots` when available)
- Skills, certifications, achievements
- GitHub repositories

### Placeholders

Fields marked `[Placeholder: ...]` in JSON indicate missing data. Replace with real content when available:

- Profile photo → `portfolio-assets.json`
- Resume PDF → set `resume_file` and `resume_download_enabled: true`
- Project cover images, screenshots, architecture details

## Deployment

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages. For GitHub Pages, set `base` in `vite.config.js`.

## License

Private portfolio — all rights reserved.
