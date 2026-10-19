import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif, Outfit } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

// Outfit stays the sans of Coming Games' page; the home page uses Geist with Instrument Serif
const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://avicarpio.com"),
  title: {
    default: "Àlex Vicente Carpio — Software Engineer",
    template: "%s · Àlex Vicente Carpio",
  },
  description:
    "Software engineer in Barcelona. A running log of the apps, games, mods and data stories I make: oncodata.info, Coming Games and more.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark antialiased",
        fontMono.variable,
        "font-sans",
        outfit.variable,
        geist.variable,
        serif.variable
      )}
    >
      <body className="bg-[var(--brand-night)]">
        {/* Dark only: the home page is neutral, Coming Games' page keeps its own colours */}
        <ThemeProvider forcedTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
