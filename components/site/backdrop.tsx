import { cn } from "@/lib/utils"

/** The glows and dot grid behind every page: the same night sky as the app. */
export function Backdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[var(--brand-red)]/25 blur-[140px]" />
      <div className="absolute top-[30%] -right-48 h-[40rem] w-[40rem] rounded-full bg-[var(--brand-purple)]/25 blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-[var(--brand-purple)]/15 blur-[140px]" />
      <div className="bg-dots absolute inset-x-0 top-0 h-[60rem]" />
    </div>
  )
}
