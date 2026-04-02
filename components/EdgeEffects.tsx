"use client";

import { useEffect } from "react";

export default function EdgeEffects() {
  useEffect(() => {
    const EDGE = 30;

    function applyEdgeEffects() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const elements = document.querySelectorAll(
        "section h1, section h2, section h3, section p, section img, section button, section a, section li, section span"
      );

      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const rect = el.getBoundingClientRect();

        // Skip elements fully off screen
        if (rect.bottom < -100 || rect.top > vh + 100) {
          return;
        }

        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const fromLeft = Math.min(cx / EDGE, 1);
        const fromRight = Math.min((vw - cx) / EDGE, 1);
        const fromTop = Math.min(cy / EDGE, 1);
        const fromBottom = Math.min((vh - cy) / EDGE, 1);

        const edgeFactor = Math.min(fromLeft, fromRight, fromTop, fromBottom);

        if (edgeFactor < 1) {
          const intensity = 1 - edgeFactor;
          const skewX = (fromRight - fromLeft) * intensity * 0.3;
          const skewY = (fromBottom - fromTop) * intensity * 0.2;
          const rgbShift = intensity > 0.5 ? 1 : 0;

          htmlEl.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
          if (rgbShift > 0) {
            htmlEl.style.textShadow = `1px 0 rgba(255,0,50,0.12), -1px 0 rgba(0,200,255,0.12)`;
          }
          htmlEl.style.transition = "transform 0.5s ease-out, text-shadow 0.5s ease-out";
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
