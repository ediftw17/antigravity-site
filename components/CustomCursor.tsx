"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const visible = useRef(false);
  const hovering = useRef(false);
  const rotation = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const el = cursorRef.current;
    const svg = svgRef.current;
    if (!el || !svg) return;

    const onMove = (e: MouseEvent) => {
      if (!visible.current) {
        visible.current = true;
        el.style.opacity = "1";
      }
      el.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        if (!hovering.current) {
          hovering.current = true;
          rotation.current += 90;
          svg.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
          svg.style.transform = `rotate(${rotation.current}deg)`;
        }
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        hovering.current = false;
      }
    };

    const onLeave = () => { visible.current = false; el.style.opacity = "0"; };
    const onEnter = () => { visible.current = true; el.style.opacity = "1"; };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
        opacity: 0,
        willChange: "transform",
      }}
    >
      <svg ref={svgRef} width="24" height="24" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="4" x2="12" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
