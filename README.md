# Eyoul — Cloud & Solutions Architect Portfolio

A production-ready personal portfolio built with **React, TypeScript, Vite and Tailwind CSS v4**, positioned around cloud/solutions architecture (AWS, Terraform, Docker, Django, React, PostgreSQL).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

Requires Node.js 18+.

## Project structure

```
src/
├── components/     Reusable UI (Navbar, Hero, ArchitectureDiagram, cards, etc.)
├── pages/          Home, Projects, FCMS case study, Architecture, About, Contact
├── data/           Content — edit these files to update the site
│   ├── site.ts           name, role, email, LinkedIn, GitHub, resume path
│   ├── skills.ts          categorized skills
│   ├── projects.ts        project list (FCMS is the primary/flagship project)
│   ├── experience.ts       employment history
│   └── certifications.ts   certifications held
└── index.css        Design tokens (colors, type, spacing) and base styles
```

The site is data-driven: to update content, edit the files in `src/data/` rather than the components or pages themselves.

## Things you still need to fill in

Search the codebase for `[ADD YOUR INFORMATION]` / `[ADD ...]` placeholders — nothing was fabricated, so these are left for you to complete:

- **`src/data/projects.ts`** — add a `githubUrl` to the FCMS entry if/when the repository is public
- **Domain/SEO URLs** — `index.html`, `public/robots.txt` and `public/sitemap.xml` currently use `https://eyoul.dev/` as a placeholder domain; update once you have a real one.
- **Open Graph image** — `index.html` references `/og-image.png`; add a 1200×630 image at `public/og-image.png` for link previews (or remove the tag).

Already filled in: real contact details (`src/data/site.ts`), AWS/Cisco certifications (`src/data/certifications.ts`), education (`src/data/education.ts`), and `public/resume.pdf` (a Canadian-style resume — this includes your full banking career history, since a resume should be complete; the site itself intentionally only tells the cloud/software story through skills, certifications and projects).

## Deploying

The site builds to a static `dist/` folder and can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, GitHub Pages, etc.). Since this uses client-side routing (`react-router-dom`), configure your host to rewrite all routes to `index.html` (a "SPA fallback").

## Notes on design

- Dark enterprise palette, Inter for body copy, JetBrains Mono for technical labels/tags
- No skill percentage bars, no fake stats, no stock photography — content and architecture diagrams carry the visual weight
- Respects `prefers-reduced-motion`; all interactive elements are keyboard accessible with visible focus states
