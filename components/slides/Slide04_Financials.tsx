"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { financials } from "@/lib/slides-data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SlideLabel from "@/components/ui/SlideLabel";

const MAX_REVENUE = 2.8;

export default function Slide04_Financials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
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
      <div style={{
        position: "absolute", top: "40%", right: "-5%",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(74,127,168,0.1) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <SlideLabel>Financial Highlights</SlideLabel>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{
          fontFamily: "var(--font-baskerville), serif",
          fontSize: "clamp(22px, 2.8vw, 38px)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: 32,
        }}
      >
        Three-Year Track Record
      </motion.h2>

      {/* Hero stats */}
      <div style={{ display: "flex", gap: 32, marginBottom: 44 }}>
        {[
          { label: "2025 Revenue", target: 2.5, prefix: "$", suffix: "M" },
          { label: "2025 Recast SDE", target: 630, prefix: "$", suffix: "K" },
          { label: "SDE Margin", target: 25.2, suffix: "%" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
            style={{
              background: "#0E1117",
              border: "1px solid rgba(137,180,212,0.15)",
              borderRadius: 14,
              padding: "20px 28px",
              minWidth: 150,
            }}
          >
            <div style={{
              fontFamily: "var(--font-baskerville), serif",
              fontSize: "clamp(24px, 2.5vw, 36px)",
              fontWeight: 700,
              color: "#89B4D4",
              marginBottom: 6,
            }}>
              {inView && (
                <AnimatedCounter
                  target={s.target}
                  prefix={s.prefix || ""}
                  suffix={s.suffix || ""}
                  decimals={s.suffix === "%" ? 1 : s.target < 10 ? 1 : 0}
                  duration={1600}
                />
              )}
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "2px", textTransform: "uppercase" }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bar chart */}
      <div style={{ display: "flex", gap: 32, alignItems: "flex-end", flex: 1, marginBottom: 24 }}>
        {financials.map((row, i) => {
          const revHeight = (row.revenue / MAX_REVENUE) * 200;
          const sdeHeight = (row.sde / MAX_REVENUE) * 200;
          return (
            <motion.div
              key={row.year}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}
            >
              {/* Bars */}
              <div style={{ display: "flex", gap: 8, alignItems: "flex-end", marginBottom: 12 }}>
                {/* Revenue bar */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 11, color: "#89B4D4", fontFamily: "var(--font-mono), monospace" }}>
                    ${row.revenue}M
                  </span>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: revHeight }}
                    transition={{ delay: 0.6 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      width: 48,
                      background: "linear-gradient(180deg, #89B4D4 0%, #4A7FA8 100%)",
                      borderRadius: "6px 6px 0 0",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 40%)",
                    }} />
                  </motion.div>
                </div>
                {/* SDE bar */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 11, color: "rgba(197,220,240,0.7)", fontFamily: "var(--font-mono), monospace" }}>
                    ${(row.sde * 1000).toFixed(0)}K
                  </span>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: sdeHeight }}
                    transition={{ delay: 0.7 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      width: 32,
                      background: "linear-gradient(180deg, rgba(197,220,240,0.7) 0%, rgba(74,127,168,0.5) 100%)",
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                </div>
              </div>
              <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.08)", marginBottom: 8 }} />
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>{row.year}</div>
              <div style={{ fontSize: 10, color: "#89B4D4", marginTop: 2 }}>{row.margin}% margin</div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        style={{ display: "flex", gap: 24, alignItems: "center" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 12, height: 12, borderRadius: 2, background: "#89B4D4" }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Revenue</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 12, height: 12, borderRadius: 2, background: "rgba(197,220,240,0.7)" }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Recast SDE</span>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
          Revenue Mix: 70% project · 30% recurring + snow contracts
        </div>
      </motion.div>
    </div>
  );
}
