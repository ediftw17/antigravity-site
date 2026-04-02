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

      {/* Bottom edge — blur + chromatic aberration */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "clamp(5rem, 12vw, 10rem)",
        zIndex: 90,
        pointerEvents: "none",
        maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
      }}>
        {/* Red channel — shifted left */}
        <div style={{
          position: "absolute",
          inset: 0,
          transform: "translateX(-2px)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          background: "rgba(255, 0, 50, 0.06)",
          mixBlendMode: "screen",
        }} />
        {/* Cyan channel — shifted right */}
        <div style={{
          position: "absolute",
          inset: 0,
          transform: "translateX(2px)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          background: "rgba(0, 200, 255, 0.06)",
          mixBlendMode: "screen",
        }} />
        {/* Base blur */}
        <div style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }} />
      </div>

      {/* Left edge — blur + chromatic aberration */}
      <div style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        width: "clamp(3rem, 6vw, 5rem)",
        zIndex: 89,
        pointerEvents: "none",
        maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
      }}>
        {/* Red channel — shifted up */}
        <div style={{
          position: "absolute",
          inset: 0,
          transform: "translateY(-2px)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          background: "rgba(255, 0, 50, 0.05)",
          mixBlendMode: "screen",
        }} />
        {/* Cyan channel — shifted down */}
        <div style={{
          position: "absolute",
          inset: 0,
          transform: "translateY(2px)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          background: "rgba(0, 200, 255, 0.05)",
          mixBlendMode: "screen",
        }} />
        {/* Base blur */}
        <div style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }} />
      </div>

      {/* Right edge — blur + chromatic aberration */}
      <div style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        width: "clamp(3rem, 6vw, 5rem)",
        zIndex: 89,
        pointerEvents: "none",
        maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
      }}>
        {/* Red channel — shifted up */}
        <div style={{
          position: "absolute",
          inset: 0,
          transform: "translateY(-2px)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          background: "rgba(255, 0, 50, 0.05)",
          mixBlendMode: "screen",
        }} />
        {/* Cyan channel — shifted down */}
        <div style={{
          position: "absolute",
          inset: 0,
          transform: "translateY(2px)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          background: "rgba(0, 200, 255, 0.05)",
          mixBlendMode: "screen",
        }} />
        {/* Base blur */}
        <div style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }} />
      </div>
    </>
  );
}
