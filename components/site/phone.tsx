import { cn } from "@/lib/utils"

/** An app screen inside a slim phone frame with a punch-hole camera. */
export function Phone({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2.6rem] border border-white/15 bg-[#16171f] p-[0.55rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.03)_inset]",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block h-auto w-full rounded-[2.1rem]"
      />
      <span
        aria-hidden
        className="absolute top-[1.15rem] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10"
      />
    </div>
  )
}
