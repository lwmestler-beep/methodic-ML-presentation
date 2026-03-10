"use client";
import { motion } from "framer-motion";
import { valueCreationPhases } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

export default function Slide10_ValueCreation() {
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
        position: "absolute", bottom: "-20%", left: "50%", transform: "translateX(-50%)",
        width: 800, height: 400,
        background: "radial-gradient(ellipse, rgba(74,127,168,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <SlideLabel>Value Creation</SlideLabel>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{
          fontFamily: "var(--font-baskerville), serif",
          fontSize: "clamp(22px, 2.8vw, 38px)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: 40,
        }}
      >
        Post-Acquisition Growth Plan
      </motion.h2>

      <div style={{ display: "flex", flex: 1, gap: 0, position: "relative" }}>
        {/* Connecting line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            top: 28,
            left: "calc(16.5% + 16px)",
            right: "calc(16.5% + 16px)",
            height: 1,
            background: "linear-gradient(90deg, #4A7FA8, #89B4D4, #C5DCF0)",
            transformOrigin: "left",
            zIndex: 0,
          }}
        />

        {valueCreationPhases.map((phase, i) => (
          <motion.div
            key={phase.range}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + i * 0.2,
              duration: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 16,
            }}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}
          >
            {/* Timeline node */}
            <div style={{ position: "relative", marginBottom: 24 }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.4, type: "spring", stiffness: 200 }}
                style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${phase.color}33, ${phase.color}22)`,
                  border: `2px solid ${phase.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 700,
                  fontFamily: "var(--font-baskerville), serif",
                  color: phase.color,
                }}
              >
                {i + 1}
              </motion.div>
            </div>

            {/* Card */}
            <div style={{
              background: "#0E1117",
              border: `1px solid ${phase.color}22`,
              borderRadius: 16,
              padding: "20px",
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${phase.color}, transparent)`,
                borderRadius: "16px 16px 0 0",
              }} />

              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "2px",
                textTransform: "uppercase", color: phase.color, marginBottom: 8,
              }}>
                {phase.range}
              </div>

              <div style={{
                fontFamily: "var(--font-baskerville), serif",
                fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 16,
              }}>
                {phase.title}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {phase.items.map((item, j) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.2 + j * 0.06, duration: 0.35 }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 8,
                      fontSize: 11, color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: phase.color, flexShrink: 0, fontSize: 10, marginTop: 2 }}>→</span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
