"use client";

import { useEffect, useRef } from "react";

export function DottedSurface({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let count = 0;

    const SEPARATION = 28;
    const AMOUNTX = 50;
    const AMOUNTY = 50;
    const DOT_SIZE = 1.5;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const offsetX = w / 2 - (AMOUNTX * SEPARATION) / 2;
      const offsetY = h / 2 - (AMOUNTY * SEPARATION) / 2;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const x = offsetX + ix * SEPARATION;
          const waveY =
            Math.sin((ix + count) * 0.3) * 8 +
            Math.sin((iy + count) * 0.5) * 8;
          const y = offsetY + iy * SEPARATION + waveY;

          const dist = Math.sqrt(
            Math.pow(ix - AMOUNTX / 2, 2) + Math.pow(iy - AMOUNTY / 2, 2)
          );
          const alpha = Math.max(0, 0.6 - dist * 0.02);

          ctx.beginPath();
          ctx.arc(x, y, DOT_SIZE, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 200, 200, ${alpha})`;
          ctx.fill();
        }
      }

      count += 0.05;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
