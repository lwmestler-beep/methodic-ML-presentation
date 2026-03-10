"use client";
import { motion } from "framer-motion";
import SlideLabel from "@/components/ui/SlideLabel";

const operatorItems = [
  "Estimating & crew scheduling",
  "Client relationships",
  "Project oversight",
  "On-site day-to-day operations",
];

const methodicItems = [
  "Digital marketing & lead generation",
  "AI systems & automation",
  "Operations & process optimization",
  "Financial oversight & investor reporting",
  "Strategic growth planning & pricing",
  "CRM, scheduling & technology stack",
];

export default function Slide05_Operations() {
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
      <SlideLabel>Operational Stability</SlideLabel>

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
        Dedicated Operator + Methodic Backend
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 40, maxWidth: 600 }}
      >
        We're not managing this from the sidelines. Experienced leadership on-site with a full team scaling systems behind it.
      </motion.p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, flex: 1 }}>
        {/* Operator card */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring", stiffness: 100, damping: 16 }}
          style={{
            background: "#0E1117",
            border: "1px solid rgba(137,180,212,0.2)",
            borderRadius: 20,
            padding: "32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 4,
            background: "linear-gradient(90deg, #4A7FA8, #89B4D4)",
            borderRadius: "20px 20px 0 0",
          }} />

          <div className="label" style={{ marginBottom: 20 }}>On-Site Operator</div>

          <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-baskerville), serif",
                fontSize: 28, fontWeight: 700, color: "#89B4D4",
              }}>
                $100K+
              </div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "2px", textTransform: "uppercase", marginTop: 4 }}>
                Base Salary
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-baskerville), serif",
                fontSize: 28, fontWeight: 700, color: "#C5DCF0",
              }}>
                5%
              </div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "2px", textTransform: "uppercase", marginTop: 4 }}>
                Profit Share
              </div>
            </div>
          </div>

          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, marginBottom: 24 }}>
            Salary + profit share aligns the operator's incentives directly with business performance.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {operatorItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: "rgba(255,255,255,0.6)" }}
              >
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#89B4D4", flexShrink: 0 }} />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodic backend card */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, type: "spring", stiffness: 100, damping: 16 }}
          style={{
            background: "#0E1117",
            border: "1px solid rgba(137,180,212,0.15)",
            borderRadius: 20,
            padding: "32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 4,
            background: "linear-gradient(90deg, #89B4D4, #C5DCF0)",
            borderRadius: "20px 20px 0 0",
          }} />

          <div className="label" style={{ marginBottom: 20 }}>Methodic Backend</div>

          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, marginBottom: 24 }}>
            A full team of operators scaling systems, marketing, and efficiency from day one.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {methodicItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 + i * 0.07 }}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  fontSize: 12, color: "rgba(255,255,255,0.6)",
                  background: "rgba(137,180,212,0.04)",
                  border: "1px solid rgba(137,180,212,0.08)",
                  borderRadius: 8,
                  padding: "8px 12px",
                }}
              >
                <span style={{ color: "#89B4D4", fontSize: 14 }}>→</span>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
