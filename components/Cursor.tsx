"use client";

import { useEffect, useRef } from "react";

/** Moonshot-style cursor: a tight dot plus a lagging ring, drawn in white that inverts against any surface.
 *  Pointer-fine devices with motion allowed only — touch, keyboard, reduced-motion and no-JS users never see it
 *  and keep the native cursor. The nodes render inert and hidden until the effect activates them. */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("has-custom-cursor");

    const target = { x: -100, y: -100 };
    const dotPos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    const anim = { hovering: false, pressed: false, visible: false, dotScale: 1, ringScale: 1, opacity: 0 };
    let raf = 0;
    let placed = false;

    const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount;

    const frame = () => {
      dotPos.x = lerp(dotPos.x, target.x, 0.4);
      dotPos.y = lerp(dotPos.y, target.y, 0.4);
      ringPos.x = lerp(ringPos.x, target.x, 0.16);
      ringPos.y = lerp(ringPos.y, target.y, 0.16);
      anim.dotScale = lerp(anim.dotScale, (anim.hovering ? 0.65 : 1) * (anim.pressed ? 0.9 : 1), 0.25);
      anim.ringScale = lerp(anim.ringScale, (anim.hovering ? 1.55 : 1) * (anim.pressed ? 0.9 : 1), 0.18);
      anim.opacity = lerp(anim.opacity, anim.visible ? 1 : 0, 0.2);
      dot.style.transform = `translate3d(${dotPos.x}px,${dotPos.y}px,0) translate(-50%,-50%) scale(${anim.dotScale})`;
      ring.style.transform = `translate3d(${ringPos.x}px,${ringPos.y}px,0) translate(-50%,-50%) scale(${anim.ringScale})`;
      dot.style.opacity = anim.opacity < 0.02 && !anim.visible ? "0" : String(anim.opacity);
      ring.style.opacity = dot.style.opacity;
      raf = requestAnimationFrame(frame);
    };

    const onMove = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!placed) {
        placed = true;
        dotPos.x = target.x;
        dotPos.y = target.y;
        ringPos.x = target.x;
        ringPos.y = target.y;
      }
      anim.visible = true;
    };
    const onOver = (event: MouseEvent) => {
      anim.hovering = !!(event.target as HTMLElement).closest?.("a,button");
    };
    const onDown = () => {
      anim.pressed = true;
    };
    const onUp = () => {
      anim.pressed = false;
    };
    const onLeave = () => {
      anim.visible = false;
    };
    const onEnter = () => {
      if (placed) anim.visible = true;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} aria-hidden="true" className="cursor-ring" />
      <div ref={dotRef} aria-hidden="true" className="cursor-dot" />
    </>
  );
}
