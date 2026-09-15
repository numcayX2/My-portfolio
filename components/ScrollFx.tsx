"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Everything the scroll system may hide before ScrollTrigger takes over.
 *  Each has an `.is-shown` escape hatch so a failed GSAP load can never strand content invisible. */
const PRE_HIDDEN = [
  "[data-wipe]",
  "[data-word]",
  "[data-work-stage] [data-work-shot]",
  "[data-work-stage] [data-work-detail]",
  "[data-work-stage] [data-work-info]",
].join(", ");

/**
 * Scroll-driven motion: reversibly scrubbed reveals, masked display words, a reading-progress navbar,
 * and a pinned work sequence on wide viewports. Decorative only — without JS or under reduced motion
 * everything renders in its final, fully readable state.
 */
export default function ScrollFx() {
  const pathname = usePathname();

  useEffect(() => {
    const progress = document.querySelector<HTMLElement>("#scroll-progress");
    const updateProgress = () => {
      if (!progress) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => {
        window.removeEventListener("scroll", updateProgress);
        window.removeEventListener("resize", updateProgress);
      };
    }

    const show = () =>
      document.querySelectorAll(PRE_HIDDEN).forEach((el) => el.classList.add("is-shown"));

    let refresh: (() => void) | undefined;
    let revert: (() => void) | undefined;
    let cancelled = false;

    // Dynamic import: gsap/ScrollTrigger reads window at module scope, so a static import breaks prerendering.
    (async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        const wide = window.matchMedia("(min-width: 1024px)").matches;
        // Hand the pre-paint state over to GSAP: this cancels the CSS failsafe in the same task,
        // before any repaint, so the hand-off is invisible.
        document.querySelectorAll(PRE_HIDDEN).forEach((el) => el.classList.add("fx-ready"));

        const ctx = gsap.context(() => {
          // 1 / Masked display words open through the scroll, and close again on the way back.
          //    The pinned work heading is excluded — its own pin timeline drives it.
          gsap.utils.toArray<HTMLElement>("[data-split]:not([data-split-pinned])").forEach((heading) => {
            const words = heading.querySelectorAll<HTMLElement>("[data-word]");
            gsap.set(words, { yPercent: 115, opacity: 0 });
            gsap.to(words, {
              yPercent: 0,
              opacity: 1,
              ease: "power3.out",
              stagger: 0.09,
              scrollTrigger: {
                trigger: heading,
                start: "top 92%",
                end: "top 45%",
                scrub: 0.5,
              },
            });
          });

          // 3 / Image clip-wipes, scrubbed in both directions.
          gsap.utils.toArray<HTMLElement>("[data-wipe]").forEach((el) => {
            gsap.fromTo(
              el,
              { clipPath: "inset(14% 10% 14% 10%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "power2.out",
                scrollTrigger: { trigger: el, start: "top 92%", end: "top 55%", scrub: 0.5 },
              },
            );
          });

          // 4 / Counter-drift on the big Latin headings.
          gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((el) => {
            gsap.fromTo(
              el,
              { y: 56 },
              {
                y: -56,
                ease: "none",
                scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
              },
            );
          });

          const workStage = document.querySelector<HTMLElement>("[data-work-stage]");
          const shot = document.querySelector<HTMLElement>("[data-work-stage] [data-work-shot]");
          const detail = document.querySelector<HTMLElement>("[data-work-stage] [data-work-detail]");
          const info = document.querySelector<HTMLElement>("[data-work-stage] [data-work-info]");

          if (wide) {
            // 5 / Work: reveal across its natural scroll range. Pinning this tall gallery clips the lower crop.
            if (workStage && shot && detail && info) {
              const words = document.querySelectorAll<HTMLElement>("#work-heading [data-word]");
              gsap.set(words, { yPercent: 115, opacity: 0 });
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: workStage,
                    start: "top 88%",
                    end: "bottom 35%",
                    scrub: 0.6,
                  },
                })
                .to(
                  words,
                  { yPercent: 0, opacity: 1, stagger: 0.09, ease: "power3.out", duration: 0.35 },
                  0,
                )
                .fromTo(
                  shot,
                  { scale: 0.86, y: 64, opacity: 0 },
                  { scale: 1, y: 0, opacity: 1, ease: "power2.out", duration: 0.5 },
                  0.05,
                )
                .fromTo(
                  Array.from(info.children),
                  { y: 30, opacity: 0 },
                  { y: 0, opacity: 1, stagger: 0.07, ease: "power2.out", duration: 0.5 },
                  0.1,
                );

              gsap.fromTo(
                detail,
                { clipPath: "inset(0 100% 0 0)" },
                {
                  clipPath: "inset(0 0% 0 0)",
                  ease: "power3.inOut",
                  scrollTrigger: {
                    trigger: detail,
                    start: "top 85%",
                    end: "center center",
                    scrub: 0.5,
                  },
                },
              );
            }
          } else if (workStage && shot && detail && info) {
            // Narrow screens: same reversibility without pinning (no viewport-unit or address-bar hazards).
            const words = document.querySelectorAll<HTMLElement>("#work-heading [data-word]");
            gsap.set(words, { yPercent: 115, opacity: 0 });
            gsap.to(words, {
              yPercent: 0,
              opacity: 1,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: { trigger: "#work-heading", start: "top 92%", end: "top 50%", scrub: 0.5 },
            });
            gsap.fromTo(
              [shot, ...Array.from(info.children)],
              { y: 28, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.06,
                ease: "power2.out",
                scrollTrigger: { trigger: workStage, start: "top 88%", end: "top 40%", scrub: 0.5 },
              },
            );
            gsap.fromTo(
              detail,
              { clipPath: "inset(0 100% 0 0)" },
              {
                clipPath: "inset(0 0% 0 0)",
                ease: "power2.out",
                scrollTrigger: { trigger: detail, start: "top 92%", end: "center center", scrub: 0.5 },
              },
            );
          }

          refresh = () => {
            ScrollTrigger.refresh();
            updateProgress();
          };
          window.addEventListener("load", refresh);
          document.fonts?.ready.then(refresh);
        });

        revert = () => {
          if (refresh) window.removeEventListener("load", refresh);
          ctx.revert();
        };
      } catch {
        show();
      }
    })();

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      revert?.();
    };
  }, [pathname]);

  return null;
}
