"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProgressDots from "./ui/ProgressDots";
import { TOTAL_SLIDES } from "@/lib/slides-data";

// Lazy load slides
import Slide00_Cover from "./slides/Slide00_Cover";
import Slide01_Team from "./slides/Slide01_Team";
import Slide02_OperatingTeam from "./slides/Slide02_OperatingTeam";
import Slide03_TheDeal from "./slides/Slide03_TheDeal";
import Slide04_Financials from "./slides/Slide04_Financials";
import Slide05_Operations from "./slides/Slide05_Operations";
import Slide06_DealStructure from "./slides/Slide06_DealStructure";
import Slide07_Growth from "./slides/Slide07_Growth";
import Slide08_Returns from "./slides/Slide08_Returns";
import Slide09_Opportunity from "./slides/Slide09_Opportunity";
import Slide10_ValueCreation from "./slides/Slide10_ValueCreation";
import Slide11_Downside from "./slides/Slide11_Downside";
import Slide12_CTA from "./slides/Slide12_CTA";

const SLIDES = [
  Slide00_Cover,
  Slide01_Team,
  Slide02_OperatingTeam,
  Slide03_TheDeal,
  Slide04_Financials,
  Slide05_Operations,
  Slide06_DealStructure,
  Slide07_Growth,
  Slide08_Returns,
  Slide09_Opportunity,
  Slide10_ValueCreation,
  Slide11_Downside,
  Slide12_CTA,
];

type SlideVariants = {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  exit: Record<string, unknown>;
};

// Transition variants that cycle
const getVariants = (index: number, direction: number): SlideVariants => {
  if (index === 12) {
    return {
      initial: { opacity: 0, scale: 0.85 },
      animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
      exit: { opacity: 0, scale: 1.08, transition: { duration: 0.4 } },
    };
  }
  const isHorizontal = index % 2 === 0;
  if (isHorizontal) {
    return {
      initial: { x: direction > 0 ? "100%" : "-100%", opacity: 0, filter: "blur(8px)" },
      animate: {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.55, ease: "easeOut" },
      },
      exit: {
        x: direction > 0 ? "-60%" : "60%",
        opacity: 0,
        filter: "blur(6px)",
        transition: { duration: 0.4, ease: "easeIn" },
      },
    };
  } else {
    return {
      initial: { y: direction > 0 ? "100%" : "-100%", opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: "easeOut" },
      },
      exit: {
        y: direction > 0 ? "-50%" : "50%",
        opacity: 0,
        transition: { duration: 0.4, ease: "easeIn" },
      },
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

  const goTo = useCallback(
    (i: number) => {
      go(i);
    },
    [go]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(current + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(current - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, go]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      go(diff > 0 ? current + 1 : current - 1);
    }
    touchStart.current = null;
  };

  const SlideComponent = SLIDES[current];
  const variants = getVariants(current, direction);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#080A0E",
        position: "relative",
        overflow: "hidden",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Curtain overlay for vertical transitions */}
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

      {/* Navigation arrows */}
      {current > 0 && (
        <button
          onClick={() => go(current - 1)}
          aria-label="Previous slide"
          style={{
            position: "fixed",
            left: 24,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%",
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "rgba(255,255,255,0.5)",
            zIndex: 100,
            transition: "all 0.2s",
            fontSize: 18,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(137,180,212,0.15)";
            (e.currentTarget as HTMLButtonElement).style.color = "#89B4D4";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)";
          }}
        >
          ←
        </button>
      )}

      {current < TOTAL_SLIDES - 1 && (
        <button
          onClick={() => go(current + 1)}
          aria-label="Next slide"
          style={{
            position: "fixed",
            right: 24,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%",
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "rgba(255,255,255,0.5)",
            zIndex: 100,
            transition: "all 0.2s",
            fontSize: 18,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(137,180,212,0.15)";
            (e.currentTarget as HTMLButtonElement).style.color = "#89B4D4";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)";
          }}
        >
          →
        </button>
      )}

      {/* Slide counter top-right */}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 24,
          fontFamily: "var(--font-mono), monospace",
          fontSize: 11,
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "2px",
          zIndex: 100,
        }}
      >
        {String(current + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
      </div>

      {/* Logo top-left */}
      <div
        style={{
          position: "fixed",
          top: 20,
          left: 24,
          display: "flex",
          alignItems: "center",
          gap: 8,
          zIndex: 100,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.webp" alt="Methodic" style={{ width: 22, height: 22, objectFit: "contain", filter: "invert(1)" }} />
        <span
          style={{
            fontFamily: "var(--font-baskerville), serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "2.5px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          METHODIC
        </span>
      </div>

      <ProgressDots current={current} onGoTo={goTo} />
    </div>
  );
}
