"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { downsideProtection } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

const icons = ["👤", "📊", "❄️", "🔒"];

function FlipCard({ risk, mitigation, icon, index }: { risk: string; mitigation: string; icon: string; index: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.25 + index * 0.1, duration: 0.55, type: "spring", stiffness: 120, damping: 18 }}
      style={{ perspective: 1000, cursor: "pointer" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        style={{ position: "relative", transformStyle: "preserve-3d", height: 185 }}
      >
        {/* Front */}
        <div style={{
          position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          background: "#0E1117", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16, padding: "24px", display: "flex", flexDirection: "column",
        }}>
          <div style={{ fontSize: 26, marginBottom: 12 }}>{icon}</div>
          <div style={{ fontFamily: "var(--font-baskerville), serif", fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8, lineHeight: 1.3 }}>{risk}</div>
          <div style={{ marginTop: "auto", fontSize: 9, color: "rgba(255,255,255,0.2)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Click to see mitigation →
          </div>
        </div>
        {/* Back */}
        <div style={{
          position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: "linear-gradient(135deg, rgba(74,127,168,0.18), rgba(137,180,212,0.1))",
          border: "1px solid rgba(137,180,212,0.28)", borderRadius: 16, padding: "20px 22px",
          display: "flex", flexDirection: "column",
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#89B4D4", marginBottom: 10 }}>Mitigation</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, flex: 1 }}>{mitigation}</div>
          <div style={{ marginTop: 8, fontSize: 9, color: "rgba(137,180,212,0.5)", letterSpacing: "1.5px", textTransform: "uppercase" }}>Protected ✓</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

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
        style={{ fontFamily: "var(--font-baskerville), serif", fontSize: "clamp(22px, 2.6vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: 8 }}
      >
        Risk Mitigation Strategy
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.4 }}
        style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 32 }}
      >
        Click each card to reveal our mitigation approach.
      </motion.p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, flex: 1 }}>
        {downsideProtection.map((item, i) => (
          <FlipCard key={item.risk} risk={item.risk} mitigation={item.mitigation} icon={icons[i]} index={i} />
        ))}
      </div>
    </div>
  );
}
