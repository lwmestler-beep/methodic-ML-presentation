"use client";
import { motion } from "framer-motion";
import ParticleField from "@/components/ui/ParticleField";

export default function Slide00_Cover() {
  return (
    <div style={{
      width: "100%", height: "100%", background: "#080A0E",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      <ParticleField count={55} />
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 700, height: 700,
        background: "radial-gradient(circle, rgba(137,180,212,0.1) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        {/* Chevron logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: 32 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="Methodic" style={{ width: 72, height: 72, objectFit: "contain", filter: "invert(1)" }} />
        </motion.div>

        {/* Main headline: METHODIC VENTURES */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-baskerville), serif",
            fontWeight: 700,
            fontSize: "clamp(36px, 5.5vw, 72px)",
            letterSpacing: "6px",
            lineHeight: 1,
            color: "#fff",
            marginBottom: 20,
          }}
        >
          <span style={{
            background: "linear-gradient(135deg, #89B4D4, #C5DCF0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            METHODIC
          </span>
          {" "}VENTURES
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          style={{
            fontFamily: "var(--font-baskerville), serif",
            fontStyle: "italic",
            fontSize: "clamp(14px, 1.5vw, 18px)",
            color: "rgba(255,255,255,0.45)",
            marginBottom: 36,
          }}
        >
          Preserving What Works. Unlocking What&rsquo;s Possible.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ width: 80, height: 1, background: "linear-gradient(90deg, transparent, #89B4D4, transparent)", marginBottom: 32 }}
        />

        {/* Sub-label: Acquisition Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          style={{
            fontSize: 13, letterSpacing: "4px", textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)", fontWeight: 500, marginBottom: 32,
          }}
        >
          Acquisition Opportunity
        </motion.div>

        {/* CONFIDENTIAL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 10, color: "rgba(255,255,255,0.18)", letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          CONFIDENTIAL
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          style={{ marginTop: 40, fontSize: 11, color: "rgba(255,255,255,0.12)", letterSpacing: "2px", display: "flex", alignItems: "center", gap: 8 }}
        >
          Press <kbd style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "2px 7px", fontSize: 10 }}>→</kbd> to begin
        </motion.div>
      </div>
    </div>
  );
}
