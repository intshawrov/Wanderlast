<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wanderlast

Single-package Next.js 16.4.3 app (App Router, React 19.3). No tests, no CI; primary app code lives in `src/app/page.tsx` (currently the create-next-app scaffold) with pre-installed shadcn/ui components in `src/components/ui/`.

## Commands

- `npm run dev` / `npm run build` / `npm run lint`
- No typecheck script: run `npx tsc --noEmit` explicitly before finishing changes.
- No test runner or CI exists — don't assume one.

## Gotchas

- **The UI kit is shadcn's `base-nova` style, which uses Base UI (`@base-ui/react`) primitives, not Radix.** Component props/events differ from classic shadcn (e.g. no `asChild`; different open/onOpenChange naming). Read the component in `src/components/ui/` before using it.
- `cn` comes from the `cn` npm package in these components (though `components.json` aliases `@/lib/utils`).
- Tailwind v4 with CSS-first config: no `tailwind.config.js`; theme tokens live in `@theme inline` in `src/app/globals.css` (which also imports `shadcn/tailwind.css`). Tailwind is wired through a Turbopack rule in `next.config.ts` — don't add a PostCSS config.
- React Compiler and `cacheComponents` are enabled. Follow current Next 16 cacheComponents semantics (async request APIs, predictable cache boundaries) per the docs in `node_modules/next/dist/docs/`.
- Path alias: `@/*` → `src/*`.
- `components.json` uses the shadcn CLI (`npx shadcn add ...`); components below `src/components/ui/` are generated — prefer editing app code over hand-modifying them.

