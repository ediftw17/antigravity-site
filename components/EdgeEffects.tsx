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

      {/* Bottom edge */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "clamp(4rem, 10vw, 8rem)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        zIndex: 90,
        pointerEvents: "none",
      }} />

      {/* Left edge */}
      <div style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        width: "clamp(2rem, 5vw, 4rem)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
        zIndex: 89,
        pointerEvents: "none",
      }} />

      {/* Right edge */}
      <div style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        width: "clamp(2rem, 5vw, 4rem)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
        zIndex: 89,
        pointerEvents: "none",
      }} />
    </>
  );
}
