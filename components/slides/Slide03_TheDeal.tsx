"use client";
import { motion } from "framer-motion";
import { dealStats } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

const features = [
  { title: "Full-Service Landscaping", desc: "Hardscape construction, plantings, sod installation, landscape design, and seasonal maintenance across Boston's South Shore." },
  { title: "Recurring Revenue Base", desc: "5 maintenance crews serving 80–100 customers monthly. $30K–$40K/month in recurring maintenance revenue year-round." },
  { title: "Commercial Snow Removal", desc: "Contracted snow removal for office parks and institutional clients provides reliable winter revenue floor." },
  { title: "$1.5M Equipment Fleet", desc: "Substantial fleet of trucks, excavators, skid steers, and specialized landscaping equipment included in purchase price." },
];

export default function Slide03_TheDeal() {
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
        position: "absolute", bottom: "-20%", left: "-10%",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(74,127,168,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <SlideLabel>The Deal</SlideLabel>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 36 }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-baskerville), serif",
              fontSize: "clamp(22px, 2.8vw, 38px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: 8,
            }}
          >
            Established Landscaping Business
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "1px" }}
          >
            Hanover, MA · South Shore Boston · Est. 2005 · 20 Years in Operation
          </motion.div>
        </div>

        {/* Map pin drop */}
        <motion.div
          initial={{ y: -40, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200, damping: 14 }}
          style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            background: "rgba(137,180,212,0.08)",
            border: "1px solid rgba(137,180,212,0.2)",
            borderRadius: 12,
            padding: "12px 20px",
          }}
        >
          <div style={{ fontSize: 24, marginBottom: 4 }}>📍</div>
          <div style={{ fontSize: 11, color: "#89B4D4", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600 }}>
            Hanover, MA
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>South Shore</div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        style={{
          display: "flex",
          gap: 0,
          marginBottom: 32,
          background: "#0E1117",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        {dealStats.map((s, i) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              padding: "16px 20px",
              textAlign: "center",
              borderRight: i < dealStats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
          >
            <div style={{
              fontFamily: "var(--font-baskerville), serif",
              fontSize: "clamp(14px, 1.6vw, 22px)",
              fontWeight: 700,
              color: "#89B4D4",
              marginBottom: 4,
            }}>
              {s.value}
            </div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "2px", textTransform: "uppercase" }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Feature cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, flex: 1 }}>
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.5 + i * 0.1,
              duration: 0.55,
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            style={{
              background: "#0E1117",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 14,
              padding: "20px 22px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
              background: "linear-gradient(180deg, #4A7FA8, #89B4D4)",
              borderRadius: "3px 0 0 3px",
            }} />
            <div style={{
              fontSize: 13, fontWeight: 700, color: "#fff",
              marginBottom: 8, paddingLeft: 4,
            }}>
              {f.title}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, paddingLeft: 4 }}>
              {f.desc}
            </div>
          </motion.div>
        ))}
      </div>

      {/* S-Corp badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        style={{
          marginTop: 16,
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        {["S-Corp", "Not a Franchise", "3–5 Year-Round / 22–25 Peak Season", "No Special Licenses Required"].map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "4px 10px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
