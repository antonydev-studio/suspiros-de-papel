import Link from "next/link"
import { cn } from "@/lib/cn"

/** Props for the Button component. */
type ButtonProps = {
  children: React.ReactNode
  /** When provided, renders a Next.js Link instead of a <button>. */
  href?: string
  /** "primary" — filled pill with shadow; "ghost" — borderless underline link. */
  variant?: "primary" | "ghost"
  /** Additional Tailwind classes merged onto the base styles. */
  className?: string
  /** Forwarded to the underlying <a> element (e.g. "_blank"). */
  target?: string
  /** Forwarded to the underlying <a> element (e.g. "noopener noreferrer"). */
  rel?: string
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  target,
  rel,
}: ButtonProps) {

  const base = cn(
    variant === "primary"
      ? "px-10 py-5 bg-primary text-on-primary rounded-full text-lg font-semibold hover:-translate-y-0.5 transition-all shadow-xl shadow-primary/20 inline-flex items-center gap-3 no-underline border-none cursor-pointer"
      : "inline-flex items-center text-on-surface font-semibold border-b-2 border-primary/20 hover:border-primary transition-colors py-1 no-underline bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer",
    className,
  )

  if (href) {
    return (
      <Link href={href} className={base} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  return <button className={base}>{children}</button>
}
