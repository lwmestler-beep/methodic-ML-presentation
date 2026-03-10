"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProgressDots from "./ui/ProgressDots";
import { TOTAL_SLIDES } from "@/lib/slides-data";

import Slide00_Cover from "./slides/Slide00_Cover";
import Slide01_Team from "./slides/Slide01_Team";
import Slide02_OperatingTeam from "./slides/Slide02_OperatingTeam";
import Slide03_TheDeal from "./slides/Slide03_TheDeal";
import Slide04_Financials from "./slides/Slide04_Financials";
import Slide05_DealStructure from "./slides/Slide06_DealStructure";
import Slide06_Operations from "./slides/Slide05_Operations";
import Slide07_Returns from "./slides/Slide08_Returns";
import Slide08_ValueCreation from "./slides/Slide10_ValueCreation";
import Slide09_Growth from "./slides/Slide09_GrowthSpecial";
import Slide10_Downside from "./slides/Slide11_Downside";
import Slide11_CTA from "./slides/Slide12_CTA";

const SLIDES = [
  Slide00_Cover,       // 1
  Slide01_Team,        // 2
  Slide02_OperatingTeam, // 3
  Slide03_TheDeal,     // 4
  Slide04_Financials,  // 5
  Slide05_DealStructure, // 6
  Slide06_Operations,  // 7
  Slide07_Returns,     // 8
  Slide08_ValueCreation, // 9
  Slide09_Growth,      // 10 ← THE SPECTACULAR ONE
  Slide10_Downside,    // 11
  Slide11_CTA,         // 12
];

type SlideVariants = {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  exit: Record<string, unknown>;
};

const getVariants = (index: number, direction: number): SlideVariants => {
  // Slide 11 (CTA) uses scale morph bloom
  if (index === 11) {
    return {
      initial: { opacity: 0, scale: 0.85 },
      animate: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
      exit: { opacity: 0, scale: 1.06, transition: { duration: 0.35 } },
    };
  }
  // Slide 9 (Growth special) gets its own dramatic vertical reveal
  if (index === 9) {
    return {
      initial: { y: direction > 0 ? "100%" : "-100%", opacity: 0, filter: "blur(12px)" },
      animate: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.65, ease: "easeOut" } },
      exit: { y: direction > 0 ? "-40%" : "40%", opacity: 0, filter: "blur(8px)", transition: { duration: 0.4, ease: "easeIn" } },
    };
  }
  // Alternate horizontal / vertical for rest
  const isHorizontal = index % 2 === 0;
  if (isHorizontal) {
    return {
      initial: { x: direction > 0 ? "100%" : "-100%", opacity: 0, filter: "blur(8px)" },
      animate: { x: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
      exit: { x: direction > 0 ? "-60%" : "60%", opacity: 0, filter: "blur(6px)", transition: { duration: 0.35, ease: "easeIn" } },
    };
  } else {
    return {
      initial: { y: direction > 0 ? "100%" : "-100%", opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
      exit: { y: direction > 0 ? "-50%" : "50%", opacity: 0, transition: { duration: 0.35, ease: "easeIn" } },
    };
  }
};

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStart = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => {
      if (isAnimating) return;
      if (next < 0 || next >= TOTAL_SLIDES) return;
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
      setIsAnimating(true);
    },
    [current, isAnimating]
  );

  const goTo = useCallback((i: number) => { go(i); }, [go]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); go(current + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); go(current - 1); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, go]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) go(diff > 0 ? current + 1 : current - 1);
    touchStart.current = null;
  };

  const SlideComponent = SLIDES[current];
  const variants = getVariants(current, direction);

  return (
    <div
      style={{ width: "100vw", height: "100vh", background: "#080A0E", position: "relative", overflow: "hidden" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          initial={variants.initial as any}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          animate={variants.animate as any}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          exit={variants.exit as any}
          onAnimationComplete={() => setIsAnimating(false)}
          style={{ position: "absolute", inset: 0 }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Prev button */}
      {current > 0 && (
        <button
          onClick={() => go(current - 1)}
          aria-label="Previous slide"
          style={{
            position: "fixed", left: 20, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%", width: 40, height: 40,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "rgba(255,255,255,0.4)", zIndex: 100, fontSize: 16,
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(137,180,212,0.15)"; (e.currentTarget as HTMLButtonElement).style.color = "#89B4D4"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)"; }}
        >←</button>
      )}

      {current < TOTAL_SLIDES - 1 && (
        <button
          onClick={() => go(current + 1)}
          aria-label="Next slide"
          style={{
            position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%", width: 40, height: 40,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "rgba(255,255,255,0.4)", zIndex: 100, fontSize: 16,
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(137,180,212,0.15)"; (e.currentTarget as HTMLButtonElement).style.color = "#89B4D4"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)"; }}
        >→</button>
      )}

      {/* Slide counter */}
      <div style={{
        position: "fixed", top: 18, right: 22,
        fontFamily: "var(--font-mono), monospace",
        fontSize: 11, color: "rgba(255,255,255,0.22)", letterSpacing: "2px", zIndex: 100,
      }}>
        {String(current + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
      </div>

      {/* Logo */}
      <div style={{
        position: "fixed", top: 18, left: 22,
        display: "flex", alignItems: "center", gap: 8, zIndex: 100,
      }}>
        <img src="/logo.webp" alt="Methodic" style={{ width: 20, height: 20, objectFit: "contain", filter: "invert(1)" }} />
        <span style={{
          fontFamily: "var(--font-baskerville), serif",
          fontWeight: 700, fontSize: 12, letterSpacing: "2.5px", color: "rgba(255,255,255,0.5)",
        }}>
          METHODIC
        </span>
      </div>

      <ProgressDots current={current} onGoTo={goTo} />
    </div>
  );
}
