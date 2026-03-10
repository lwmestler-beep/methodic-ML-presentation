"use client";
import { motion } from "framer-motion";
import { teamData } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

const founders = [
  { name: "Gavin Mestler", role: "Managing Partner & Co-Founder", photo: "/founder-gavin.png" },
  { name: "Logan Mestler", role: "Managing Partner & Co-Founder", photo: "/founder-logan.png" },
  { name: "Dean Farber", role: "Managing Partner & Co-Founder", photo: "/founder-dean.png" },
];

const directions = [
  { x: -100, y: -40 },
  { x: 0, y: 80 },
  { x: 100, y: -40 },
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
        padding: "52px 64px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          fontWeight: 700,
          letterSpacing: "-0.5px",
          color: "#fff",
          marginBottom: 36,
        }}
      >
        Founding Partners
      </motion.h2>

      <div style={{ display: "flex", gap: 20, flex: 1, alignItems: "stretch" }}>
        <div style={{ display: "flex", gap: 16, flex: 1 }}>
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: directions[i].y, x: directions[i].x, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{
                delay: 0.25 + i * 0.12,
                duration: 0.7,
                type: "spring",
                stiffness: 110,
                damping: 16,
              }}
              style={{
                flex: 1,
                background: "#0E1117",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{
                flex: 1,
                background: "#151921",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                minHeight: 200,
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: 60, background: "linear-gradient(to top, #0E1117, transparent)", zIndex: 1,
                }} />
                <img
                  src={f.photo}
                  alt={f.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
              <div style={{ padding: "16px 20px 20px" }}>
                <div style={{
                  fontFamily: "var(--font-baskerville), serif",
                  fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 5,
                }}>
                  {f.name}
                </div>
                <div style={{ fontSize: 10, color: "#89B4D4", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600 }}>
                  {f.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.7, type: "spring", stiffness: 100, damping: 16 }}
          style={{ width: 240, display: "flex", flexDirection: "column", gap: 14 }}
        >
          <div style={{
            flex: 1, background: "#0E1117", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16, overflow: "hidden", position: "relative", minHeight: 160,
          }}>
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: 50, background: "linear-gradient(to top, #0E1117, transparent)", zIndex: 1,
            }} />
            <img
              src="/team-photo.jpeg"
              alt="Methodic Founding Team"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
            />
          </div>

          {teamData.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
              style={{
                background: "#0E1117", border: "1px solid rgba(137,180,212,0.12)",
                borderRadius: 12, padding: "12px 16px",
                display: "flex", alignItems: "center", gap: 12,
              }}
            >
              <div style={{
                fontFamily: "var(--font-baskerville), serif",
                fontSize: 20, fontWeight: 700, color: "#89B4D4", minWidth: 48,
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", lineHeight: 1.4 }}>
                {s.label}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            style={{
              background: "rgba(137,180,212,0.07)", border: "1px solid rgba(137,180,212,0.18)",
              borderRadius: 10, padding: "10px 14px",
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
