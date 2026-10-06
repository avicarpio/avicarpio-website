import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Star,
} from "lucide-react"
import { ChartRadarDefault } from "./chartRadarDefault"
import { FadeIn } from "@/components/fade-in"
import { Backdrop } from "@/components/site/backdrop"
import { SiteFooter } from "@/components/site/footer"
import { SiteNav } from "@/components/site/nav"
import { Phone } from "@/components/site/phone"
import { PlayButton } from "@/components/site/play-button"
import { SectionHeading } from "@/components/site/section-heading"

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

function MusicIcon({ className }: { className?: string }) {
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
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function TimerIcon({ className }: { className?: string }) {
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
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

const featuredProjects = [
  {
    name: "Metal_Hellsinger_Mod_SweetHome",
    tagline: "World-First Music Mod",
    description:
      "The first song mod ever created for Metal: Hellsinger. Reverse-engineered the game's proprietary FMOD Studio audio banks to replace the Stygia level track with Sweet Home Alabama by Lynyrd Skynyrd — perfectly synced to the rhythm-scoring engine.",
    highlights: [
      "First person in the world to mod the game's music (before any public modding tools)",
      "Reverse-engineered proprietary FMOD .bank format to inject custom audio",
      "Integrated with the beat-matching scoring system, not just background music",
    ],
    press: ["PCGamesN", "TheGamer", "Reddit", "Official Twitter"],
    tech: ["FMOD Studio", "Reverse Engineering"],
    stars: 2,
    icon: MusicIcon,
    accent: "text-violet-400",
    borderAccent: "hover:border-violet-500/30",
  },
  {
    name: "Vacunacio-CatalunyaBOT",
    tagline: "Pandemic Relief Tool",
    description:
      "Released during the chaotic COVID-19 vaccination rollout in Catalonia. A Puppeteer bot that automated the official CatSalut portal, filling personal data through deeply nested Shadow DOMs so people could instantly check appointment availability without hours of manual form-filling.",
    highlights: [
      "Built and released during the peak pandemic when the vaccination system was overwhelmed",
      "Navigates 5–6 levels of nested Shadow DOMs — a rare advanced browser automation skill",
      "Helped countless people save hours by auto-filling data and stopping at the SMS step",
    ],
    tech: ["Node.js", "Puppeteer", "JavaScript"],
    stars: 4,
    icon: HeartIcon,
    accent: "text-rose-400",
    borderAccent: "hover:border-rose-500/30",
  },
  {
    name: "Blackjack",
    tagline: "Complete Game Engine",
    description:
      "A full-featured Blackjack simulator written in Java from scratch. Implements the complete strategy table, Soft-17 dealer rules, recursive Split handling, and an empirical 100-round simulator to test betting progression strategies.",
    highlights: [
      "~526 lines of clean, modular Java with full OOP architecture",
      "Recursive Split engine: when a hand splits, it spawns a new sub-game automatically",
      "100-round statistical simulator to empirically test the Martingale progression strategy",
    ],
    tech: ["Java", "OOP", "Algorithms"],
    stars: 1,
    icon: Code2,
    accent: "text-sky-400",
    borderAccent: "hover:border-sky-500/30",
  },
  {
    name: "Factorio-Time-Control-Mod",
    tagline: "Published Factorio Mod",
    description:
      "A quality-of-life mod published on the official Factorio Mod Portal with 4 releases. Adds real-time keyboard shortcuts to control game speed, with safety clamps, multilingual keyboard layout support, and proper initialization hooks.",
    highlights: [
      "21,000+ downloads on the official Factorio Mod Portal",
      "Supports 6 different keyboard layouts (US, FR, IT, DE, ES, PL)",
      "Safe initialization: automatically resets speed on new games to prevent persistent state bugs",
    ],
    tech: ["Lua", "Factorio API"],
    stars: 1,
    icon: TimerIcon,
    accent: "text-amber-400",
    borderAccent: "hover:border-amber-500/30",
  },
]

const moreProjects = [
  {
    name: "Gameboy-Project-Island",
    description:
      "A retro game built in GB Studio, wrapped with an existing JavaScript emulator for browser play. Includes mobile touch controls and gamepad support.",
    tech: ["GB Studio", "JavaScript"],
    stars: 1,
  },
  {
    name: "BrickGodot",
    description:
      "A polished idle brick-breaker game built in Godot 4 with procedural level generation, exponential difficulty scaling, custom shaders, and mobile-first design.",
    tech: ["Godot 4", "GDScript", "GLSL Shaders"],
    stars: null,
  },
]

const experiences = [
  {
    title: "Software Engineer",
    company: "Watchity",
    location: "Barcelona, Spain",
    period: "Oct 2021 – Present",
    description:
      "Creator and maintainer of Mixer (Unity) app used on Studio. Developing robust and engaging applications with Unity and Frontend tools.",
  },
  {
    title: "Project Intern",
    company: "Watchity",
    location: "Barcelona, Spain",
    period: "Jan 2021 – Sep 2021",
    description:
      "Developed a cloud video application using Unity Engine technology.",
  },
  {
    title: "Retail Vendor",
    company: "División Negocios Reunidos SL",
    location: "Terrassa, Spain",
    period: "Nov 2019 – Jul 2021",
    description: "Customer-facing retail operations and sales support.",
  },
]

const navLinks = [
  { label: "Coming Games", href: "#app" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
]

const languages = [
  { name: "Català", level: "Native" },
  { name: "Español", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Français", level: "Elementary" },
  { name: "中文", level: "Beginner" },
]

const skills = [
  "C#",
  "Unity",
  "Angular",
  "NgRx",
  "JavaScript",
  "TypeScript",
  "Kotlin",
  "Python",
  "Git",
  "C++",
  "Java",
  "PHP",
  "MySQL",
  "Lua",
  "Matlab",
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

export default function Page() {
  return (
    <div className="relative isolate flex min-h-svh w-full flex-col items-center overflow-x-clip bg-[var(--brand-night)] text-white">
      <Backdrop />

      <SiteNav
        brand={
          <a
            href="#top"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[var(--brand-pink)] to-[var(--brand-amber)]" />
            Àlex Vicente
          </a>
        }
        links={navLinks}
        action={
          <Link
            href="/cominggames"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-white/[0.06] pr-4 pl-1.5 text-sm font-medium transition-colors hover:bg-white/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cominggames/icon-v2.png"
              alt=""
              className="h-7 w-7 rounded-lg"
            />
            <span className="hidden sm:inline">New app</span>
            <ArrowUpRight className="h-4 w-4 text-white/60" />
          </Link>
        }
      />

      <main className="flex w-full flex-col items-center">
        {/* Hero */}
        <section
          id="top"
          className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pt-20 pb-24 md:pt-28 lg:grid-cols-[1.15fr_1fr]"
        >
          <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/70">
                <MapPin className="h-3.5 w-3.5 text-[var(--brand-pink)]" />{" "}
                Barcelona · Software Engineer at Watchity
              </span>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="text-5xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Àlex Vicente <span className="text-gradient">Carpio</span>
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="max-w-xl text-lg leading-relaxed text-pretty text-white/65 sm:text-xl">
                Specialized in Unity and frontend development. I build robust,
                engaging applications, and I thrive on challenging projects that
                push boundaries: from game mods to my own Android app.
              </p>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-5 font-medium text-white/80 transition-colors hover:border-white/30 hover:bg-white/5 hover:text-white"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* The latest thing I made */}
          <FadeIn delay={200}>
            <Link href="/cominggames" className="group block">
              <div className="gradient-border relative overflow-hidden p-6 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[var(--brand-red)]/25 blur-[70px]" />
                <div className="relative flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/cominggames/icon-v2.png"
                    alt="Coming Games icon"
                    className="h-14 w-14 rounded-2xl shadow-lg"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-[0.16em] text-[var(--brand-amber)] uppercase">
                      New · Out now
                    </p>
                    <p className="text-xl font-bold">Coming Games</p>
                    <p className="text-sm text-white/55">
                      Never miss a release day
                    </p>
                  </div>
                  <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
                <div className="relative mt-6 grid grid-cols-2 gap-4">
                  <Phone
                    src="/cominggames/screens/home.webp"
                    alt="Coming Games: upcoming games"
                    priority
                  />
                  <Phone
                    src="/cominggames/screens/detail.webp"
                    alt="Coming Games: a game page"
                    className="mt-10"
                  />
                </div>
              </div>
            </Link>
          </FadeIn>
        </section>

        {/* Quote */}
        <section className="mx-auto w-full max-w-4xl px-6 pb-24">
          <FadeIn>
            <figure className="text-center">
              <blockquote className="text-2xl leading-snug font-medium text-balance text-white/90 italic sm:text-3xl">
                “The right man in the wrong place can make all the difference in
                the world.”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold tracking-[0.2em] text-white/40 uppercase">
                G-Man, Half-Life
              </figcaption>
            </figure>
          </FadeIn>
        </section>

        {/* Coming Games */}
        <section id="app" className="mx-auto w-full max-w-6xl px-6 pb-28">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#2a1230] via-[#160f26] to-[#0c0d18] p-8 sm:p-12">
              <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[var(--brand-red)]/30 blur-[100px]" />
              <div className="absolute -right-24 -bottom-32 h-80 w-80 rounded-full bg-[var(--brand-purple)]/30 blur-[100px]" />
              <div className="relative grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
                <div className="flex flex-col items-start gap-6">
                  <SectionHeading
                    align="left"
                    eyebrow="My latest app"
                    title={
                      <>
                        Coming Games is{" "}
                        <span className="text-gradient">out now</span>
                      </>
                    }
                    description="An Android app to follow every upcoming game on PlayStation, Xbox, Nintendo and PC, with reminders a week before, the day before and on launch day. Built from scratch in Kotlin and Jetpack Compose."
                  />
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Kotlin",
                      "Jetpack Compose",
                      "Room",
                      "Paging",
                      "Cloudflare Workers",
                    ].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <PlayButton />
                    <Link
                      href="/cominggames"
                      className="inline-flex items-center gap-2 font-medium text-white/75 transition-colors hover:text-white"
                    >
                      Discover the app <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
                  <Phone
                    src="/cominggames/screens/reminders.webp"
                    alt="Coming Games: reminders"
                  />
                  <Phone
                    src="/cominggames/screens/recap.webp"
                    alt="Coming Games: weekly recap"
                    className="mt-12"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mx-auto w-full max-w-6xl px-6 pb-28"
        >
          <FadeIn>
            <SectionHeading eyebrow="Experience" title="Where I've worked" />
          </FadeIn>
          <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.title + exp.period} delay={i * 100}>
                <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--brand-pink)]/20 to-[var(--brand-purple)]/20 text-[var(--brand-pink)]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <span className="text-sm font-medium text-[var(--brand-amber)]/90">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-white/50">
                      {exp.company} · {exp.location}
                    </p>
                    <p className="pt-1 leading-relaxed text-white/70">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto w-full max-w-6xl px-6 pb-28">
          <FadeIn>
            <SectionHeading eyebrow="Skills" title="What I work with" />
          </FadeIn>
          <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
            <FadeIn delay={100}>
              <ChartRadarDefault />
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex flex-wrap justify-center gap-2.5 md:justify-start">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-[var(--brand-pink)]/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="mx-auto w-full max-w-6xl px-6 pb-28">
          <FadeIn>
            <SectionHeading eyebrow="Proud works" title="Things I've built" />
          </FadeIn>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project, i) => {
              const Icon = project.icon
              return (
                <FadeIn key={project.name} delay={(i % 2) * 100}>
                  <a
                    href={`https://github.com/avicarpio/${project.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] ${project.accent}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="truncate font-semibold transition-colors group-hover:text-white">
                            {project.name}
                          </h3>
                          <p
                            className={`text-xs font-semibold tracking-wider uppercase ${project.accent}`}
                          >
                            {project.tagline}
                          </p>
                        </div>
                      </div>
                      {project.stars ? (
                        <span className="flex shrink-0 items-center gap-1 text-sm text-white/50">
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          {project.stars}
                        </span>
                      ) : null}
                    </div>
                    <p className="text-sm leading-relaxed text-white/65">
                      {project.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-white/60"
                        >
                          <span
                            className={`mt-2 h-1 w-1 shrink-0 rounded-full ${project.accent.replace("text-", "bg-")}`}
                          />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                    {project.press ? (
                      <p className="text-xs text-white/45">
                        <span className="font-semibold tracking-wider uppercase">
                          Press:
                        </span>{" "}
                        {project.press.join(" · ")}
                      </p>
                    ) : null}
                    <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-white/60"
                        >
                          {t}
                        </span>
                      ))}
                      <ArrowUpRight className="ml-auto h-4 w-4 text-white/30 transition-colors group-hover:text-white" />
                    </div>
                  </a>
                </FadeIn>
              )
            })}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {moreProjects.map((project, i) => (
              <FadeIn key={project.name} delay={i * 80}>
                <a
                  href={`https://github.com/avicarpio/${project.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="truncate text-sm font-semibold">
                      {project.name}
                    </h3>
                    {project.stars ? (
                      <span className="flex shrink-0 items-center gap-1 text-xs text-white/50">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        {project.stars}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm leading-relaxed text-white/55">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-white/55"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Education and languages */}
        <section className="mx-auto grid w-full max-w-6xl gap-5 px-6 pb-28 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-[var(--brand-pink)]" />
                <h2 className="text-xl font-bold">
                  Education & certifications
                </h2>
              </div>
              <div className="mt-6 flex flex-col gap-5">
                <div>
                  <h3 className="font-semibold">
                    Grau en Enginyeria Multimèdia — Menció en Videojocs
                  </h3>
                  <p className="text-sm text-white/50">
                    La Salle BCN · 2016 – 2021
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Batxillerat Tecnològic</h3>
                  <p className="text-sm text-white/50">
                    STUCOM Centre d&apos;Estudis · 2014 – 2016
                  </p>
                </div>
                <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/70">
                  CCNA 1
                </span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-bold">Languages</h2>
              <ul className="mt-6 flex flex-col divide-y divide-white/10">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-white/50">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* Contact */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-28">
          <FadeIn>
            <div className="gradient-border flex flex-col items-center gap-6 p-10 text-center sm:p-14">
              <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
                Let&apos;s build{" "}
                <span className="text-gradient">something</span> together.
              </h2>
              <p className="max-w-lg text-lg text-white/60">
                Got a project, a game idea or just want to say hi? My inbox is
                open.
              </p>
              <a
                href="mailto:alexvicarpio@gmail.com"
                className="inline-flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-[var(--brand-pink)] to-[var(--brand-red)] px-7 font-semibold shadow-[0_10px_40px_-10px_var(--brand-red)] transition-transform hover:scale-[1.03]"
              >
                <Mail className="h-5 w-5" /> alexvicarpio@gmail.com
              </a>
            </div>
          </FadeIn>
        </section>
      </main>

      <SiteFooter
        links={[
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
