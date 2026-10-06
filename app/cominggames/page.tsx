import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  CalendarDays,
  CalendarPlus,
  Check,
  Flame,
  Gamepad2,
  Languages,
  LayoutGrid,
  Moon,
  Search,
  Sparkles,
} from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { Backdrop } from "@/components/site/backdrop"
import { SiteFooter } from "@/components/site/footer"
import { SiteNav } from "@/components/site/nav"
import { Phone } from "@/components/site/phone"
import { PlayButton } from "@/components/site/play-button"
import { SectionHeading } from "@/components/site/section-heading"

export const metadata: Metadata = {
  title: "Coming Games — Never miss a release day",
  description:
    "Every upcoming game on PlayStation, Xbox, Nintendo and PC, with reminders a week before, the day before and on launch day. Now on Google Play.",
  openGraph: {
    title: "Coming Games — Never miss a release day",
    description:
      "Every upcoming game, with reminders on launch day. Now on Google Play.",
    images: [
      { url: "/cominggames/feature-graphic.png", width: 1024, height: 500 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/cominggames/feature-graphic.png"],
  },
}

const platforms = ["PlayStation", "Xbox", "Nintendo Switch 2", "PC"]

const steps = [
  {
    icon: Gamepad2,
    title: "Find what's coming",
    text: "Every upcoming release with cover, platforms, genre and how much hype it has.",
  },
  {
    icon: Bell,
    title: "Tap the bell",
    text: "One tap on any game you're waiting for. No account, no sign-up.",
  },
  {
    icon: Sparkles,
    title: "Get the reminder",
    text: "A week before, the day before and on launch day. If it's delayed, the reminder moves too.",
  },
]

const showcases = [
  {
    eyebrow: "Upcoming",
    title: (
      <>
        Every upcoming game, <span className="text-gradient">in one place</span>
      </>
    ),
    text: "A clean grid of what's about to launch, sorted by date. Filter by hype to keep only the big ones, or by platform and genre to keep only yours.",
    points: [
      "Countdown on every game",
      "Hype filter: all, 🔥, 🔥🔥 or 🔥🔥🔥",
      "Search by name in seconds",
    ],
    screen: "/cominggames/screens/home.webp",
    alt: "Coming Games: upcoming games grid",
  },
  {
    eyebrow: "Game page",
    title: (
      <>
        Everything about a game,{" "}
        <span className="text-gradient">one tap away</span>
      </>
    ),
    text: "Trailer, screenshots, ratings, studios and where to buy it. The summary can be translated into your language without leaving the app.",
    points: [
      "“Remind me” right under the title",
      "Add the release day to your calendar",
      "Share it with a friend",
    ],
    screen: "/cominggames/screens/detail.webp",
    alt: "Coming Games: game page with the Remind me button",
  },
  {
    eyebrow: "Reminders",
    title: (
      <>
        Your watchlist, <span className="text-gradient">counting down</span>
      </>
    ),
    text: "Every game you follow, with the next one front and centre. Release dates are kept up to date, so a delay never catches you out.",
    points: [
      "Next release and days left at a glance",
      "Follows date changes automatically",
      "Import your Steam wishlist (Premium)",
    ],
    screen: "/cominggames/screens/reminders.webp",
    alt: "Coming Games: reminders tab with the next release",
  },
  {
    eyebrow: "Weekly recap",
    title: (
      <>
        Everything that came out{" "}
        <span className="text-gradient">this week</span>
      </>
    ),
    text: "Every Tuesday, a recap of what was released, starting with the games you were waiting for.",
    points: [
      "Your games first",
      "The rest of the week's releases",
      "Optional, one notification a week",
    ],
    screen: "/cominggames/screens/recap.webp",
    alt: "Coming Games: this week's releases",
  },
]

const extras = [
  {
    icon: Search,
    title: "Search & filters",
    text: "By name, hype, platform and genre.",
  },
  {
    icon: CalendarDays,
    title: "Release calendar",
    text: "The whole month at a glance (Premium).",
  },
  {
    icon: LayoutGrid,
    title: "Home screen widget",
    text: "Your next launches without opening the app.",
  },
  {
    icon: CalendarPlus,
    title: "Add to calendar",
    text: "Put a release day in your own calendar.",
  },
  {
    icon: Languages,
    title: "4 languages",
    text: "English, Català, Español and 中文.",
  },
  {
    icon: Moon,
    title: "Light & dark",
    text: "Follows your phone, or pick one.",
  },
]

const premium = [
  "No ads",
  "Unlimited reminders",
  "Release calendar",
  "Steam wishlist import",
]

const gallery = [1, 2, 3, 4, 5].map((n) => `/cominggames/store/${n}.webp`)

export default function ComingGamesPage() {
  return (
    <div className="relative isolate flex min-h-svh w-full flex-col items-center overflow-x-clip bg-[var(--brand-night)] text-white">
      <Backdrop />

      <SiteNav
        brand={
          <div className="flex items-center gap-3">
            <Link
              href="/"
              aria-label="Back to avicarpio.com"
              className="rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cominggames/icon.png"
              alt=""
              className="h-8 w-8 rounded-[0.6rem]"
            />
            <span className="font-semibold tracking-tight">Coming Games</span>
          </div>
        }
        links={[
          { label: "How it works", href: "#how" },
          { label: "Features", href: "#features" },
          { label: "Screenshots", href: "#screenshots" },
          { label: "Premium", href: "#premium" },
        ]}
        action={<PlayButton size="sm" />}
      />

      <main className="flex w-full flex-col items-center">
        {/* Hero */}
        <section className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pt-16 pb-24 md:pt-24 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
            <FadeIn>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--brand-amber)]/30 bg-[var(--brand-amber)]/10 px-4 py-1.5 text-sm font-medium text-[var(--brand-amber)]">
                <span className="animate-pulse-ring h-2 w-2 rounded-full bg-[var(--brand-amber)]" />
                Out now on Google Play
              </span>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="text-5xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Never miss a <span className="text-gradient">release day</span>.
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="max-w-xl text-lg leading-relaxed text-pretty text-white/65 sm:text-xl">
                Every upcoming game on PlayStation, Xbox, Nintendo and PC. Tap
                the bell and we&apos;ll remind you a week before, the day before
                and on launch day.
              </p>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <PlayButton />
                <a
                  href="#how"
                  className="inline-flex h-14 items-center gap-2 rounded-full border border-white/15 px-6 font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
                >
                  See how it works <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={320}>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/50 lg:justify-start">
                {["Free", "No account needed", "4 languages"].map((item) => (
                  <li key={item} className="inline-flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-[var(--brand-pink)]" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Two phones and a notification, floating */}
          <FadeIn
            delay={200}
            className="relative mx-auto h-[34rem] w-full max-w-[30rem] sm:h-[40rem]"
          >
            <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-red)]/30 blur-[100px]" />
            <div className="animate-float-tilted absolute top-10 left-0 w-[52%] opacity-90 sm:top-12">
              <Phone
                src="/cominggames/screens/detail.webp"
                alt="A game page in Coming Games"
              />
            </div>
            <div className="animate-float absolute top-0 right-0 w-[58%]">
              <Phone
                src="/cominggames/screens/home.webp"
                alt="Upcoming games in Coming Games"
                priority
              />
            </div>
            <div className="animate-float absolute bottom-10 left-1/2 w-[85%] max-w-sm -translate-x-1/2 [animation-delay:1.2s] sm:bottom-16">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1b1c27]/90 p-3.5 shadow-2xl backdrop-blur-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/cominggames/icon.png"
                  alt=""
                  className="h-10 w-10 shrink-0 rounded-xl"
                />
                <div className="min-w-0 text-left">
                  <p className="flex items-center justify-between text-xs text-white/50">
                    Coming Games <span>now</span>
                  </p>
                  <p className="truncate text-sm font-semibold">Out today 🎉</p>
                  <p className="truncate text-sm text-white/70">
                    Valor Mortis is available today!
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Platforms */}
        <section className="w-full border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-sm font-semibold tracking-wide text-white/45 uppercase">
            <span className="text-white/30 normal-case">Releases for</span>
            {platforms.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32"
        >
          <FadeIn>
            <SectionHeading
              eyebrow="How it works"
              title={
                <>
                  Three steps to{" "}
                  <span className="text-gradient">never miss one</span>
                </>
              }
            />
          </FadeIn>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <FadeIn key={step.title} delay={i * 100}>
                  <div className="gradient-border h-full p-7">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-pink)] to-[var(--brand-purple)] shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-5xl font-extrabold text-white/[0.06]">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-white/60">
                      {step.text}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </section>

        {/* Showcases */}
        <section
          id="features"
          className="mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 pb-24 md:gap-36"
        >
          {showcases.map((s, i) => (
            <div
              key={s.eyebrow}
              className="grid items-center gap-12 md:grid-cols-2 md:gap-16"
            >
              <FadeIn className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative mx-auto w-full max-w-[19rem]">
                  <div className="absolute inset-0 -z-10 translate-y-8 scale-110 rounded-full bg-[var(--brand-purple)]/30 blur-[90px]" />
                  <Phone src={s.screen} alt={s.alt} />
                </div>
              </FadeIn>
              <FadeIn delay={120}>
                <SectionHeading
                  align="left"
                  eyebrow={s.eyebrow}
                  title={s.title}
                  description={s.text}
                />
                <ul className="mt-7 flex flex-col gap-3">
                  {s.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-pink)]/15">
                        <Check className="h-3.5 w-3.5 text-[var(--brand-pink)]" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          ))}
        </section>

        {/* Extras */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32">
          <FadeIn>
            <SectionHeading
              eyebrow="And also"
              title="The little things that make it yours"
            />
          </FadeIn>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((e, i) => {
              const Icon = e.icon
              return (
                <FadeIn key={e.title} delay={i * 60}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.05]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-[var(--brand-pink)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{e.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">
                        {e.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </section>

        {/* Gallery */}
        <section id="screenshots" className="w-full pb-24 md:pb-32">
          <FadeIn>
            <SectionHeading
              eyebrow="Screenshots"
              title="Take a look inside"
              className="px-6"
            />
          </FadeIn>
          <FadeIn delay={100}>
            {/* Centered when it fits, scrollable from the first image when it doesn't */}
            <div className="mt-14 snap-x snap-mandatory overflow-x-auto pb-6 [scrollbar-width:thin]">
              <div className="mx-auto flex w-max gap-5 px-6">
                {gallery.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={`Coming Games screenshot ${i + 1}`}
                    loading="lazy"
                    className="h-[28rem] w-auto shrink-0 snap-center rounded-3xl border border-white/10 shadow-2xl sm:h-[34rem]"
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Premium */}
        <section
          id="premium"
          className="mx-auto w-full max-w-4xl px-6 pb-24 md:pb-32"
        >
          <FadeIn>
            <div className="gradient-border relative overflow-hidden p-8 sm:p-12">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--brand-amber)]/15 blur-[80px]" />
              <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
                <SectionHeading
                  align="left"
                  eyebrow="Premium"
                  title={
                    <>
                      One payment.{" "}
                      <span className="text-gradient">Yours forever.</span>
                    </>
                  }
                  description="Coming Games is free. Premium is a single, optional purchase that removes the ads and unlocks everything else. No subscription."
                />
                <ul className="flex flex-col gap-3">
                  {premium.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-medium"
                    >
                      <Flame className="h-4 w-4 text-[var(--brand-amber)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Final call */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-28">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--brand-red)] via-[#b8336d] to-[var(--brand-purple)] px-8 py-16 text-center sm:px-16">
              <div className="bg-dots absolute inset-0 opacity-60" />
              <div className="relative flex flex-col items-center gap-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/cominggames/icon.png"
                  alt="Coming Games icon"
                  className="h-20 w-20 rounded-[1.4rem] shadow-2xl ring-4 ring-white/20"
                />
                <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
                  Be ready for every launch day.
                </h2>
                <p className="max-w-lg text-lg text-white/80">
                  Download Coming Games for free and start following the games
                  you can&apos;t wait for.
                </p>
                <PlayButton className="bg-[var(--brand-night)] bg-none shadow-2xl hover:bg-black" />
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <SiteFooter
        links={[
          { label: "Press kit", href: "/cominggames/press-kit.zip" },
          { label: "Contact", href: "mailto:avicarpio@gmail.com" },
          { label: "avicarpio.com", href: "/" },
        ]}
      />
    </div>
  )
}
