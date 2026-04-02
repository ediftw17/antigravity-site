"use client";

export default function EdgeEffects() {
  return (
    <>
      {/* Top edge — nav blur strip */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "60px",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(10, 10, 10, 0.6)",
        zIndex: 90,
        pointerEvents: "none",
        transform: "translate3d(0, 0, 0)",
      }} />

      {/* Bottom edge — blur + warp */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "clamp(5rem, 12vw, 10rem)",
        perspective: "400px",
        zIndex: 90,
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          transform: "rotateX(2deg)",
          transformOrigin: "bottom center",
        }} />
      </div>

      {/* Left edge — blur + warp */}
      <div style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        width: "clamp(3rem, 6vw, 5rem)",
        perspective: "300px",
        zIndex: 89,
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          transform: "rotateY(-2deg)",
          transformOrigin: "left center",
        }} />
      </div>

      {/* Right edge — blur + warp */}
      <div style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        width: "clamp(3rem, 6vw, 5rem)",
        perspective: "300px",
        zIndex: 89,
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          transform: "rotateY(2deg)",
          transformOrigin: "right center",
        }} />
      </div>
    </>
  );
}
