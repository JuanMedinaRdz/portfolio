# Juan Carlos Medina — Portfolio

Personal portfolio site built with Next.js 16 (App Router) and TypeScript.

**Live:** [portfolio-juan-carlos-medina.vercel.app](https://portfolio-juan-carlos-medina.vercel.app)

## Tech stack

| Layer       | Tools                                                |
| ----------- | ---------------------------------------------------- |
| Framework   | Next.js 16 (App Router), React 19, TypeScript        |
| Styling     | TailwindCSS v4, custom design tokens                 |
| Animation   | Framer Motion                                        |
| Theming     | next-themes (dark / light)                           |
| Icons       | lucide-react + custom brand icons                    |
| Deploy      | Vercel                                               |

## Project structure

```
src/
├─ app/                  # App Router pages, layout, SEO routes
│  ├─ page.tsx           # Home (composes all sections)
│  ├─ layout.tsx
│  ├─ globals.css
│  ├─ sitemap.ts
│  └─ robots.ts
├─ components/
│  ├─ ui/                # Base primitives (Button, Card, Badge, …)
│  ├─ layout/            # Navbar, Footer, ThemeProvider, Reveal
│  ├─ sections/          # Hero, About, Skills, Experience, Projects, Contact
│  └─ icons/             # Brand icons
├─ content/              # Single source of truth for site data
│  ├─ site.config.ts     # Name, role, social links, metadata
│  ├─ projects.ts        # Project cards
│  ├─ experience.ts
│  └─ skills.ts
├─ lib/                  # Utilities (cn, etc.)
└─ types/                # Shared TypeScript types
```

All site content lives in [`src/content/`](src/content) — update those files to rebrand without touching components.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

| Command              | What it does                       |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Start the dev server               |
| `npm run build`      | Production build                   |
| `npm run start`      | Run the production build locally   |
| `npm run lint`       | ESLint                             |
| `npm run lint:fix`   | ESLint with autofix                |
| `npm run format`     | Prettier write                     |
| `npm run typecheck`  | `tsc --noEmit`                     |

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic production deploy.

## Contact

- **Email:** jn_carlos.medina@outlook.com
- **GitHub:** [@JuanMedinaRdz](https://github.com/JuanMedinaRdz)
- **LinkedIn:** [Juan Carlos Medina](https://www.linkedin.com/in/juan-carlos-medina-95a939347/)
