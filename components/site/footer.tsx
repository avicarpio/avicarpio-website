import Link from "next/link"

/** The same closing line on every page. */
export function SiteFooter({
  links,
}: {
  links: { label: string; href: string }[]
}) {
  return (
    <footer className="w-full border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-white/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Àlex Vicente Carpio · Congodev</p>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {links.map((link) =>
            link.href.startsWith("/") || link.href.startsWith("#") ? (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>
    </footer>
  )
}
