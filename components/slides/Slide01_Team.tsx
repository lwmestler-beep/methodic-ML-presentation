"use client";
import { motion } from "framer-motion";
import { teamData } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

const founders = [
  { name: "Gavin Mestler", role: "Managing Partner & Co-Founder" },
  { name: "Logan Mestler", role: "Managing Partner & Co-Founder" },
  { name: "Dean Farber", role: "Managing Partner & Co-Founder" },
];

export default function Slide01_Team() {
  return (
    <div style={{
      width: "100%", height: "100%", background: "#080A0E",
      display: "flex", flexDirection: "column",
      padding: "52px 64px 40px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
        width: 700, height: 500,
        background: "radial-gradient(ellipse, rgba(74,127,168,0.1) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <SlideLabel>The Team</SlideLabel>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{
          fontFamily: "var(--font-baskerville), serif",
          fontSize: "clamp(24px, 3vw, 42px)",
          fontWeight: 700, letterSpacing: "-0.5px",
          color: "#fff", marginBottom: 36,
        }}
      >
        Founding Partners
      </motion.h2>

      <div style={{ display: "flex", gap: 24, flex: 1, alignItems: "stretch" }}>

        {/* Left: Large group photo */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring", stiffness: 100, damping: 16 }}
          style={{
            flex: 1.4,
            background: "#0E1117",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20, overflow: "hidden",
            display: "flex", flexDirection: "column",
          }}
        >
          <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: 100, background: "linear-gradient(to top, #0E1117, transparent)", zIndex: 1,
            }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/team-photo.jpeg"
              alt="Methodic Founding Team"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          {/* Founders listed below photo */}
          <div style={{ padding: "18px 24px 22px", display: "flex", gap: 0, zIndex: 2 }}>
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.1, duration: 0.4 }}
                style={{
                  flex: 1,
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : undefined,
                  paddingLeft: i > 0 ? 16 : 0,
                  paddingRight: i < 2 ? 16 : 0,
                }}
              >
                <div style={{ fontFamily: "var(--font-baskerville), serif", fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>
                  {f.name}
                </div>
                <div style={{ fontSize: 9, color: "#89B4D4", letterSpacing: "1.5px", textTransform: "uppercase", lineHeight: 1.4 }}>
                  {f.role}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Stats + eTower */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.7, type: "spring", stiffness: 100, damping: 16 }}
          style={{ width: 200, display: "flex", flexDirection: "column", gap: 14 }}
        >
          {teamData.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              style={{
                background: "#0E1117", border: "1px solid rgba(137,180,212,0.12)",
                borderRadius: 14, padding: "20px 18px",
                flex: 1, display: "flex", flexDirection: "column",
                alignItems: "flex-start", justifyContent: "center",
              }}
            >
              <div style={{
                fontFamily: "var(--font-baskerville), serif",
                fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 700, color: "#89B4D4", marginBottom: 6,
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", lineHeight: 1.4 }}>
                {s.label}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            style={{
              background: "rgba(137,180,212,0.07)", border: "1px solid rgba(137,180,212,0.18)",
              borderRadius: 12, padding: "14px 16px",
              fontSize: 10, color: "#89B4D4", letterSpacing: "1.5px",
              textTransform: "uppercase", fontWeight: 600, textAlign: "center",
            }}
          >
            Backed by eTower · Babson College
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
