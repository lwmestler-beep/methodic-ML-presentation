"use client";
import { motion } from "framer-motion";
import { dealStructure } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

export default function Slide06_DealStructure() {
  return (
    <div style={{
      width: "100%", height: "100%", background: "#080A0E",
      display: "flex", flexDirection: "column",
      padding: "52px 64px 44px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", bottom: "-10%", right: "-5%",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(74,127,168,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <SlideLabel>Deal Structure</SlideLabel>

      <motion.h2
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{ fontFamily: "var(--font-baskerville), serif", fontSize: "clamp(22px, 2.6vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: 32 }}
      >
        Sources &amp; Uses of Capital
      </motion.h2>

      {/* Three uses across top */}
      <div style={{ display: "flex", gap: 16, marginBottom: 28 }}>
        {[
          { label: "PURCHASE PRICE", value: dealStructure.purchasePrice },
          { label: "TRANSACTION COSTS", value: dealStructure.transactionCosts },
          { label: "WORKING CAPITAL", value: dealStructure.workingCapital },
        ].map((u, i) => (
          <motion.div
            key={u.label}
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5, type: "spring", stiffness: 130 }}
            style={{
              flex: 1, background: "#0E1117", border: "1px solid rgba(137,180,212,0.15)",
              borderRadius: 12, padding: "18px 20px", textAlign: "center",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #4A7FA8, #89B4D4)" }} />
            <div style={{ fontFamily: "var(--font-baskerville), serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 700, color: "#89B4D4", marginBottom: 6 }}>{u.value}</div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "2px", textTransform: "uppercase" }}>{u.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Sources table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.55 }}
        style={{ flex: 1, background: "#0E1117", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden" }}
      >
        {/* Table header */}
        <div style={{
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr",
          background: "rgba(137,180,212,0.08)", borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "12px 24px",
        }}>
          {["SOURCE", "AMOUNT", "% OF TOTAL"].map((h) => (
            <div key={h} style={{ fontSize: 10, fontWeight: 700, color: "#89B4D4", letterSpacing: "2px" }}>{h}</div>
          ))}
        </div>

        {dealStructure.sources.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 + i * 0.1, duration: 0.4 }}
            style={{
              display: "grid", gridTemplateColumns: "2fr 1fr 1fr",
              padding: "16px 24px",
              borderBottom: i < dealStructure.sources.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: s.color, opacity: 0.7 }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: "#fff", fontWeight: 500 }}>{s.label}</span>
            </div>
            <div style={{ fontFamily: "var(--font-baskerville), serif", fontSize: 14, fontWeight: 700, color: s.color }}>{s.amount}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{s.pct}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.5 }}
        style={{ marginTop: 16, fontSize: 11, color: "rgba(255,255,255,0.25)", lineHeight: 1.6 }}
      >
        {dealStructure.loanTerms}
      </motion.div>
    </div>
  );
}
