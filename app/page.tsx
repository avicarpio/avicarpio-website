import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { ChartRadarDefault } from "./chartRadarDefault"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ExternalLink, Star, Code2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { FadeIn } from "@/components/fade-in"

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
    accent: "text-violet-600 dark:text-violet-400",
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
    accent: "text-rose-600 dark:text-rose-400",
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
    accent: "text-sky-600 dark:text-sky-400",
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
    accent: "text-amber-600 dark:text-amber-400",
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
  { label: "About", href: "#top" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
]

export default function Page() {
  return (
    <div className="relative flex min-h-svh w-full flex-col items-center bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
          <a href="#top" className="text-base font-semibold tracking-tight">
            Àlex Vicente
          </a>
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-2 h-4 w-px bg-border" />
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <div className="flex w-full max-w-3xl min-w-0 flex-col gap-24 text-base leading-relaxed px-6 pb-20">
        {/* Hero */}
        <section id="top" className="flex flex-col items-center gap-5 text-center pt-16">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight">Àlex Vicente Carpio</h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-muted-foreground">
              Software Engineer at Watchity
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="max-w-lg text-muted-foreground">
              Specialized in Unity and Frontend development. I build robust, engaging
              applications and thrive on tackling challenging projects to push boundaries.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <a href="mailto:alexvicarpio@gmail.com">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/alex-vicente-carpio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="rounded-full">
                  <LinkedinIcon className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a
                href="https://github.com/avicarpio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="rounded-full">
                  <GithubIcon className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a href="/Profile.pdf" download>
                <Button variant="outline" size="sm" className="rounded-full">
                  Download CV
                  <HugeiconsIcon icon={Download01Icon} className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Quote */}
        <section className="w-full">
          <FadeIn>
            <div className="relative mx-auto max-w-lg text-center">
              <div className="absolute -top-6 left-1/2 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <blockquote className="text-xl font-medium italic leading-relaxed text-foreground/90">
                “The right man in the wrong place can make all the difference in the world.”
              </blockquote>
              <p className="pt-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                — G-Man, Half-Life
              </p>
              <div className="absolute -bottom-6 left-1/2 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
          </FadeIn>
        </section>

        {/* Experience */}
        <section id="experience" className="w-full">
          <FadeIn>
            <div className="pb-10 text-center">
              <Badge variant="default" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                Experience
              </Badge>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="relative pl-8 border-l border-muted-foreground/15">
                  <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} — {exp.location}
                    </p>
                    <p className="text-sm font-medium text-primary/80">{exp.period}</p>
                    <p className="text-base text-muted-foreground pt-1 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="w-full">
          <FadeIn>
            <div className="pb-10 text-center">
              <Badge variant="default" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                Skills
              </Badge>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <ChartRadarDefault />
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-wrap justify-center gap-2 pt-10">
              <Badge variant="secondary" className="rounded-full px-3 py-1">C#</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">Unity</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">Angular</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">NgRx</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">JavaScript</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">TypeScript</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">Python</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">Git</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">C++</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">Java</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">PHP</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">MySQL</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">Lua</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">Matlab</Badge>
            </div>
          </FadeIn>
        </section>

        {/* Portfolio / Proud Works */}
        <section id="portfolio" className="w-full">
          <FadeIn>
            <div className="pb-10 text-center">
              <Badge variant="default" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                Proud Works
              </Badge>
            </div>
          </FadeIn>

          {/* Featured */}
          <div className="flex flex-col gap-6">
            {featuredProjects.map((project, i) => {
              const Icon = project.icon
              return (
                <FadeIn key={project.name} delay={i * 100}>
                  <a
                    href={`https://github.com/avicarpio/${project.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <Card
                      size="sm"
                      className={`h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.01] ${project.borderAccent}`}
                    >
                      <CardContent className="flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <div className={`rounded-lg bg-muted p-1.5 ${project.accent}`}>
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-base transition-colors group-hover:text-primary">
                                {project.name}
                              </h3>
                              <p className={`text-xs font-medium uppercase tracking-wide ${project.accent}`}>
                                {project.tagline}
                              </p>
                            </div>
                          </div>
                          {project.stars ? (
                            <div className="flex items-center gap-1 text-sm text-muted-foreground shrink-0">
                              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                              {project.stars}
                            </div>
                          ) : null}
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        <ul className="flex flex-col gap-1">
                          {project.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${project.accent.replace("text-", "bg-")}`} />
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>

                        {project.press ? (
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Press:
                            </span>
                            {project.press.map((p) => (
                              <Badge
                                key={p}
                                variant="secondary"
                                className="text-[10px] h-4 rounded-full"
                              >
                                {p}
                              </Badge>
                            ))}
                          </div>
                        ) : null}

                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {project.tech.map((t) => (
                            <Badge
                              key={t}
                              variant="outline"
                              className="text-xs h-5 rounded-full font-medium"
                            >
                              {t}
                            </Badge>
                          ))}
                          <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </FadeIn>
              )
            })}
          </div>

          {/* More Projects */}
          <FadeIn delay={100}>
            <div className="pt-10 pb-6 text-center">
              <Badge variant="secondary" className="rounded-full px-3 py-0.5 text-xs uppercase tracking-wider">
                More Projects
              </Badge>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {moreProjects.map((project, i) => (
              <FadeIn key={project.name} delay={i * 75}>
                <a
                  href={`https://github.com/avicarpio/${project.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card
                    size="sm"
                    className="h-full transition-all duration-300 hover:shadow-md hover:shadow-primary/5 hover:scale-[1.02] hover:border-primary/20"
                  >
                    <CardContent className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-sm truncate pr-2 transition-colors group-hover:text-primary">
                          {project.name}
                        </h3>
                        {project.stars ? (
                          <span className="flex items-center gap-0.5 text-xs text-muted-foreground shrink-0">
                            <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                            {project.stars}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {project.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="text-[10px] h-4 rounded-full"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="w-full">
          <FadeIn>
            <div className="pb-10 text-center">
              <Badge variant="default" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                Education & Certifications
              </Badge>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-8 text-base">
            <FadeIn delay={100}>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">
                  Grau en Enginyeria Multimèdia — Menció en Videojocs
                </h3>
                <p className="text-muted-foreground">La Salle BCN — 2016 - 2021</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Batxillerat Tecnològic</h3>
                <p className="text-muted-foreground">
                  STUCOM Centre d&apos;Estudis — 2014 - 2016
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <Badge variant="outline" className="rounded-full px-3 py-1">CCNA 1</Badge>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Languages */}
        <section className="w-full">
          <FadeIn>
            <div className="pb-10 text-center">
              <Badge variant="default" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                Languages
              </Badge>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-base text-muted-foreground">
              <span>
                Català{" "}
                <span className="text-sm text-muted-foreground/60">(Native)</span>
              </span>
              <span className="text-muted-foreground/30">·</span>
              <span>
                Español{" "}
                <span className="text-sm text-muted-foreground/60">(Native)</span>
              </span>
              <span className="text-muted-foreground/30">·</span>
              <span>
                English{" "}
                <span className="text-sm text-muted-foreground/60">
                  (Professional)
                </span>
              </span>
              <span className="text-muted-foreground/30">·</span>
              <span>
                Français{" "}
                <span className="text-sm text-muted-foreground/60">
                  (Elementary)
                </span>
              </span>
              <span className="text-muted-foreground/30">·</span>
              <span>
                中文{" "}
                <span className="text-sm text-muted-foreground/60">(Beginner)</span>
              </span>
            </div>
          </FadeIn>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground">
          <FadeIn>
            <p>alexvicarpio@gmail.com</p>
            <p className="pt-1">
              © {new Date().getFullYear()} Àlex Vicente Carpio
            </p>
          </FadeIn>
        </footer>
      </div>
    </div>
  )
}
