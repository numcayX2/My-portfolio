"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function IntroLoader() {
  const overlay = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setVisible(false));
      return () => cancelAnimationFrame(frame);
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        onComplete: () => setVisible(false),
      });

      timeline
        .from("[data-intro-mark]", { yPercent: 120, duration: 0.7, stagger: 0.08 })
        .to("[data-intro-progress]", { scaleX: 1, duration: 0.7 }, "<0.15")
        .to("[data-intro-panel]", { yPercent: -100, duration: 0.9, stagger: 0.08 }, "+=0.15")
        .to(overlay.current, { autoAlpha: 0, duration: 0.15 }, "<0.55");
    }, overlay);

    return () => ctx.revert();
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
          <div className="mt-8 h-px w-full origin-left bg-background/25">
            <div data-intro-progress className="h-full origin-left scale-x-0 bg-accent" />
          </div>
        </div>
        <div className="overflow-hidden text-right">
          <p data-intro-mark className="label-latin text-background/60 uppercase">Loading / 2026</p>
        </div>
      </div>
    </div>
  );
}
