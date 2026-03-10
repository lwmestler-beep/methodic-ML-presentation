"use client";
import { motion } from "framer-motion";
import { dealFeatures } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

const icons: Record<string, string> = {
  "🌿": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
};

export default function Slide03_TheDeal() {
  return (
    <div style={{
      width: "100%", height: "100%", background: "#080A0E",
      display: "flex", flexDirection: "column",
      padding: "52px 64px 44px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", bottom: "-15%", left: "-5%",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(74,127,168,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <SlideLabel>The Deal</SlideLabel>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{ marginBottom: 28 }}
      >
        <h2 style={{
          fontFamily: "var(--font-baskerville), serif",
          fontSize: "clamp(22px, 2.6vw, 36px)",
          fontWeight: 700, color: "#fff",
          marginBottom: 8, letterSpacing: "-0.3px",
        }}>
          Established Landscaping Business
        </h2>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px" }}>
          Hanover, MA  •  South Shore Boston  •  Est. 2005  •  20 Years in Operation
        </div>
      </motion.div>

      {/* Four feature cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, flex: 1 }}>
        {dealFeatures.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25 + i * 0.1, duration: 0.55, type: "spring", stiffness: 120, damping: 18 }}
            style={{
              background: "#0E1117",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              padding: "22px 24px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Left accent bar */}
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
              background: "linear-gradient(180deg, #4A7FA8, #89B4D4)",
              borderRadius: "3px 0 0 3px",
            }} />
            <div style={{ paddingLeft: 4 }}>
              <div style={{ fontSize: 22, marginBottom: 10 }}>{f.icon}</div>
              <div style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 10,
              }}>
                {f.title}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                {f.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}
      >
        {["S-Corp", "Not a Franchise", "3–5 Year-Round / 22–25 Peak Season", "No Special Licenses Required"].map((tag) => (
          <span key={tag} style={{
            fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "1px",
            padding: "4px 10px", background: "rgba(255,255,255,0.04)",
            borderRadius: 5, border: "1px solid rgba(255,255,255,0.06)",
          }}>
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
