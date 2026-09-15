import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Bell,
  Search,
  CalendarDays,
  Share2,
  LayoutGrid,
  Languages,
  Star,
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "ComingGames — Never miss a game launch",
  description:
    "Track upcoming game releases, set reminders and get notified a week before, the day before and on launch day.",
}

// Flip to true once the app is live on Google Play.
const PUBLISHED_ON_PLAY = false
const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.congobill.cominggames"
const PRIVACY_URL = "https://privacypolicy.avicarpio.com"

const features = [
  { icon: CalendarDays, title: "Upcoming releases", text: "Browse games sorted by release date, with covers, platforms, genres and hype." },
  { icon: Bell, title: "Release reminders", text: "Tap the bell and get notified one week before, the day before and on launch day." },
  { icon: Search, title: "Search & filters", text: "Find games by name and filter by platform and genre." },
  { icon: Star, title: "Game details", text: "Summary, platforms, genres, ratings, screenshots and trailers." },
  { icon: Share2, title: "Share & calendar", text: "Share a game or add its release day to your calendar in one tap." },
  { icon: LayoutGrid, title: "Home screen widget", text: "See the next launches at a glance." },
  { icon: Languages, title: "4 languages", text: "English, Catalan, Spanish and Chinese. Light and dark themes." },
  { icon: Sparkles, title: "Premium", text: "One payment to remove ads and unlock unlimited reminders." },
]

const screenshots = [
  "/cominggames/screenshot-1.png",
  "/cominggames/screenshot-2.png",
  "/cominggames/screenshot-3.png",
  "/cominggames/screenshot-4.png",
  "/cominggames/screenshot-5.png",
]

export default function ComingGamesPage() {
  return (
    <div className="relative flex min-h-svh w-full flex-col items-center bg-gradient-to-b from-background via-muted/20 to-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            ← Àlex Vicente
          </Link>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="rounded-full">Android</Badge>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="flex w-full max-w-3xl min-w-0 flex-col gap-16 px-4 pb-20 text-base leading-relaxed sm:px-6 md:gap-20">
        {/* Hero */}
        <section className="flex flex-col items-center gap-6 pt-8 text-center">
          <FadeIn>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cominggames/feature-graphic.png"
              alt="ComingGames"
              className="w-full rounded-2xl ring-1 ring-foreground/10"
            />
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">ComingGames</h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="max-w-lg text-sm text-muted-foreground sm:text-base">
              Your guide to the games that are about to launch. Track upcoming releases,
              set reminders and never miss a release day.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {PUBLISHED_ON_PLAY ? (
                <a href={PLAY_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full px-5">Get it on Google Play</Button>
                </a>
              ) : (
                <Button className="rounded-full px-5" disabled>
                  Coming soon on Google Play
                </Button>
              )}
              <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-5">
                  Privacy policy
                </Button>
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Features */}
        <section className="w-full">
          <FadeIn>
            <div className="pb-8 text-center">
              <Badge variant="default" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                What it does
              </Badge>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <FadeIn key={f.title} delay={i * 60}>
                  <Card size="sm" className="h-full">
                    <CardContent className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <div className="rounded-lg bg-muted p-1.5 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-sm font-semibold">{f.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{f.text}</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              )
            })}
          </div>
        </section>

        {/* Screenshots */}
        <section className="w-full">
          <FadeIn>
            <div className="pb-8 text-center">
              <Badge variant="default" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                Screenshots
              </Badge>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
              {screenshots.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`ComingGames screenshot ${i + 1}`}
                  className="h-96 w-auto shrink-0 snap-center rounded-2xl ring-1 ring-foreground/10"
                />
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Footer */}
        <footer className="flex flex-col items-center gap-2 text-center text-xs text-muted-foreground sm:text-sm">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              Privacy policy
            </a>
            <a href="/cominggames/press-kit.zip" className="underline-offset-4 hover:underline">
              Press kit
            </a>
            <a href="mailto:avicarpio@gmail.com" className="underline-offset-4 hover:underline">
              Contact
            </a>
            <a href="https://avicarpio.com" className="underline-offset-4 hover:underline">
              avicarpio.com
            </a>
          </div>
          <p className="pt-1">© {new Date().getFullYear()} Àlex Vicente Carpio · Congodev</p>
        </footer>
      </div>
    </div>
  )
}
