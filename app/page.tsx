import Link from "next/link"
import { ArrowRight, ArrowUpRight, Mail, MapPin, Star } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { SiteFooter } from "@/components/site/footer"
import { formatDate, log, type LogEntry, type LogLink } from "@/content/log"

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

const experiences = [
  {
    title: "Software Engineer",
    company: "Watchity",
    location: "Barcelona",
    period: "Oct 2021 – Present",
    description:
      "Creator and maintainer of Mixer, the Unity app used in Watchity Studio. Building robust, engaging applications with Unity and frontend tools.",
  },
  {
    title: "Project Intern",
    company: "Watchity",
    location: "Barcelona",
    period: "Jan 2021 – Sep 2021",
    description: "Developed a cloud video application with Unity.",
  },
  {
    title: "Retail Vendor",
    company: "División Negocios Reunidos SL",
    location: "Terrassa",
    period: "Nov 2019 – Jul 2021",
    description: "Customer-facing retail operations and sales support.",
  },
]

const education = [
  {
    title: "Grau en Enginyeria Multimèdia, Menció en Videojocs",
    place: "La Salle BCN",
    period: "2016 – 2021",
  },
  {
    title: "Batxillerat Tecnològic",
    place: "STUCOM Centre d'Estudis",
    period: "2014 – 2016",
  },
  { title: "CCNA 1", place: "Cisco", period: "" },
]

const languages = [
  { name: "Català", level: "Native" },
  { name: "Español", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Français", level: "Elementary" },
  { name: "中文", level: "Beginner" },
]

const domains = [
  { name: "Unity / C#", level: 95 },
  { name: "Game development", level: 90 },
  { name: "Frontend", level: 85 },
  { name: "Backend", level: 70 },
  { name: "DevOps", level: 65 },
  { name: "Mobile", level: 50 },
]

const skills = [
  "C#",
  "Unity",
  "Angular",
  "NgRx",
  "TypeScript",
  "JavaScript",
  "Kotlin",
  "Jetpack Compose",
  "Python",
  "C++",
  "Java",
  "Lua",
  "PHP",
  "MySQL",
  "Git",
]

const socials = [
  { label: "Email", href: "mailto:alexvicarpio@gmail.com", icon: Mail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alex-vicente-carpio/",
    icon: LinkedinIcon,
  },
  { label: "GitHub", href: "https://github.com/avicarpio", icon: GithubIcon },
]

const navLinks = [
  { label: "Log", href: "#log" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const isExternal = (href: string) => href.startsWith("http")

function EntryLink({ link, primary }: { link: LogLink; primary?: boolean }) {
  const cls = primary
    ? "inline-flex h-10 items-center gap-1.5 rounded-full bg-[var(--paper)] px-4 text-sm font-medium text-[var(--ink)] transition-opacity hover:opacity-85"
    : "inline-flex h-10 items-center gap-1.5 rounded-full border border-[var(--line)] px-4 text-sm font-medium text-[var(--paper)]/85 transition-colors hover:border-white/25 hover:text-white"
  const Icon = isExternal(link.href) ? ArrowUpRight : ArrowRight
  return isExternal(link.href) ? (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
    >
      {link.label} <Icon className="h-4 w-4" />
    </a>
  ) : (
    <Link href={link.href} className={cls}>
      {link.label} <Icon className="h-4 w-4" />
    </Link>
  )
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span
          key={t}
          className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
        >
          {t}
        </span>
      ))}
    </div>
  )
}

function Kind({ entry }: { entry: LogEntry }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-[var(--muted)] uppercase">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: entry.color, boxShadow: `0 0 12px ${entry.color}` }}
      />
      {entry.kind} · {formatDate(entry.date)}
    </span>
  )
}

