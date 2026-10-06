import type { Metadata } from "next"
import { Geist_Mono, Outfit } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })

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
    "Software engineer specialised in Unity and frontend. Maker of Coming Games, an Android app to never miss a game release.",
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
        outfit.variable
      )}
    >
      <body className="bg-[var(--brand-night)]">
        {/* One dark identity for the whole site, shared with Coming Games */}
        <ThemeProvider forcedTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
