# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with Turbopack
npm run build      # Static export build (outputs to /out)
npm run lint       # Run Next.js ESLint
npm run deploy     # Build + deploy to GitHub Pages via gh-pages
```

Set up environment variables before running:
```bash
cp env.example .env.local
# Set PRESENTATION_PASSWORD and SESSION_EXPIRY in .env.local
```

## Architecture

This is a **Next.js 15 static site** (`output: "export"`) for a Korean drone company portfolio, deployed to GitHub Pages at `imdrone.site`.

### Key configuration
- Static export — no server-side runtime; API routes using `fs` run only at build time
- `basePath` and `assetPrefix` are set to `/imdroner.github.io` in production to match the GitHub Pages repo path
- Images use `unoptimized: true` (required for static export)
- `@google/model-viewer` is loaded via CDN `<script>` tag in the root layout (not via npm)

### Data layer (`/data`)
All site content lives in TypeScript files — no CMS or database:
- `general.ts` — company name, contacts, social links
- `projects.ts` — portfolio items with `Project` type (supports `video`, `video360`, `model` GLB paths)
- `products.ts`, `services.ts`, `blog.ts`, `team.ts`, `presentations.ts`, etc.

### Blog system (`/app/blog`, `/content/blog`)
Blog post metadata is in `data/blog.ts`. Actual content is MDX files in `content/blog/{id}.mdx`. The `[id]/page.tsx` reads MDX at build time via `fs.readFileSync` + `gray-matter` + `next-mdx-remote`. Custom MDX components are defined in `mdx-components.tsx`.

### UI components
Uses **shadcn/ui** (`components.json` configured). Components in `/components/ui` are shadcn primitives. Custom components are directly in `/components`.

### 3D & media
- `.glb` models served from `/public/models/` and rendered via `<model-viewer>` web component
- 360° video via `@egjs/react-view360` (`Video360Player.tsx`)
- Presentations use `Reveal.js` rendered inside React (`RevealPresentation.tsx`)

### Auth/protected content
Password-protected presentations: `POST /api/auth/verify` validates `PRESENTATION_PASSWORD` env var; session stored in `sessionStorage`. The `FloatingLockIcon` component (currently commented out in layout) triggers this flow.

### Adding content
- **New project**: add entry to `data/projects.ts` with a `Project` object
- **New blog post**: add metadata to `data/blog.ts` + create `content/blog/{id}.mdx`
- **New presentation**: add to `data/presentations.ts` + add content in `components/RevealPresentation.tsx`
