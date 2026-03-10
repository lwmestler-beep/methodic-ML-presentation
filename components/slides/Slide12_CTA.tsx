"use client";
import { motion } from "framer-motion";
import ParticleField from "@/components/ui/ParticleField";

export default function Slide12_CTA() {
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
      <ParticleField count={80} />

      {/* Large radial glow behind content */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(137,180,212,0.14) 0%, rgba(74,127,168,0.06) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Ring animation */}
      {[200, 320, 440].map((size, i) => (
        <motion.div
          key={size}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: size,
            height: size,
            borderRadius: "50%",
            border: `1px solid rgba(137,180,212,${0.08 - i * 0.02})`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 640,
          padding: "0 24px",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="Methodic" style={{ width: 44, height: 44, objectFit: "contain", filter: "invert(1)" }} />
          <span style={{
            fontFamily: "var(--font-baskerville), serif",
            fontWeight: 700, fontSize: 26,
            letterSpacing: "3.5px", color: "#fff",
          }}>
            METHODIC
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65, duration: 0.7, type: "spring", stiffness: 100, damping: 14 }}
        >
          <h1
            style={{
              fontFamily: "var(--font-baskerville), serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 60px)",
              letterSpacing: "-1px",
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Let&rsquo;s Build{" "}
            <span className="gradient-text-full">Together</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          style={{
            fontFamily: "var(--font-baskerville), serif",
            fontStyle: "italic",
            fontSize: "clamp(14px, 1.6vw, 18px)",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.6,
            marginBottom: 48,
          }}
        >
          Partner with the next generation of entrepreneurs<br />
          methodically scaling proven businesses for long-term value.
        </motion.p>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.6, type: "spring", stiffness: 120, damping: 16 }}
          style={{
            background: "#0E1117",
            border: "1px solid rgba(137,180,212,0.2)",
            borderRadius: 20,
            padding: "28px 40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: "linear-gradient(90deg, #4A7FA8, #89B4D4, #C5DCF0)",
          }} />

          <div style={{ marginBottom: 12 }}>
            <div style={{
              fontFamily: "var(--font-baskerville), serif",
              fontSize: 18, fontWeight: 700, color: "#fff",
            }}>
              Gavin Mestler
            </div>
            <div style={{ fontSize: 11, color: "#89B4D4", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: 4 }}>
              Managing Partner
            </div>
          </div>

          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a
              href="mailto:gavin@methodicventures.com"
              style={{
                fontSize: 13,
                color: "#89B4D4",
                textDecoration: "none",
                fontFamily: "var(--font-mono), monospace",
                display: "flex", alignItems: "center", gap: 6,
              }}
            >
              ✉ gavin@methodicventures.com
            </a>
            <span style={{ width: 1, height: 16, background: "rgba(255,255,255,0.1)" }} />
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono), monospace" }}>
              methodicventures.com
            </span>
          </div>
        </motion.div>

        {/* Tagline footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            marginTop: 40,
            fontFamily: "var(--font-baskerville), serif",
            fontStyle: "italic",
            fontSize: 14,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.5px",
          }}
        >
          Preserving What Works. Unlocking What&rsquo;s Possible.
        </motion.div>
      </div>
    </div>
  );
}
