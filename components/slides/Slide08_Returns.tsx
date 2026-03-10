"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { returnsData } from "@/lib/slides-data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SlideLabel from "@/components/ui/SlideLabel";

const terms = [
  { label: "Preferred Return", value: "8%" },
  { label: "Co-Investor Share (Pre)", value: "70%" },
  { label: "Co-Investor Share (Post)", value: "40%" },
  { label: "Employee Profit Share", value: "5%" },
  { label: "Management Fee", value: "Zero" },
];

export default function Slide08_Returns() {
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
      {/* Glow */}
      <div style={{
        position: "absolute", top: "30%", left: "30%", transform: "translate(-50%, -50%)",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(137,180,212,0.1) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <SlideLabel>Co-Investor Returns</SlideLabel>

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
        Projected Return Profile
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 40 }}
      >
        Based on $530K Year 1 cash flow · Conservative annual growth assumptions
      </motion.p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, flex: 1 }}>
        {/* Hero metrics */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* IRR - big hero number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 120, damping: 14 }}
            style={{
              background: "linear-gradient(135deg, rgba(74,127,168,0.15) 0%, rgba(137,180,212,0.08) 100%)",
              border: "1px solid rgba(137,180,212,0.25)",
              borderRadius: 20,
              padding: "32px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(circle at 50% 0%, rgba(137,180,212,0.1) 0%, transparent 60%)",
              pointerEvents: "none",
            }} />
            <div className="label" style={{ justifyContent: "center", marginBottom: 12 }}>5-Year IRR</div>
            <div style={{
              fontFamily: "var(--font-baskerville), serif",
              fontSize: "clamp(48px, 6vw, 80px)",
              fontWeight: 700,
              lineHeight: 1,
              color: "#89B4D4",
            }}>
              {inView && <AnimatedCounter target={returnsData.irr} suffix="%" decimals={1} duration={1800} />}
            </div>
          </motion.div>

          {/* Secondary metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "Post-Payback Yield", value: returnsData.postPaybackYield, suffix: "%+" },
              { label: "Principal Repayment", value: returnsData.principalRepayment, suffix: " Yrs" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                style={{
                  background: "#0E1117",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  padding: "20px 16px",
                  textAlign: "center",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-baskerville), serif",
                  fontSize: "clamp(20px, 2vw, 28px)",
                  fontWeight: 700,
                  color: "#C5DCF0",
                  marginBottom: 6,
                }}>
                  {inView && <AnimatedCounter target={m.value} suffix={m.suffix} decimals={m.suffix === " Yrs" ? 1 : 0} duration={1600} />}
                </div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Payout bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            style={{
              background: "#0E1117",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 14,
              padding: "16px 20px",
            }}
          >
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 10 }}>
              Principal repayment timeline
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 3, overflow: "hidden" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(returnsData.principalRepayment / 10) * 100}%` }}
                transition={{ delay: 1.0, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: "100%", background: "linear-gradient(90deg, #4A7FA8, #89B4D4)", borderRadius: 3 }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 9, color: "rgba(255,255,255,0.2)" }}>
              <span>Year 0</span><span>Year 5.8</span><span>Year 10</span>
            </div>
          </motion.div>
        </div>

        {/* Key terms */}
        <div>
          <div className="label" style={{ marginBottom: 20 }}>Key Terms</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {terms.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.45 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom: i < terms.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{t.label}</span>
                <span style={{
                  fontSize: 15, fontWeight: 700,
                  color: t.label === "Management Fee" ? "#C5DCF0" : "#89B4D4",
                  fontFamily: "var(--font-baskerville), serif",
                }}>
                  {t.value}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            style={{
              marginTop: 24,
              background: "rgba(137,180,212,0.07)",
              border: "1px solid rgba(137,180,212,0.15)",
              borderRadius: 12,
              padding: "16px 20px",
              fontSize: 12,
              color: "rgba(255,255,255,0.5)",
              fontStyle: "italic",
              fontFamily: "var(--font-baskerville), serif",
              lineHeight: 1.6,
            }}
          >
            "Zero Management Fee: We only win when you do."
          </motion.div>
        </div>
      </div>
    </div>
  );
}
