# deslop-web

Source for [deslop.dev](https://deslop.dev) — the landing page for
[Ivy-Apps/deslop](https://github.com/Ivy-Apps/deslop).

The site is a single page that explains what Deslop is and links to the repo,
which holds the documentation. It deliberately does not restate the README; see
[`docs/adr/0001-thin-front-door.md`](./docs/adr/0001-thin-front-door.md) for why,
and [`CONTEXT.md`](./CONTEXT.md) for the terminology the copy uses.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run storybook    # http://localhost:6006
```

## Before pushing

```bash
npm run check        # typecheck, deslop, lint, build, build-storybook
npm run fix          # deslop --fix, then biome --write
```

The site enforces its own architecture with Deslop — the rules live in
[`deslop/rules/`](./deslop/rules/). Pages must delegate to a `*View` component,
features may not import each other, the design system may not import from the
app, and every `*View` needs a Storybook story.

## Deploying

Hosted on Vercel with the default Next.js settings: install `npm install`, build
`next build`, output managed by Next.js. There are no environment variables and
no runtime secrets — every page is statically rendered.
