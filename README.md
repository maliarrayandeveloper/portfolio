# Portfolio — Muhammad Ali Arrayyan Bukhori

Redesigned to match a premium/editorial/playful design system (Tailwind CSS + Framer Motion + Lucide icons), built on Vite + React.

## Setup

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy that folder wherever you're hosting (Cloudflare Workers/Pages, Vercel, Netlify, etc).

## What changed in this version

- Added Tailwind CSS, Framer Motion, and lucide-react as dependencies — run `npm install` after pulling this update.
- All components rewritten from CSS Modules to Tailwind utility classes.
- Design tokens (colors, radius, shadows) live in `tailwind.config.js`.
- `src/data/projects.js` — project data is now data-driven; edit this file to add/update projects (no JSX editing needed).
- Removed the custom cursor tracking in `App.jsx` (kept UX standard/accessible).
- New `CTA.jsx` component replaces the old `Contact.jsx` as the closing section.
- `HowItWorks.jsx` renamed to `Process.jsx`.

## Editing content

- **Projects**: edit `src/data/projects.js`.
- **Colors/spacing**: edit `tailwind.config.js`.
- **Copy/text**: edit directly inside each component in `src/components/`.