function Media({ entry, priority }: { entry: LogEntry; priority?: boolean }) {
  const m = entry.media
  if (!m) return null
  return (
    <div className="relative self-start overflow-hidden rounded-2xl border border-[var(--line)] bg-black">
      {m.video ? (
        <video
          src={m.video}
          poster={m.poster}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          aria-label={m.alt}
          className="block aspect-video h-auto w-full object-cover"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={m.image}
          alt={m.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="block h-auto w-full"
        />
      )}
    </div>
  )
}

/** The newest entry, at the top of the page. */
function Latest({ entry }: { entry: LogEntry }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
      <Media entry={entry} priority />
      <div className="flex flex-col items-start gap-5">
        <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-[var(--paper)]/80 uppercase">
          Latest
        </span>
        <Kind entry={entry} />
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {entry.title}
        </h2>
        <p className="font-display text-2xl leading-snug text-[var(--paper)]/90 italic">
          {entry.tagline}
        </p>
        <p className="leading-relaxed text-pretty text-[var(--muted)]">
          {entry.summary}
        </p>
        {entry.highlights && (
          <ul className="flex flex-col gap-1.5">
            {entry.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-sm text-[var(--paper)]/75"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full"
                  style={{ background: entry.color }}
                />
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2 pt-1">
          {entry.links.map((l, i) => (
            <EntryLink key={l.href} link={l} primary={i === 0} />
          ))}
        </div>
      </div>
    </div>
  )
}

/** One line of the log: big with its media when featured, compact otherwise. */
function Entry({ entry }: { entry: LogEntry }) {
  const featured = entry.featured && entry.media
  return (
    <article
      className={`grid gap-6 py-10 ${featured ? "md:grid-cols-[1fr_1fr] md:gap-10" : ""}`}
    >
      <div className="flex flex-col items-start gap-3">
        <Kind entry={entry} />
        <div className="flex items-center gap-3">
          {entry.icon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={entry.icon}
              alt=""
              className="h-10 w-10 rounded-xl"
              loading="lazy"
            />
          )}
          <h3 className="text-2xl font-semibold tracking-tight">
            {entry.title}
          </h3>
          {entry.stars ? (
            <span className="flex items-center gap-1 text-sm text-[var(--muted)]">
              <Star className="h-3.5 w-3.5 fill-current" />
              {entry.stars}
            </span>
          ) : null}
        </div>
        <p className="font-display text-xl text-[var(--paper)]/85 italic">
          {entry.tagline}
        </p>
        <p className="max-w-2xl leading-relaxed text-pretty text-[var(--muted)]">
          {entry.summary}
        </p>
        {entry.highlights && (
          <ul className="flex flex-col gap-1.5">
            {entry.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-sm text-[var(--paper)]/70"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full"
                  style={{ background: entry.color }}
                />
                {h}
              </li>
            ))}
          </ul>
        )}
        {entry.press && (
          <p className="text-sm text-[var(--faint)]">
            Covered by{" "}
            {entry.press.map((p, i) => (
              <span key={typeof p === "string" ? p : p.href}>
                {i > 0 && (i === entry.press!.length - 1 ? " and " : ", ")}
                {typeof p === "string" ? (
                  p
                ) : (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--paper)]/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
                  >
                    {p.label}
                  </a>
                )}
              </span>
            ))}
          </p>
        )}
        <Tags items={entry.tech} />
        <div className="flex flex-wrap gap-2 pt-1">
          {entry.links.map((l) => (
            <EntryLink key={l.href} link={l} />
          ))}
        </div>
      </div>
      {featured && <Media entry={entry} />}
    </article>
  )
}

