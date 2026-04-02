"use client";

export default function EdgeEffects() {
  return (
    <>
      {/* Top: blur + perspective warp */}
      <div style={{
        position: "fixed",
        top: 0,
        left: "-5%",
        right: "-5%",
        height: "clamp(8rem, 18vw, 14rem)",
        perspective: "400px",
        perspectiveOrigin: "50% 0%",
        zIndex: 90,
        pointerEvents: "none",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          maskImage: "linear-gradient(to bottom, black 0%, black 25%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 25%, transparent 100%)",
          transform: "rotateX(4deg)",
          transformOrigin: "50% 0%",
        }} />
      </div>

      {/* Bottom: blur + perspective warp */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: "-5%",
        right: "-5%",
        height: "clamp(8rem, 18vw, 14rem)",
        perspective: "400px",
        perspectiveOrigin: "50% 100%",
        zIndex: 90,
        pointerEvents: "none",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          maskImage: "linear-gradient(to top, black 0%, black 25%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, black 25%, transparent 100%)",
          transform: "rotateX(-4deg)",
          transformOrigin: "50% 100%",
        }} />
      </div>

      {/* Left edge warp */}
      <div style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        width: "clamp(3rem, 8vw, 6rem)",
        perspective: "400px",
        perspectiveOrigin: "0% 50%",
        zIndex: 89,
        pointerEvents: "none",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          transform: "rotateY(-3deg)",
          transformOrigin: "0% 50%",
        }} />
      </div>

      {/* Right edge warp */}
      <div style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        width: "clamp(3rem, 8vw, 6rem)",
        perspective: "400px",
        perspectiveOrigin: "100% 50%",
        zIndex: 89,
        pointerEvents: "none",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          transform: "rotateY(3deg)",
          transformOrigin: "100% 50%",
        }} />
      </div>
    </>
  );
}
