import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";

// ─── INSTANT cursor hide injected BEFORE React hydrates ──────────────────────
// Runs at module-eval time (synchronously) → zero flash on hard refresh.
// SSR-safe: guarded with typeof document check.
if (typeof document !== "undefined") {
  const STYLE_ID = "__custom-cursor-hide__";
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.innerHTML = `
      @media (pointer: fine) {
        *, *::before, *::after { cursor: none !important; }
        input, textarea, [contenteditable="true"] { cursor: text !important; }
      }
    `;
    // Insert as first child of <head> to win the cascade immediately
    document.head.insertBefore(el, document.head.firstChild);
  }
}
// ─────────────────────────────────────────────────────────────────────────────

export function CustomCursor() {
  // 1. Motion Values (Bypass React Render Cycle for Performance)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Physics Configuration
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  const trailConfig = { damping: 40, stiffness: 150, mass: 0.8 };

  // 3. Smooth Springs
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  const trailX = useSpring(cursorX, trailConfig);
  const trailY = useSpring(cursorY, trailConfig);

  // 4. Detect touch device synchronously on first render to avoid mismatch
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768
    );
  });

  const [cursorState, setCursorState] = useState({
    isPointer: false,
    isProjectCard: false,
    isWaveHello: false,
  });

  const hasMoved = useRef(false);

  // Re-check on resize (e.g. DevTools responsive toggle)
  useEffect(() => {
    const checkTouch = () =>
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.matchMedia("(pointer: coarse)").matches ||
          window.innerWidth < 768,
      );
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  // If device becomes touch, blank out the hide-cursor style so native cursor returns
  useEffect(() => {
    const styleEl = document.getElementById("__custom-cursor-hide__");
    if (!styleEl) return;
    styleEl.innerHTML = isTouchDevice
      ? ""
      : `
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
          input, textarea, [contenteditable="true"] { cursor: text !important; }
        }
      `;
  }, [isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e) => {
      if (!hasMoved.current) {
        // Snap to position on first move to avoid spring animation from off-screen
        if (typeof cursorX.jump === "function") {
          cursorX.jump(e.clientX);
          cursorY.jump(e.clientY);
        } else {
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
        }
        hasMoved.current = true;
      } else {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }

      const el = e.target instanceof Element ? e.target : null;

      const isPointer =
        !!el &&
        (window.getComputedStyle(el).cursor === "pointer" ||
          el.tagName === "A" ||
          el.tagName === "BUTTON" ||
          !!el.closest("a, button"));

      const isProjectCard =
        !!el && !!el.closest("[data-project-card], .project-card");
      const isWaveHello = !!el && !!el.closest("[data-wave-hello]");

      setCursorState({ isPointer, isProjectCard, isWaveHello });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isTouchDevice, cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* ── Main Cursor (Arrow / Hand Pointer) ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{ x: smoothX, y: smoothY }}
      >
        <AnimatePresence mode="wait">
          {cursorState.isWaveHello ? (
            /* 👋 Waving Hand */
            <motion.div
              key="wave"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-4xl -ml-3 -mt-3 relative z-20"
            >
              <motion.div
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "70% 70%" }}
              >
                👋
              </motion.div>
            </motion.div>
          ) : (
            /* Arrow / Hand pointer */
            <motion.div key="cursor" className="relative z-20">
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="relative z-20 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                initial={{ scale: 0.9 }}
                animate={{ scale: cursorState.isPointer ? 1.1 : 0.9 }}
                transition={{ duration: 0.15 }}
              >
                {cursorState.isPointer ? (
                  /* ☝️ Hand pointer icon */
                  <>
                    <path
                      d="M9 11V5a2 2 0 0 1 4 0v3.586l1.121-1.121A1.5 1.5 0 0 1 16.5 9v0a1.5 1.5 0 0 1 1.5 1.5v1A6 6 0 0 1 12 18H9.5A4.5 4.5 0 0 1 5 13.5V12a1 1 0 0 1 1-1h3Z"
                      fill="#1e1b4b"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <motion.path
                      d="M9 11V5a2 2 0 0 1 4 0v3.586l1.121-1.121A1.5 1.5 0 0 1 16.5 9v0a1.5 1.5 0 0 1 1.5 1.5v1A6 6 0 0 1 12 18H9.5A4.5 4.5 0 0 1 5 13.5V12a1 1 0 0 1 1-1h3Z"
                      animate={{
                        fill: cursorState.isProjectCard ? "#ec4899" : "#8b5cf6",
                      }}
                      transition={{ duration: 0.2 }}
                      className="mix-blend-multiply"
                      strokeLinejoin="round"
                    />
                  </>
                ) : (
                  /* 🖱️ Arrow icon */
                  <>
                    <path
                      d="M5.5 3.21V20.79L10.92 15.37L14.12 21.29L15.88 20.42L12.68 14.5L19.5 13.79L5.5 3.21Z"
                      fill="#1e1b4b"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <motion.path
                      d="M5.5 3.21V20.79L10.92 15.37L14.12 21.29L15.88 20.42L12.68 14.5L19.5 13.79L5.5 3.21Z"
                      animate={{
                        fill: cursorState.isProjectCard ? "#ec4899" : "#8b5cf6",
                      }}
                      transition={{ duration: 0.2 }}
                      className="mix-blend-multiply"
                    />
                  </>
                )}
              </motion.svg>

              {/* Name Tag Pill */}
              <motion.div
                className="absolute top-2 left-5 px-2.5 py-1 rounded-full text-[10px] font-bold text-white whitespace-nowrap shadow-sm z-10"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  backgroundColor: cursorState.isProjectCard
                    ? "#ec4899"
                    : "#8b5cf6",
                  scale: cursorState.isPointer ? 1.1 : 1,
                }}
              >
                {cursorState.isProjectCard
                  ? "View Project"
                  : cursorState.isPointer
                    ? "Click to View"
                    : "You"}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Small Halo Glow ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-24 h-24 -ml-8 -mt-8 rounded-full blur-2xl will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          background: "rgba(96, 75, 159, 0.5)",
        }}
      />

      {/* ── Large Ambient Background Trail ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9990] w-96 h-96 -ml-48 -mt-48 will-change-transform"
        style={{
          x: trailX,
          y: trailY,
          filter: "blur(60px)",
          opacity: 0.7,
        }}
        animate={{
          background: cursorState.isProjectCard
            ? "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 60%)"
            : "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 60%)",
        }}
        transition={{ duration: 0.5 }}
      />
    </>
  );
}