export default function Page() {
  const [latest, ...rest] = log
  // the log grouped by year, newest first
  const years = [...new Set(rest.map((e) => e.date.slice(0, 4)))]

  return (
    <div className="home relative isolate flex min-h-svh w-full flex-col items-center overflow-x-clip">
      <div aria-hidden className="home-glow pointer-events-none absolute inset-0 -z-10" />

      <header className="sticky top-0 z-50 w-full border-b border-[var(--line)] bg-[var(--ink)]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="h-2 w-2 rounded-full bg-[var(--paper)]" />
            Àlex Vicente
          </a>
          <nav className="flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--paper)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex w-full flex-col items-center">
        {/* Hero */}
        <section id="top" className="mx-auto w-full max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
          <FadeIn>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--muted)]">
              <span className="font-medium text-[var(--paper)]">
                Àlex Vicente Carpio
              </span>
              <span aria-hidden>·</span>
              <MapPin className="h-3.5 w-3.5" /> Software engineer in Barcelona
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[1.04] font-semibold tracking-tight text-balance sm:text-7xl">
              I make the things{" "}
              <span className="font-display font-normal text-[var(--paper)]/90 italic">
                I wish existed.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-[var(--muted)]">
              A site that makes cancer statistics readable. An app so I never
              miss a game release. The first music mod for Metal: Hellsinger. A
              bot that saved people hours during the vaccine rollout. By day I
              build Unity and frontend apps at Watchity; this page is the log of
              everything else.
            </p>
          </FadeIn>
          <FadeIn delay={240}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={isExternal(href) ? "_blank" : undefined}
                  rel={isExternal(href) ? "noopener noreferrer" : undefined}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-[var(--line)] px-5 text-sm font-medium text-[var(--paper)]/85 transition-colors hover:border-white/25 hover:text-white"
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* The latest thing I shipped */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-24">
          <FadeIn>
            <Latest entry={latest} />
          </FadeIn>
        </section>

        {/* The log */}
        <section id="log" className="mx-auto w-full max-w-6xl px-6 pb-24">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--line)] pb-6">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                The <span className="font-display font-normal italic">log</span>
              </h2>
              <p className="max-w-sm text-sm text-[var(--muted)]">
                Everything I&apos;ve shipped, newest first: apps, games, mods,
                tools and websites.
              </p>
            </div>
          </FadeIn>
          {years.map((year) => (
            <div
              key={year}
              className="grid gap-x-10 border-b border-[var(--line)] md:grid-cols-[7rem_1fr]"
            >
              <div className="pt-10 md:sticky md:top-20 md:self-start">
                <span className="font-display text-4xl text-[var(--faint)] italic">
                  {year}
                </span>
              </div>
              <div className="divide-y divide-[var(--line)]">
                {rest
                  .filter((e) => e.date.startsWith(year))
                  .map((e) => (
                    <FadeIn key={e.slug}>
                      <Entry entry={e} />
                    </FadeIn>
                  ))}
              </div>
            </div>
          ))}
        </section>

        {/* About */}
        <section id="about" className="mx-auto w-full max-w-6xl px-6 pb-24">
          <FadeIn>
            <h2 className="border-b border-[var(--line)] pb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              About <span className="font-display font-normal italic">me</span>
            </h2>
          </FadeIn>
          <div className="grid gap-12 pt-10 md:grid-cols-[1fr_1fr]">
            <FadeIn>
              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
                    Experience
                  </h3>
                  <ul className="mt-5 flex flex-col gap-6">
                    {experiences.map((x) => (
                      <li key={x.title + x.period}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                          <span className="text-lg font-medium">{x.title}</span>
                          <span className="text-sm text-[var(--faint)]">
                            {x.period}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--muted)]">
                          {x.company} · {x.location}
                        </p>
                        <p className="mt-1.5 text-[var(--paper)]/75">
                          {x.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
                    Education
                  </h3>
                  <ul className="mt-5 flex flex-col gap-4">
                    {education.map((x) => (
                      <li key={x.title}>
                        <p className="font-medium">{x.title}</p>
                        <p className="text-sm text-[var(--muted)]">
                          {x.place}
                          {x.period && ` · ${x.period}`}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
                    What I work with
                  </h3>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {domains.map((d) => (
                      <li key={d.name}>
                        <div className="flex justify-between text-sm">
                          <span>{d.name}</span>
                          <span className="text-[var(--faint)]">{d.level}</span>
                        </div>
                        <div className="mt-1.5 h-1 rounded-full bg-white/[0.06]">
                          <div
                            className="h-1 rounded-full bg-[var(--paper)]/80"
                            style={{ width: `${d.level}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Tags items={skills} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
                    Languages
                  </h3>
                  <ul className="mt-4 divide-y divide-[var(--line)]">
                    {languages.map((l) => (
                      <li
                        key={l.name}
                        className="flex items-center justify-between py-2.5"
                      >
                        <span>{l.name}</span>
                        <span className="text-sm text-[var(--muted)]">
                          {l.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <figure className="border-l border-[var(--line)] pl-5">
                  <blockquote className="font-display text-xl leading-snug text-[var(--paper)]/85 italic">
                    “The right man in the wrong place can make all the difference
                    in the world.”
                  </blockquote>
                  <figcaption className="mt-2 text-xs tracking-[0.16em] text-[var(--faint)] uppercase">
                    G-Man, Half-Life
                  </figcaption>
                </figure>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-28">
          <FadeIn>
            <div className="flex flex-col items-start gap-6 border-t border-[var(--line)] pt-14">
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
                Got a project, an idea, or{" "}
                <span className="font-display font-normal italic">
                  just want to say hi?
                </span>
              </h2>
              <a
                href="mailto:alexvicarpio@gmail.com"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--paper)] px-6 font-medium text-[var(--ink)] transition-opacity hover:opacity-85"
              >
                <Mail className="h-4 w-4" /> alexvicarpio@gmail.com
              </a>
            </div>
          </FadeIn>
        </section>
      </main>

      <SiteFooter
        links={[
          { label: "oncodata.info", href: "https://oncodata.info" },
          { label: "Coming Games", href: "/cominggames" },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/alex-vicente-carpio/",
          },
          { label: "GitHub", href: "https://github.com/avicarpio" },
        ]}
      />
    </div>
  )
}
