"use client"

import { useEffect, useRef } from "react"

/**
 * Attaches a scroll-based reveal animation to a DOM element.
 *
 * On mount the element receives `.reveal-hidden` (opacity 0, translated down).
 * When 10% of the element enters the viewport, `.visible` is added after a
 * 100 ms delay, triggering the CSS transition defined in globals.css.
 *
 * Starting visible (no class) ensures SSR output is readable without JS.
 * The hook adds the hidden class client-side to avoid a flash of invisible content.
 *
 * @returns A ref to attach to the target HTMLElement.
 *
 * @example
 * const ref = useScrollReveal<HTMLElement>()
 * return <section ref={ref} className="scroll-reveal">...</section>
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timer: ReturnType<typeof setTimeout> | null = null

    // Hide the element initially (CSS base is visible for SSR)
    el.classList.add("reveal-hidden")

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay to avoid competing with scroll momentum animations
          timer = setTimeout(() => {
            el.classList.add("visible")
            observer.disconnect()
          }, 100)
        }
      },
      { threshold: 0.1 } // fire when 10% is visible
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timer !== null) clearTimeout(timer)
    }
  }, [])

  return ref
}
