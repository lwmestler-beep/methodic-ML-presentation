"use client";
import { motion } from "framer-motion";
import ParticleField from "@/components/ui/ParticleField";

export default function Slide12_CTA() {
  return (
    <div style={{
      width: "100%", height: "100%", background: "#080A0E",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      <ParticleField count={60} />

      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 700, height: 700,
        background: "radial-gradient(circle, rgba(137,180,212,0.1) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center", maxWidth: 680, padding: "0 24px",
      }}>
        {/* Chevron logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          style={{ marginBottom: 32 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="Methodic" style={{ width: 64, height: 64, objectFit: "contain", filter: "invert(1)" }} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.65, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-baskerville), serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 58px)",
            letterSpacing: "-1px", lineHeight: 1.1,
            color: "#fff", marginBottom: 18,
          }}
        >
          Let&rsquo;s Build{" "}
          <span style={{
            background: "linear-gradient(135deg, #89B4D4, #C5DCF0)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Together
          </span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            fontFamily: "var(--font-baskerville), serif",
            fontStyle: "italic",
            fontSize: "clamp(14px, 1.5vw, 17px)",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.65, marginBottom: 36,
            maxWidth: 560,
          }}
        >
          Partner with the next generation of entrepreneurs methodically scaling proven businesses for long-term value.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          style={{ width: 80, height: 1, background: "linear-gradient(90deg, transparent, #89B4D4, transparent)", marginBottom: 32 }}
        />

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{ marginBottom: 28 }}
        >
          <div style={{
            fontFamily: "var(--font-baskerville), serif",
            fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6,
          }}>
            Gavin Mestler
          </div>
          <div style={{
            fontSize: 13, color: "rgba(255,255,255,0.4)",
            fontFamily: "var(--font-mono), monospace",
          }}>
            gavin@methodicventures.com
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}
        >
          <a
            href="mailto:gavin@methodicventures.com"
            style={{
              padding: "11px 28px",
              borderRadius: 8,
              border: "1px solid rgba(137,180,212,0.4)",
              background: "rgba(137,180,212,0.08)",
              color: "#C5DCF0", fontSize: 13, fontWeight: 600,
              textDecoration: "none", letterSpacing: "0.5px",
              transition: "all 0.2s",
            }}
          >
            Get in Touch
          </a>
          <a
            href="https://methodicventures.com"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "11px 28px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "transparent",
              color: "rgba(255,255,255,0.45)", fontSize: 13, fontWeight: 500,
              textDecoration: "none", letterSpacing: "0.5px",
              transition: "all 0.2s",
            }}
          >
            methodicventures.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            marginTop: 40, fontSize: 11, color: "rgba(255,255,255,0.12)",
            fontFamily: "var(--font-mono), monospace", letterSpacing: "1px",
          }}
        >
          © 2026 Methodic Ventures  •  Confidential
        </motion.div>
      </div>
    </div>
  );
}
