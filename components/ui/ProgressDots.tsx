"use client";
import { motion } from "framer-motion";
import { TOTAL_SLIDES } from "@/lib/slides-data";

interface ProgressDotsProps {
  current: number;
  onGoTo: (i: number) => void;
}

export default function ProgressDots({ current, onGoTo }: ProgressDotsProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 8,
        zIndex: 100,
        alignItems: "center",
      }}
    >
      {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
        <button
          key={i}
          onClick={() => onGoTo(i)}
          aria-label={`Go to slide ${i + 1}`}
          style={{
            width: i === current ? 20 : 6,
            height: 6,
            borderRadius: 3,
            background: i === current ? "#89B4D4" : "rgba(255,255,255,0.2)",
            border: "none",
            cursor: "pointer",
            padding: 0,
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}
