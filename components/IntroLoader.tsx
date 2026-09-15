"use client";

import { useEffect, useRef, useState } from "react";
import { loadGsap } from "@/lib/gsap";

const DIGIT_STRIP = "0123456789";

// Reference-counted scroll lock: effect re-runs (StrictMode, Fast Refresh)
// can interleave as setup, setup, cleanup, cleanup — the second setup would
// otherwise snapshot "hidden" and its cleanup would strand the page locked.
let scrollLocks = 0;
let lockedOverflow = "";

function lockScroll() {
  if (scrollLocks === 0) {
    lockedOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  scrollLocks += 1;
}

function unlockScroll() {
  scrollLocks = Math.max(0, scrollLocks - 1);
  if (scrollLocks === 0) document.body.style.overflow = lockedOverflow;
}

/**
 * Odometer-style loader: a rolling 000 → 100 counter over a hairline
 * progress bar, exiting through a staggered panel lift.
 * Decorative only (aria-hidden) and skipped under reduced motion.
 */
export default function IntroLoader() {
  const overlay = useRef<HTMLDivElement>(null);
  const strips = useRef<Array<HTMLSpanElement | null>>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setVisible(false));
      return () => cancelAnimationFrame(frame);
    }

    // No scrolling under the loader; the counter guarantees the restore
    // even when setups and cleanups interleave.
    lockScroll();

    // Shared singleton: gsap stays out of the initial bundle until the intro needs it.
    let revert: (() => void) | undefined;
    let cancelled = false;
    let released = false;
    const release = () => {
      if (released) return;
      released = true;
      unlockScroll();
    };
    (async () => {
      try {
        const { gsap } = await loadGsap();
        if (cancelled || !overlay.current) return;
        const ctx = gsap.context(() => {
          const counter = { v: 0 };
          const render = () => {
            const digits = String(Math.min(100, Math.floor(counter.v))).padStart(3, "0");
            strips.current.forEach((strip, slot) => {
              if (strip) gsap.set(strip, { yPercent: -Number(digits[slot]) * 10 });
            });
          };

          const timeline = gsap.timeline({
            defaults: { ease: "power4.inOut" },
            onComplete: () => {
              release();
              setVisible(false);
            },
          });

          timeline
            .from("[data-intro-mark]", { yPercent: 120, duration: 0.7, stagger: 0.08 })
            .to(counter, { v: 100, duration: 1.3, ease: "power2.inOut", onUpdate: render }, "<0.1")
            .to("[data-intro-progress]", { scaleX: 1, duration: 1.3, ease: "power2.inOut" }, "<")
            .to("[data-intro-panel]", { yPercent: -100, duration: 0.8, stagger: 0.08 }, "+=0.15")
            .to(overlay.current, { autoAlpha: 0, duration: 0.15 }, "<0.55");
        }, overlay);
        revert = () => ctx.revert();
      } catch {
        release();
        setVisible(false);
      }
    })();

    return () => {
      cancelled = true;
      release();
      revert?.();
    };

  }, []);

  if (!visible) return null;

  return (
    <div ref={overlay} className="fixed inset-0 z-[100] overflow-hidden bg-ink text-background" aria-hidden="true">
      <div className="absolute inset-0 flex">
        {[0, 1, 2, 3].map((panel) => (
          <div key={panel} data-intro-panel className="h-full flex-1 border-r border-background/15 bg-ink last:border-0" />
        ))}
      </div>
      <div className="relative flex h-full flex-col justify-between p-5 md:p-12">
        <div className="overflow-hidden">
          <p data-intro-mark className="label-latin text-background/60 uppercase">Nam / Portfolio</p>
        </div>
        <div>
          <div className="overflow-hidden">
            <p data-intro-mark className="text-[clamp(4rem,18vw,15rem)] font-extrabold leading-[0.76] tracking-[-0.08em]">NAM.</p>
          </div>
          <div className="mt-6 flex items-end justify-between gap-6">
            <div className="overflow-hidden pb-2">
              <p data-intro-mark className="label-latin text-background/60 uppercase">Loading / 2026</p>
            </div>
            <div className="overflow-hidden">
              <p
                data-intro-mark
                className="flex items-start font-extrabold tabular-nums leading-none text-[clamp(4.5rem,12vw,9rem)]"
              >
                {[0, 1, 2].map((slot) => (
                  <span key={slot} className="block h-[1em] overflow-hidden tracking-[-0.04em]">
                    <span
                      ref={(el) => {
                        strips.current[slot] = el;
                      }}
                      className="flex flex-col"
                    >
                      {DIGIT_STRIP.split("").map((digit) => (
                        <span key={digit} className="block h-[1em] leading-[1em]">
                          {digit}
                        </span>
                      ))}
                    </span>
                  </span>
                ))}
                <span className="ml-[0.12em] mt-[0.15em] shrink-0 text-[0.22em] font-bold text-background/60">%</span>
              </p>
            </div>
          </div>
          <div className="mt-6 h-px w-full origin-left bg-background/25">
            <div data-intro-progress className="h-full origin-left scale-x-0 bg-accent" />
          </div>
        </div>
      </div>
    </div>
  );
}
