"use client";

import { useEffect } from "react";

export default function EdgeEffects() {
  useEffect(() => {
    const EDGE = 80; // px from edge where effect starts

    function applyEdgeEffects() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const elements = document.querySelectorAll(
        "h1, h2, h3, p, a, span, button, img, li, div.hiw-card, nav"
      );

      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        // Distance from each edge (0 = at edge, 1 = fully inside)
        const fromLeft = Math.min(cx / EDGE, 1);
        const fromRight = Math.min((vw - cx) / EDGE, 1);
        const fromTop = Math.min(cy / EDGE, 1);
        const fromBottom = Math.min((vh - cy) / EDGE, 1);

        const edgeFactor = Math.min(fromLeft, fromRight, fromTop, fromBottom);

        if (edgeFactor < 1) {
          const intensity = 1 - edgeFactor;
          const skewX = (0.5 - fromLeft + fromRight - 0.5) * intensity * 3;
          const skewY = (0.5 - fromTop + fromBottom - 0.5) * intensity * 2;
          const rgbShift = Math.round(intensity * 3);

          htmlEl.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
          htmlEl.style.textShadow =
            rgbShift > 0
              ? `${rgbShift}px 0 rgba(255,0,50,0.3), ${-rgbShift}px 0 rgba(0,200,255,0.3)`
              : "none";
          htmlEl.style.transition = "transform 0.3s ease, text-shadow 0.3s ease";
        } else {
          htmlEl.style.transform = "";
          htmlEl.style.textShadow = "";
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
