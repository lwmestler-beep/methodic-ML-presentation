"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { financials } from "@/lib/slides-data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SlideLabel from "@/components/ui/SlideLabel";

export default function Slide04_Financials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{
      width: "100%", height: "100%", background: "#080A0E",
      display: "flex", flexDirection: "column",
      padding: "52px 64px 44px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "35%", right: "-5%",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(74,127,168,0.09) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <SlideLabel>Financial Highlights</SlideLabel>

      <motion.h2
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{ fontFamily: "var(--font-baskerville), serif", fontSize: "clamp(22px, 2.6vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: 32 }}
      >
        Three-Year Track Record
      </motion.h2>

      {/* Three hero stats */}
      <div style={{ display: "flex", gap: 20, marginBottom: 36 }}>
        {[
          { label: "2025 REVENUE", target: 2.5, prefix: "$", suffix: "M", decimals: 1 },
          { label: "2025 RECAST SDE", target: 630, prefix: "$", suffix: "K", decimals: 0 },
          { label: "SDE MARGIN", target: 25.2, suffix: "%", decimals: 1 },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25 + i * 0.1, duration: 0.5, type: "spring", stiffness: 130 }}
            style={{
              flex: 1, background: "#0E1117",
              border: "1px solid rgba(137,180,212,0.18)",
              borderRadius: 14, padding: "22px 24px",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #4A7FA8, #89B4D4)", borderRadius: "14px 14px 0 0" }} />
            <div style={{ fontFamily: "var(--font-baskerville), serif", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 700, color: "#89B4D4", marginBottom: 8 }}>
              {inView && <AnimatedCounter target={s.target} prefix={s.prefix || ""} suffix={s.suffix || ""} decimals={s.decimals} duration={1600} />}
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "2px", textTransform: "uppercase" }}>{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Data table — exact match to original */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ flex: 1, background: "#0E1117", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden" }}
      >
        {/* Header row */}
        <div style={{
          display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          background: "rgba(137,180,212,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "12px 24px",
        }}>
          {["", "2023", "2024", "2025 (Proj.)"].map((h, i) => (
            <div key={i} style={{ fontSize: 11, fontWeight: 700, color: i === 0 ? "rgba(255,255,255,0.3)" : "#89B4D4", letterSpacing: "1px", textAlign: i === 0 ? "left" : "center" }}>{h}</div>
          ))}
        </div>

        {[
          { label: "Revenue", values: ["$2.62M", "$2.40M", "$2.50M"] },
          { label: "Recast SDE", values: ["$779K", "$693K", "$630K"] },
          { label: "SDE Margin", values: ["29.7%", "28.8%", "25.2%"] },
        ].map((row, ri) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65 + ri * 0.1, duration: 0.4 }}
            style={{
              display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
              padding: "16px 24px",
              borderBottom: ri < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
              background: ri === 2 ? "rgba(137,180,212,0.04)" : "transparent",
            }}
          >
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{row.label}</div>
            {row.values.map((v, vi) => (
              <div key={vi} style={{
                fontSize: 14, fontWeight: 700, textAlign: "center",
                fontFamily: "var(--font-baskerville), serif",
                color: vi === 2 ? "#89B4D4" : "#fff",
              }}>
                {v}
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.5 }}
        style={{ marginTop: 16, fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "0.3px" }}
      >
        Revenue Mix:  70% project-based (hardscape, plantings, sod)  •  30% recurring maintenance  •  Additional commercial snow removal contracts
      </motion.div>
    </div>
  );
}
