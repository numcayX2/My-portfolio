import type gsap from "gsap";
import type { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Shared GSAP loader: one dynamic import, one ScrollTrigger registration,
 * shared across IntroLoader, ScrollFx and Reveal.
 *
 * Dynamic import (not static): gsap/ScrollTrigger reads window at module
 * scope, so a static import breaks prerendering — and it keeps ~70KB out of
 * the initial bundle until an animation actually needs it.
 */
let pending: Promise<{ gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }> | null = null;

export function loadGsap() {
  if (!pending) {
    pending = (async () => {
      const { default: gsapImpl } = await import("gsap");
      const { ScrollTrigger: ScrollTriggerImpl } = await import("gsap/ScrollTrigger");
      gsapImpl.registerPlugin(ScrollTriggerImpl);
      return { gsap: gsapImpl, ScrollTrigger: ScrollTriggerImpl };
    })();
    // Let a later mount retry after a failed (offline / blocked-chunk) load.
    pending.catch(() => {
      pending = null;
    });
  }
  return pending;
}
