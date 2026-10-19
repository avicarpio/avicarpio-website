/**
 * The log: everything I've shipped, newest first. It is the portfolio and the
 * changelog at once, so adding something new is adding an entry at the top.
 *
 * - date: "YYYY-MM" (or "YYYY-MM-DD"), when it went out
 * - kind: a short label for what it is
 * - color: the project's own accent, used for its dot and highlights
 * - media: a cover image, or a short muted loop with a poster, shown on featured entries
 * - featured: shown large, with its media
 */
export type LogLink = { label: string; href: string }

export type LogEntry = {
  slug: string
  date: string
  kind: string
  title: string
  tagline: string
  summary: string
  highlights?: string[]
  tech: string[]
  links: LogLink[]
  color: string
  media?: { image?: string; video?: string; poster?: string; alt: string }
  icon?: string
  /** who covered it: a name, or a name with a link */
  press?: (string | LogLink)[]
  stars?: number
  featured?: boolean
}

const gh = (repo: string) => `https://github.com/avicarpio/${repo}`

export const log: LogEntry[] = [
  {
    slug: "oncodata",
    date: "2026-10",
    kind: "Data website",
    title: "oncodata.info",
    tagline: "The world's cancer statistics, explained for everyone",
    summary:
      "140 scroll-driven, animated stories built only on official figures: GLOBOCAN (WHO), SEER (US National Cancer Institute), cancer registries, ClinicalTrials.gov and NIH. Every major cancer, the rare ones and their types, in English, Spanish and Catalan. Made with nurse Yaiza Richarte Muñoz, and with Claude Code as a pair programmer.",
    highlights: [
      "Every sentence is written from the data, and checked in three languages",
      "A GitHub Action refreshes every number from its source each month",
      "Particles, scroll-driven charts and 3D anatomy, all in the browser",
    ],
    tech: ["Vite", "GSAP", "Three.js", "Canvas", "Python", "Cloudflare Pages"],
    links: [
      { label: "Visit oncodata.info", href: "https://oncodata.info" },
      {
        label: "Read the story",
        href: "https://medium.com/@avicarpio/i-turned-the-worlds-cancer-statistics-into-something-anyone-can-read-20ed670c5742",
      },
    ],
    color: "#6aa8ff",
    media: {
      video: "/log/oncodata/loop.mp4",
      poster: "/log/oncodata/poster.webp",
      image: "/log/oncodata/cover.webp",
      alt: "oncodata: the five most common cancers as bars of dots, with the deaths lit in orange",
    },
    featured: true,
  },
  {
    slug: "coming-games",
    date: "2026-10",
    kind: "Android app",
    title: "Coming Games",
    tagline: "Never miss a release day",
    summary:
      "An app to follow every upcoming game on PlayStation, Xbox, Nintendo and PC, with reminders a week before, the day before and on launch day. Built from scratch and published on Google Play.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "Paging", "Cloudflare Workers"],
    links: [
      { label: "Discover the app", href: "/cominggames" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.congobill.cominggames",
      },
    ],
    color: "#ff5b6e",
    icon: "/cominggames/icon-v2.png",
    media: {
      image: "/cominggames/feature-graphic-v2.png",
      alt: "Coming Games feature graphic",
    },
    featured: true,
  },
  {
    slug: "war-is-a-racket",
    date: "2026-05",
    kind: "Game jam",
    title: "War is a racket",
    tagline: "A story in under five minutes",
    summary:
      "Made with Albert Artigas in nine days for the first edition of The Shorter, The Better, a jam for short narrative games that last five minutes at most. A side-scroller you play in the browser, where the scenery transforms as the story behind the phrase unfolds. No generative AI, as the jam's rules asked.",
    highlights: ["#21 for story out of 82 entries"],
    tech: ["Unity", "WebGL"],
    links: [
      { label: "Play it", href: "https://avicarpio.itch.io/war-is-a-racket" },
      {
        label: "Jam entry",
        href: "https://itch.io/jam/the-shorter-the-better/rate/4605432",
      },
    ],
    color: "#ef5a4a",
    media: {
      image: "/log/war-is-a-racket/cover.webp",
      alt: "War is a racket: an old pickup truck driving through a ruined, dimly lit city",
    },
    featured: true,
  },
  {
    slug: "brickgodot",
    date: "2024-05",
    kind: "Game",
    title: "BrickGodot",
    tagline: "An idle brick-breaker",
    summary:
      "A polished idle brick-breaker built in Godot 4, with procedural levels, exponential difficulty, custom shaders and a mobile-first design.",
    tech: ["Godot 4", "GDScript", "GLSL"],
    links: [{ label: "GitHub", href: gh("BrickGodot") }],
    color: "#7dd3a8",
  },
  {
    slug: "metal-hellsinger",
    date: "2022-09",
    kind: "Game mod",
    title: "Metal: Hellsinger music mod",
    tagline: "The first song mod for the game",
    summary:
      "Reverse-engineered the game's FMOD Studio audio banks to swap the Stygia level track for Sweet Home Alabama, synced to the rhythm-scoring engine, before any public modding tools existed.",
    highlights: [
      "The first music mod for the game, anywhere",
      "Custom audio injected into the proprietary .bank format",
      "Plays with the beat-matching score, not just as background music",
    ],
    press: [
      {
        label: "PCGamesN",
        href: "https://www.pcgamesn.com/metal-hellsinger/mod-sweet-home-alabama",
      },
      "TheGamer",
      {
        label: "Reddit",
        href: "https://www.reddit.com/r/MetalHellsinger/comments/xhoo6t/sweet_home_alabama_mod_download/",
      },
      {
        label: "the game's official X account",
        href: "https://x.com/MetalHellsinger/status/1571833815663869952",
      },
    ],
    tech: ["FMOD Studio", "Reverse engineering"],
    links: [{ label: "GitHub", href: gh("Metal_Hellsinger_Mod_SweetHome") }],
    color: "#a78bfa",
    stars: 2,
  },
  {
    slug: "vacunacio-bot",
    date: "2021-07",
    kind: "Tool",
    title: "Vacunació Catalunya bot",
    tagline: "Help during the vaccine rollout",
    summary:
      "Released at the peak of the COVID-19 vaccination rollout in Catalonia: a bot that filled the official CatSalut form for you, through five or six levels of nested Shadow DOM, and stopped at the SMS step, saving people hours.",
    tech: ["Node.js", "Puppeteer"],
    links: [{ label: "GitHub", href: gh("Vacunacio-CatalunyaBOT") }],
    color: "#fb7185",
    stars: 5,
  },
  {
    slug: "factorio-time-control",
    date: "2021-06",
    kind: "Game mod",
    title: "Factorio Time Control",
    tagline: "21,000+ downloads",
    summary:
      "A mod on the official Factorio Mod Portal: keyboard shortcuts to change the game speed, with safe limits, six keyboard layouts and a reset on new games.",
    tech: ["Lua", "Factorio API"],
    links: [
      { label: "Mod Portal", href: "https://mods.factorio.com/mod/timeSpeed" },
      { label: "GitHub", href: gh("Factorio-Time-Control-Mod") },
    ],
    color: "#fbbf24",
    stars: 1,
  },
  {
    slug: "gameboy-island",
    date: "2021-04",
    kind: "Game",
    title: "Project Island",
    tagline: "A Game Boy game in the browser",
    summary:
      "A retro game made in GB Studio and wrapped in a JavaScript emulator, with touch controls and gamepad support.",
    tech: ["GB Studio", "JavaScript"],
    links: [
      { label: "Play it", href: "https://avicarpio.github.io/Gameboy-Project-Island/" },
      { label: "GitHub", href: gh("Gameboy-Project-Island") },
    ],
    color: "#a3e635",
    stars: 1,
  },
  {
    slug: "blackjack",
    date: "2020-03",
    kind: "Game engine",
    title: "Blackjack",
    tagline: "A complete game engine in Java",
    summary:
      "Blackjack from scratch: the full strategy table, soft-17 dealer rules, recursive splits, and a 100-round simulator to test the Martingale betting strategy.",
    tech: ["Java", "OOP", "Algorithms"],
    links: [{ label: "GitHub", href: gh("Blackjack") }],
    color: "#38bdf8",
    stars: 2,
  },
]

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
export const formatDate = (d: string) => {
  const [y, m] = d.split("-")
  return `${MONTHS[Number(m) - 1]} ${y}`
}
