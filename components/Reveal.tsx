"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll entrance for content below the fold.
 * The hidden start state comes from CSS (`[data-reveal]` under `@media (scripting: enabled)`),
 * so it applies before first paint and nothing flashes visible and then hides.
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
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
    // Dynamic import: gsap/ScrollTrigger อ่าน window ตอนโหลด module จึง import แบบ static ในไฟล์ที่ถูก prerender บน server ไม่ได้
    (async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        if (cancelled) return;
        window.clearTimeout(fallback);
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
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
  }, []);

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
