"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { loadGsap } from "@/lib/gsap";

/**
 * Scroll entrance for content below the fold.
 * The hidden start state comes from CSS (`[data-reveal]` under `@media (scripting: enabled)`),
 * so it applies before first paint and nothing flashes visible and then hides.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds when several reveals share one trigger zone. */
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reduced motion: no entrance animation at all, and nothing is hidden in the first place.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Fallback: if the GSAP chunk never arrives, show the content rather than leave it hidden.
    const fallback = window.setTimeout(() => el.classList.add("is-revealed"), 2500);
    let revert: (() => void) | undefined;
    let cancelled = false;
    // Shared singleton: one gsap/ScrollTrigger load and one registration for the whole page.
    (async () => {
      try {
        const { gsap } = await loadGsap();
        if (cancelled) return;
        window.clearTimeout(fallback);
        // Cancels the CSS failsafe for this element; GSAP's own from-state takes over.
        el.classList.add("fx-ready");
        const ctx = gsap.context(() => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              delay,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            },
          );
        }, el);
        revert = () => ctx.revert();
      } catch {
        // GSAP unavailable (offline or blocked chunk): show the content instead of leaving it hidden.
        el.classList.add("is-revealed");
      }
    })();
    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
      revert?.();
    };
  }, [delay]);

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
