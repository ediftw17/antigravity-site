"use client";

import { useEffect } from "react";

export default function EdgeEffects() {
  useEffect(() => {
    const EDGE = 50;

    function applyEdgeEffects() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const elements = document.querySelectorAll(
        "h1, h2, h3, p, a:not(.nav-link), span.section-label, button, img"
      );

      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const fromLeft = Math.min(cx / EDGE, 1);
        const fromRight = Math.min((vw - cx) / EDGE, 1);
        const fromTop = Math.min(cy / EDGE, 1);
        const fromBottom = Math.min((vh - cy) / EDGE, 1);

        const edgeFactor = Math.min(fromLeft, fromRight, fromTop, fromBottom);

        if (edgeFactor < 1) {
          const intensity = 1 - edgeFactor;
          const skewX = (fromRight - fromLeft) * intensity * 0.8;
          const skewY = (fromBottom - fromTop) * intensity * 0.5;
          const rgbShift = Math.round(intensity * 1.5);

          htmlEl.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
          htmlEl.style.textShadow =
            rgbShift > 0
              ? `${rgbShift}px 0 rgba(255,0,50,0.15), ${-rgbShift}px 0 rgba(0,200,255,0.15)`
              : "none";
          htmlEl.style.transition = "transform 0.4s ease-out, text-shadow 0.4s ease-out";
        } else {
          if (htmlEl.style.transform) {
            htmlEl.style.transform = "";
            htmlEl.style.textShadow = "";
          }
        }
      });
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          applyEdgeEffects();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", applyEdgeEffects);
    applyEdgeEffects();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", applyEdgeEffects);
    };
  }, []);

  return null;
}
