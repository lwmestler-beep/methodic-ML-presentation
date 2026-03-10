"use client";
import { motion } from "framer-motion";
import { opportunityGaps, opportunityUpside } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

export default function Slide09_Opportunity() {
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
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 800, height: 500,
        background: "radial-gradient(ellipse, rgba(74,127,168,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <SlideLabel>The Opportunity</SlideLabel>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{
          fontFamily: "var(--font-baskerville), serif",
          fontSize: "clamp(22px, 2.8vw, 38px)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: 8,
        }}
      >
        Untapped Potential, Clear Playbook
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 36, maxWidth: 600 }}
      >
        Essential service businesses with no digital infrastructure — implement modern systems and the growth compounds.
        <span style={{ color: "#89B4D4", fontWeight: 600 }}> Landscaping industry growing at 5.2% CAGR through 2029.</span>
      </motion.p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, flex: 1 }}>
        {/* Gaps */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}
          >
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(255,80,80,0.15)", border: "1px solid rgba(255,80,80,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>✕</div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,120,120,0.8)" }}>Current Gaps</span>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {opportunityGaps.map((gap, i) => (
              <motion.div
                key={gap}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.4 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "10px 14px",
                  background: "rgba(255,80,80,0.04)",
                  border: "1px solid rgba(255,80,80,0.1)",
                  borderRadius: 8,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.55)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span style={{ color: "rgba(255,120,120,0.5)", flexShrink: 0, marginTop: 1 }}>—</span>
                {gap}
                {/* Strike-through line animation */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.5 + i * 0.06, duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 14,
                    height: 1,
                    background: "rgba(255,120,120,0.4)",
                    transformOrigin: "left",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upside */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}
          >
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(137,180,212,0.15)", border: "1px solid rgba(137,180,212,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#89B4D4" }}>✓</div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#89B4D4" }}>Growth Levers</span>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {opportunityUpside.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 1.3 + i * 0.12, duration: 0.5, type: "spring", stiffness: 140, damping: 18 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "14px 16px",
                  background: "rgba(137,180,212,0.06)",
                  border: "1px solid rgba(137,180,212,0.15)",
                  borderRadius: 10,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.75)",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "#89B4D4", flexShrink: 0 }}>→</span>
                {item}
              </motion.div>
            ))}
          </div>

          {/* CAGR callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            style={{
              background: "linear-gradient(135deg, rgba(74,127,168,0.15), rgba(137,180,212,0.1))",
              border: "1px solid rgba(137,180,212,0.2)",
              borderRadius: 14,
              padding: "20px 24px",
              textAlign: "center",
            }}
          >
            <div style={{
              fontFamily: "var(--font-baskerville), serif",
              fontSize: 28, fontWeight: 700, color: "#89B4D4",
            }}>
              5.2% CAGR
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "1px", marginTop: 6 }}>
              Landscaping Industry Growth Through 2029
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
