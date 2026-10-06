import { cn } from "@/lib/utils"

/**
 * Whether Coming Games is public on Google Play. While false (an app in review, or a
 * future one), every button on the site reads "coming soon" instead of linking.
 */
export const COMING_GAMES_ON_PLAY = true
export const COMING_GAMES_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.congobill.cominggames"

function PlayLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        fill="#00D7FE"
        d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1 9.3-9.3v-.2L3.7 2.2z"
      />
      <path
        fill="#FFCE00"
        d="M16.1 15.6 13 12.5v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1z"
      />
      <path
        fill="#FF3A44"
        d="M16.2 15.5 13 12.4l-9.4 9.3c.4.4.9.4 1.6.1l11-6.3"
      />
      <path fill="#00F076" d="M16.2 9.3 5.2 3c-.7-.4-1.2-.3-1.6.1L13 12.4z" />
    </svg>
  )
}

/** The store button: a link when the app is live, a "coming soon" badge until then. */
export function PlayButton({
  size = "lg",
  className,
}: {
  size?: "sm" | "lg"
  className?: string
}) {
  const small = size === "sm"
  const content = (
    <>
      <PlayLogo className={small ? "h-4 w-4" : "h-6 w-6"} />
      <span className="flex flex-col items-start leading-none">
        {!small && (
          <span className="text-[10px] font-medium tracking-wide text-white/70 uppercase">
            {COMING_GAMES_ON_PLAY ? "Get it on" : "Coming soon to"}
          </span>
        )}
        <span className={cn("font-semibold", small ? "text-sm" : "text-lg")}>
          {small
            ? COMING_GAMES_ON_PLAY
              ? "Get the app"
              : "Coming soon"
            : "Google Play"}
        </span>
      </span>
    </>
  )
  const classes = cn(
    "inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--brand-pink)] to-[var(--brand-red)] text-white shadow-[0_10px_40px_-10px_var(--brand-red)] transition-all",
    small ? "h-10 px-4" : "h-14 px-6",
    COMING_GAMES_ON_PLAY
      ? "hover:scale-[1.03] hover:shadow-[0_14px_50px_-8px_var(--brand-red)]"
      : "cursor-default",
    className
  )

  return COMING_GAMES_ON_PLAY ? (
    <a
      href={COMING_GAMES_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {content}
    </a>
  ) : (
    <span className={classes} aria-disabled>
      {content}
    </span>
  )
}
