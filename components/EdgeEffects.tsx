"use client";

export default function EdgeEffects() {
  return (
    <>
      {/* Top blur fade — seamless with nav */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "clamp(6rem, 15vw, 12rem)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
        zIndex: 90,
        pointerEvents: "none",
      }} />

      {/* Bottom blur fade */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "clamp(6rem, 15vw, 12rem)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        maskImage: "linear-gradient(to top, black 0%, black 20%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 0%, black 20%, transparent 100%)",
        zIndex: 90,
        pointerEvents: "none",
      }} />
    </>
  );
}
