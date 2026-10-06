import { cn } from "@/lib/utils"

/** Small label, big title and an optional line of context, centered or left. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "center" | "left"
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/70 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[var(--brand-pink)] to-[var(--brand-amber)]" />
        {eyebrow}
      </span>
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-pretty text-white/60 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
