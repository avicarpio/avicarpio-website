# avicarpio.com

My personal site: a running log of what I make, my portfolio and a bit about me. It's a static
Next.js site (`output: 'export'`), built into `out/`.

- `/`: the home page. A neutral, editorial look: Geist, with Instrument Serif for accents.
- `/cominggames`: the page for Coming Games, in the app's own colours.

## Adding something new

Everything on the home page's log comes from [`content/log.ts`](content/log.ts). To add a new
project or release, add an entry **at the top** of the `log` array:

```ts
{
  slug: "my-thing",
  date: "2026-11",            // when it went out
  kind: "Android app",        // a short label
  title: "My thing",
  tagline: "One line that says why it matters",
  summary: "Two or three sentences.",
  tech: ["Kotlin"],
  links: [{ label: "Visit", href: "https://…" }],
  color: "#6aa8ff",           // its accent: the dot and the bullets
  media: { image: "/log/my-thing/cover.webp", alt: "…" },  // or video + poster
  featured: true,             // shown large, with its media
},
```

The newest entry is shown at the top of the page as **Latest**; the rest are grouped by year.
Images and videos go in `public/log/<slug>/`.

## Commands

```bash
pnpm dev        # dev server
pnpm build      # static build into out/
pnpm typecheck
pnpm lint
```
