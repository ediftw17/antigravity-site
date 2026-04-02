"use client";

export default function EdgeEffects() {
  return (
    <>
      <style>{`
        .edge-fade-top,
        .edge-fade-bottom {
          position: fixed;
          left: 0;
          right: 0;
          z-index: 90;
          pointer-events: none;
          height: clamp(6rem, 15vw, 12rem);
        }

        .edge-fade-top {
          top: 0;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          mask-image: linear-gradient(to bottom, black 0%, black 30%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 30%, transparent 100%);
        }

        .edge-fade-bottom {
          bottom: 0;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          mask-image: linear-gradient(to top, black 0%, black 20%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, black 0%, black 20%, transparent 100%);
        }

        /* Chromatic aberration — RGB split at edges */
        .glitch-edge {
          position: fixed;
          z-index: 89;
          pointer-events: none;
          mix-blend-mode: screen;
        }

        /* Top glitch — red channel shifts left, blue shifts right */
        .glitch-top {
          top: 0;
          left: 0;
          right: 0;
          height: clamp(4rem, 10vw, 8rem);
          background:
            linear-gradient(to bottom,
              rgba(255, 0, 50, 0.12) 0%,
              rgba(255, 0, 50, 0.04) 30%,
              transparent 100%
            );
          transform: translateX(-2px);
        }

        .glitch-top::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to bottom,
              rgba(0, 150, 255, 0.12) 0%,
              rgba(0, 150, 255, 0.04) 30%,
              transparent 100%
            );
          transform: translateX(4px);
          mix-blend-mode: screen;
        }

        /* Bottom glitch */
        .glitch-bottom {
          bottom: 0;
          left: 0;
          right: 0;
          height: clamp(4rem, 10vw, 8rem);
          background:
            linear-gradient(to top,
              rgba(255, 0, 50, 0.1) 0%,
              rgba(255, 0, 50, 0.03) 30%,
              transparent 100%
            );
          transform: translateX(2px);
        }

        .glitch-bottom::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top,
              rgba(0, 150, 255, 0.1) 0%,
              rgba(0, 150, 255, 0.03) 30%,
              transparent 100%
            );
          transform: translateX(-4px);
          mix-blend-mode: screen;
        }

        /* Left + right glitch */
        .glitch-left {
          top: 0;
          left: 0;
          bottom: 0;
          width: clamp(2rem, 5vw, 5rem);
          background:
            linear-gradient(to right,
              rgba(255, 0, 50, 0.08) 0%,
              transparent 100%
            );
          transform: translateY(-1px);
        }

        .glitch-left::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right,
              rgba(0, 150, 255, 0.08) 0%,
              transparent 100%
            );
          transform: translateY(2px);
          mix-blend-mode: screen;
        }

        .glitch-right {
          top: 0;
          right: 0;
          bottom: 0;
          width: clamp(2rem, 5vw, 5rem);
          background:
            linear-gradient(to left,
              rgba(255, 0, 50, 0.08) 0%,
              transparent 100%
            );
          transform: translateY(1px);
        }

        .glitch-right::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to left,
              rgba(0, 150, 255, 0.08) 0%,
              transparent 100%
            );
          transform: translateY(-2px);
          mix-blend-mode: screen;
        }
      `}</style>

      {/* Blur fades */}
      <div className="edge-fade-top" />
      <div className="edge-fade-bottom" />

      {/* Chromatic aberration glitch — all 4 edges */}
      <div className="glitch-edge glitch-top" />
      <div className="glitch-edge glitch-bottom" />
      <div className="glitch-edge glitch-left" />
      <div className="glitch-edge glitch-right" />
    </>
  );
}
