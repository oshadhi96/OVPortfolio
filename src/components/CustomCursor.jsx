import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";

export function CustomCursor() {
  // 1. Motion Values (Bypass React Render Cycle for Performance)
  // Start off-screen to avoid flickers on load
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Physics Configuration
  // Snappy spring for the main cursor arrow and the new small glow
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  // Floaty spring for the large background trail
  const trailConfig = { damping: 40, stiffness: 150, mass: 0.8 };

  // 3. Smooth Springs
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  const trailX = useSpring(cursorX, trailConfig);
  const trailY = useSpring(cursorY, trailConfig);

  // 4. React State (Only for visual changes, not position)
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorState, setCursorState] = useState({
    isPointer: false,
    isProjectCard: false,
    isWaveHello: false,
  });

  // We need a ref to track if the initial mouse movement has happened
  const hasMoved = useRef(false);

  useEffect(() => {
    // Mobile Check
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.matchMedia("(pointer: coarse)").matches ||
          window.innerWidth < 768, // Explicit width check for "mobile view"
      );
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);

    // Global Cursor Hide (Clean Injection)
    if (!isTouchDevice) {
      const style = document.createElement("style");
      style.innerHTML = `
        body, a, button, [role="button"] { cursor: none !important; }
        input, textarea, [contenteditable="true"] { cursor: text !important; }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
        window.removeEventListener("resize", checkTouch);
      };
    }

    // Cleanup for resize listener when isTouchDevice is true
    return () => {
      window.removeEventListener("resize", checkTouch);
    };
  }, [isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e) => {
      // On first move, snap the cursor to position instead of springing from (-100,-100)
      if (!hasMoved.current) {
        // Some motion libraries don't have jump(), so fallback safely
        if (typeof cursorX.jump === "function") cursorX.jump(e.clientX);
        else cursorX.set(e.clientX);

        if (typeof cursorY.jump === "function") cursorY.jump(e.clientY);
        else cursorY.set(e.clientY);

        hasMoved.current = true;
      } else {
        // Update MotionValues directly (No React Re-render!)
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }

      // Check Hover Targets
      const target = e.target;

      // Be defensive: target might not be an Element in rare cases
      const el = target instanceof Element ? target : null;

      const isPointer =
        !!el &&
        (window.getComputedStyle(el).cursor === "pointer" ||
          el.tagName === "A" ||
          el.tagName === "BUTTON" ||
          !!el.closest("a, button"));

      const isProjectCard =
        !!el && !!el.closest("[data-project-card], .project-card");
      const isWaveHello = !!el && !!el.closest("[data-wave-hello]");

      setCursorState({
        isPointer,
        isProjectCard,
        isWaveHello,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isTouchDevice, cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* --- Main Cursor (Arrow/Hand) --- */}
      <motion.div
        // z-index 9999 to be on top of everything
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        <AnimatePresence mode="wait">
          {cursorState.isWaveHello ? (
            /* 👋 Waving Hand State */
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
            /* 🖱️ Default Figma Arrow / Hand Pointer State */
            <motion.div key="cursor" className="relative z-20">
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="relative z-20 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                initial={{ scale: 0.9 }}
                animate={{
                  scale: cursorState.isPointer ? 1.1 : 0.9,
                }}
                transition={{ duration: 0.15 }}
              >
                {cursorState.isPointer ? (
                  /* ☝️ Hand Pointer Icon */
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
                  /* 🖱️ Arrow Icon */
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
                    ? "Click to View "
                    : "You"}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* --- NEW: Small "Halo" Glow attached to cursor --- */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-24 h-24 -ml-8 -mt-8 rounded-full blur-2xl will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          background: "rgba(96, 75, 159, 0.5)", // Light purple, semi-transparent
        }}
      />

      {/* --- Existing: Large Ambient Background Trail --- */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9990] w-96 h-96 -ml-48 -mt-48 will-change-transform"
        style={{
          x: trailX,
          y: trailY,
          filter: "blur(60px)",
          opacity: 0.7, // Lower opacity so it doesn't dominate
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
