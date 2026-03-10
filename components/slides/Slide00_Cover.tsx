"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleField from "@/components/ui/ParticleField";

const TAGLINE = "Preserving What Works. Unlocking What's Possible.";

export default function Slide00_Cover() {
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < TAGLINE.length) {
        setTypedText(TAGLINE.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setDoneTyping(true);
      }
    }, 38);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!doneTyping) return;
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, [doneTyping]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#080A0E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ParticleField count={70} />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(137,180,212,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 700,
          padding: "0 24px",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 48 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.webp"
            alt="Methodic"
            style={{ width: 52, height: 52, objectFit: "contain", filter: "invert(1)" }}
          />
          <span
            style={{
              fontFamily: "var(--font-baskerville), serif",
              fontWeight: 700,
              fontSize: 32,
              letterSpacing: "4px",
              color: "#fff",
            }}
          >
            METHODIC
          </span>
        </motion.div>

        {/* Label */}
        <motion.div
          className="label"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ marginBottom: 24 }}
        >
          VENTURES
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-baskerville), serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 54px)",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            color: "#fff",
            marginBottom: 32,
          }}
        >
          Acquisition{" "}
          <span className="gradient-text">Opportunity</span>
        </motion.h1>

        {/* Typed tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          style={{
            fontFamily: "var(--font-baskerville), serif",
            fontStyle: "italic",
            fontSize: "clamp(14px, 1.6vw, 20px)",
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "0.5px",
            minHeight: "2em",
          }}
        >
          {typedText}
          <span
            style={{
              opacity: cursorVisible ? 1 : 0,
              color: "#89B4D4",
              marginLeft: 1,
            }}
          >
            |
          </span>
        </motion.p>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          style={{
            marginTop: 48,
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          December 2025 · Investor Presentation
        </motion.div>

        {/* Press arrow hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          style={{
            marginTop: 24,
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: 11,
            color: "rgba(255,255,255,0.18)",
            letterSpacing: "2px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          Press <kbd style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 4, padding: "2px 6px", fontSize: 10 }}>→</kbd> to advance
        </motion.div>
      </div>
    </div>
  );
}
