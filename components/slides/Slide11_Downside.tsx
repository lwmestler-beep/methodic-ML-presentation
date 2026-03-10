"use client";
import { motion } from "framer-motion";
import { downsideProtection } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

const icons = ["👤", "📊", "❄️", "🔒"];

export default function Slide11_Downside() {
  return (
    <div style={{
      width: "100%", height: "100%", background: "#080A0E",
      display: "flex", flexDirection: "column",
      padding: "52px 64px 44px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "40%", right: "-10%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(74,127,168,0.08) 0%, transparent 65%)", pointerEvents: "none",
      }} />

      <SlideLabel>Downside Protection</SlideLabel>

      <motion.h2
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{ fontFamily: "var(--font-baskerville), serif", fontSize: "clamp(22px, 2.6vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: 32 }}
      >
        Risk Mitigation Strategy
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, flex: 1 }}>
        {downsideProtection.map((item, i) => (
          <motion.div
            key={item.risk}
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25 + i * 0.1, duration: 0.55, type: "spring", stiffness: 120, damping: 18 }}
            style={{
              background: "#0E1117", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16, padding: "24px 26px",
              display: "flex", flexDirection: "column", gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22 }}>{icons[i]}</span>
              <div style={{
                fontFamily: "var(--font-baskerville), serif",
                fontSize: 16, fontWeight: 700, color: "#fff", lineHeight: 1.3,
              }}>
                {item.risk}
              </div>
            </div>
            <div style={{
              width: 40, height: 1,
              background: "linear-gradient(90deg, #4A7FA8, transparent)",
            }} />
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, flex: 1 }}>
              {item.mitigation}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
