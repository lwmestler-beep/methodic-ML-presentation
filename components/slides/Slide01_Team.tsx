"use client";
import { motion } from "framer-motion";
import { teamData } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

const directions = [
  { x: -80, y: -60 },
  { x: 0, y: 80 },
  { x: 80, y: -60 },
];

export default function Slide01_Team() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#080A0E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 64px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(74,127,168,0.1) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <SlideLabel>The Team</SlideLabel>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: "var(--font-baskerville), serif",
          fontSize: "clamp(26px, 3.5vw, 44px)",
          fontWeight: 700,
          letterSpacing: "-0.5px",
          textAlign: "center",
          marginBottom: 12,
          color: "#fff",
        }}
      >
        Founding Partners
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 48, textAlign: "center" }}
      >
        Next-generation entrepreneurs methodically scaling proven businesses.
      </motion.p>

      {/* Founder cards */}
      <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
        {teamData.founders.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, x: directions[i].x, y: directions[i].y, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{
              delay: 0.3 + i * 0.12,
              duration: 0.7,
              type: "spring",
              stiffness: 120,
              damping: 16,
            }}
            style={{
              background: "#0E1117",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: "28px 32px",
              minWidth: 200,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, transparent, #89B4D4, transparent)`,
              opacity: 0.6,
            }} />
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: "linear-gradient(135deg, #4A7FA8, #89B4D4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 16px",
              fontFamily: "var(--font-baskerville), serif",
              fontWeight: 700, fontSize: 18, color: "#fff",
            }}>
              {f.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div style={{
              fontFamily: "var(--font-baskerville), serif",
              fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 6,
            }}>
              {f.name}
            </div>
            <div style={{ fontSize: 11, color: "#89B4D4", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 500 }}>
              {f.role}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 40, justifyContent: "center" }}>
        {teamData.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
            style={{ textAlign: "center" }}
          >
            <div style={{
              fontFamily: "var(--font-baskerville), serif",
              fontSize: "clamp(22px, 2.5vw, 34px)",
              fontWeight: 700,
              color: "#89B4D4",
              marginBottom: 4,
            }}>
              {s.value}
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "2px", textTransform: "uppercase" }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* eTower badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        style={{
          marginTop: 40,
          background: "rgba(137,180,212,0.08)",
          border: "1px solid rgba(137,180,212,0.2)",
          borderRadius: 8,
          padding: "10px 20px",
          fontSize: 11,
          color: "#89B4D4",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        Backed by eTower · Babson College
      </motion.div>
    </div>
  );
}
