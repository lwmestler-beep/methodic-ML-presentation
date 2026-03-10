"use client";
import { motion } from "framer-motion";
import { operatingTeam, advisors } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

export default function Slide02_OperatingTeam() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#080A0E",
        display: "flex",
        flexDirection: "column",
        padding: "64px 72px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "20%", right: "-10%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(74,127,168,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

      <SlideLabel>Operating Team & Advisors</SlideLabel>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{
          fontFamily: "var(--font-baskerville), serif",
          fontSize: "clamp(22px, 2.8vw, 38px)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: 36,
        }}
      >
        The People Behind the Playbook
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, flex: 1 }}>
        {/* Operating Team */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="label"
            style={{ marginBottom: 20 }}
          >
            Operating Team
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {operatingTeam.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  delay: 0.3 + i * 0.08,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 130,
                  damping: 18,
                }}
                style={{
                  background: "#0E1117",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 10,
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "linear-gradient(135deg, #4A7FA8 0%, #89B4D4 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700, color: "#fff", flexShrink: 0,
                  fontFamily: "var(--font-baskerville), serif",
                }}>
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{m.name}</div>
                  <div style={{ fontSize: 10, color: "#89B4D4", letterSpacing: "1px", textTransform: "uppercase", marginTop: 2 }}>{m.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="label"
            style={{ marginBottom: 20 }}
          >
            Strategic Advisors
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {advisors.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.4 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span style={{ fontSize: 13, color: "#fff", fontWeight: 500 }}>{a.name}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.5px" }}>{a.title}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            style={{
              marginTop: 20,
              background: "rgba(137,180,212,0.07)",
              border: "1px solid rgba(137,180,212,0.15)",
              borderRadius: 10,
              padding: "12px 16px",
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", color: "#89B4D4", textTransform: "uppercase", marginBottom: 6 }}>
              Backed by eTower
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
              Alumni have built companies valued at over $3 billion, providing an extensive network for deal sourcing and talent.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
