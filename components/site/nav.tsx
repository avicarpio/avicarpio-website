import Link from "next/link"

type NavLink = { label: string; href: string }

/** Floating glass bar shared by every page. */
export function SiteNav({
  brand,
  links,
  action,
}: {
  brand: React.ReactNode
  links?: NavLink[]
  action?: React.ReactNode
}) {
  return (
    <header className="sticky top-3 z-50 w-full px-3 sm:top-4 sm:px-6">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-full border border-white/10 bg-[var(--brand-night)]/70 pr-2 pl-5 shadow-[0_8px_30px_rgb(0,0,0,0.35)] backdrop-blur-xl">
        <div className="min-w-0 shrink-0">{brand}</div>
        {links && links.length > 0 && (
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
        <div className="flex shrink-0 items-center gap-2">{action}</div>
      </div>
    </header>
  )
}
