"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleField from "@/components/ui/ParticleField";

export default function Slide00_Cover() {
  const [glowPulse, setGlowPulse] = useState(false);
  useEffect(() => { setTimeout(() => setGlowPulse(true), 800); }, []);

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
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}
        >
          <img src="/logo.webp" alt="Methodic" style={{ width: 52, height: 52, objectFit: "contain", filter: "invert(1)" }} />
          <span style={{
            fontFamily: "var(--font-baskerville), serif",
            fontWeight: 700, fontSize: 34, letterSpacing: "5px", color: "#fff",
          }}>METHODIC</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ width: 60, height: 1, background: "linear-gradient(90deg, transparent, #89B4D4, transparent)", marginBottom: 28 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ fontSize: 11, letterSpacing: "4px", textTransform: "uppercase", color: "#89B4D4", fontWeight: 600, marginBottom: 20 }}
        >
          VENTURES
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-baskerville), serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 62px)",
            letterSpacing: "-1.5px",
            lineHeight: 1.08,
            color: "#fff",
            marginBottom: 28,
          }}
        >
          Acquisition{" "}
          <span style={{ background: "linear-gradient(135deg, #89B4D4, #C5DCF0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Opportunity
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{
            fontFamily: "var(--font-baskerville), serif",
            fontStyle: "italic",
            fontSize: 16,
            color: "rgba(255,255,255,0.45)",
            marginBottom: 48,
          }}
        >
          Preserving What Works. Unlocking What&rsquo;s Possible.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{ display: "flex", gap: 24, alignItems: "center" }}
        >
          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "2px" }}>
            Methodic Presentation  |  March 2026
          </span>
          <span style={{ width: 1, height: 12, background: "rgba(255,255,255,0.15)" }} />
          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "2px" }}>
            CONFIDENTIAL
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          style={{ marginTop: 36, fontSize: 11, color: "rgba(255,255,255,0.15)", letterSpacing: "2px", display: "flex", alignItems: "center", gap: 8 }}
        >
          Press <kbd style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "2px 7px", fontSize: 10 }}>→</kbd> to begin
        </motion.div>
      </div>
    </div>
  );
}
