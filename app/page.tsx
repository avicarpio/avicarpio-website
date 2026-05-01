import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { ChartRadarDefault } from "./chartRadarDefault"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ExternalLink } from "lucide-react"
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

const projects = [
  {
    name: "Vacunacio-CatalunyaBOT",
    description: "Bot that automates personal data entry for vaccination appointments.",
    language: "JavaScript",
    stars: 4,
  },
  {
    name: "Metal_Hellsinger_Mod_SweetHome",
    description: "World first song mod for the rhythm game Metal: Hellsinger.",
    language: null,
    stars: 2,
  },
  {
    name: "Blackjack",
    description: "Blackjack simulator to test if a table strategy doubles initial money.",
    language: "Java",
    stars: 1,
  },
  {
    name: "Gameboy-Project-Island",
    description: "Game created with GB Studio, playable on original Game Boy hardware.",
    language: "JavaScript",
    stars: 1,
  },
  {
    name: "Factorio-Time-Control-Mod",
    description: "First Factorio mod allowing players to control time for rapid crafting.",
    language: "Lua",
    stars: 1,
  },
  {
    name: "BrickGodot",
    description: "An idle brick breaker game done in Godot.",
    language: "GDScript",
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
        <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-6">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Àlex Vicente
          </a>
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-2 h-4 w-px bg-border" />
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <div className="flex w-full max-w-2xl min-w-0 flex-col gap-24 text-sm leading-loose px-6 pb-20">
        {/* Hero */}
        <section id="top" className="flex flex-col items-center gap-5 text-center pt-16">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight">Àlex Vicente Carpio</h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-base text-muted-foreground">
              Software Engineer at Watchity
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="max-w-md text-muted-foreground">
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
        <section id="about" className="w-full">
          <FadeIn>
            <div className="relative mx-auto max-w-lg text-center">
              <div className="absolute -top-6 left-1/2 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <blockquote className="text-lg font-medium italic leading-relaxed text-foreground/90">
                “The right man in the wrong place can make all the difference in the world.”
              </blockquote>
              <p className="pt-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
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
                    <h3 className="text-base font-semibold">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} — {exp.location}
                    </p>
                    <p className="text-xs font-medium text-primary/80">{exp.period}</p>
                    <p className="text-sm text-muted-foreground pt-1 leading-relaxed">
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

        {/* Portfolio */}
        <section id="portfolio" className="w-full">
          <FadeIn>
            <div className="pb-10 text-center">
              <Badge variant="default" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                Portfolio
              </Badge>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project, i) => (
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
                        <h3 className="font-medium truncate pr-2 transition-colors group-hover:text-primary">
                          {project.name}
                        </h3>
                        {project.stars ? (
                          <span className="text-xs text-muted-foreground shrink-0">
                            ★ {project.stars}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        {project.language ? (
                          <Badge variant="outline" className="text-[10px] h-5 rounded-full">
                            {project.language}
                          </Badge>
                        ) : null}
                        <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-foreground" />
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
          <div className="flex flex-col gap-8 text-sm">
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
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
              <span>
                Català{" "}
                <span className="text-xs text-muted-foreground/60">(Native)</span>
              </span>
              <span className="text-muted-foreground/30">·</span>
              <span>
                Español{" "}
                <span className="text-xs text-muted-foreground/60">(Native)</span>
              </span>
              <span className="text-muted-foreground/30">·</span>
              <span>
                English{" "}
                <span className="text-xs text-muted-foreground/60">
                  (Professional)
                </span>
              </span>
              <span className="text-muted-foreground/30">·</span>
              <span>
                Français{" "}
                <span className="text-xs text-muted-foreground/60">
                  (Elementary)
                </span>
              </span>
              <span className="text-muted-foreground/30">·</span>
              <span>
                中文{" "}
                <span className="text-xs text-muted-foreground/60">(Beginner)</span>
              </span>
            </div>
          </FadeIn>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-muted-foreground">
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
