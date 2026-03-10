"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { dealStructure } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

function DonutChart({ segments, size = 180 }: {
  segments: { label: string; pct: number; color: string }[];
  size?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    const animate = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView]);

  const radius = size * 0.38;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = size * 0.14;

  let offset = 0;
  const arcs = segments.map((seg) => {
    const dash = (seg.pct / 100) * circumference * progress;
    const gap = circumference - dash;
    const rotation = offset * 3.6 - 90;
    offset += seg.pct;
    return { ...seg, dash, gap, rotation };
  });

  return (
    <svg ref={ref} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background circle */}
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={strokeWidth} />
      {arcs.map((arc) => (
        <circle
          key={arc.label}
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={arc.color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${arc.dash} ${arc.gap}`}
          strokeLinecap="round"
          style={{ transform: `rotate(${arc.rotation}deg)`, transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
      {/* Center text */}
      <text x={cx} y={cy - 6} textAnchor="middle" fill="#fff" fontSize={size * 0.1} fontWeight="700"
        style={{ fontFamily: "var(--font-baskerville), serif" }}>
        $2.2M
      </text>
      <text x={cx} y={cy + size * 0.08} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize={size * 0.065}>
        Purchase
      </text>
    </svg>
  );
}

export default function Slide06_DealStructure() {
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
        position: "absolute", bottom: "-10%", right: "-5%",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(74,127,168,0.09) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <SlideLabel>Deal Structure</SlideLabel>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{
          fontFamily: "var(--font-baskerville), serif",
          fontSize: "clamp(22px, 2.8vw, 38px)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: 36,
        }}
      >
        Sources &amp; Uses of Capital
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 60, alignItems: "center", flex: 1 }}>
        {/* Donut */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring", stiffness: 100, damping: 15 }}
        >
          <DonutChart segments={dealStructure.sources} size={220} />
        </motion.div>

        {/* Sources breakdown */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {dealStructure.sources.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 20px",
                  background: "#0E1117",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ width: 3, position: "absolute", left: 0, top: 0, bottom: 0, background: s.color, borderRadius: "3px 0 0 3px" }} />
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${s.color}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: s.color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{s.label}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: s.color, fontFamily: "var(--font-baskerville), serif" }}>
                    ${(s.amount / 1000).toFixed(0)}K
                  </div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "1px" }}>{s.pct}%</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Loan terms */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
            style={{
              background: "rgba(137,180,212,0.06)",
              border: "1px solid rgba(137,180,212,0.15)",
              borderRadius: 10,
              padding: "14px 18px",
              fontSize: 11,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.5px",
              lineHeight: 1.7,
            }}
          >
            {dealStructure.loanTerms}
          </motion.div>

          {/* Uses */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            style={{ display: "flex", gap: 16, marginTop: 16 }}
          >
            {[
              { label: "Purchase Price", value: "$2.2M" },
              { label: "Transaction Costs", value: "$125K" },
              { label: "Working Capital", value: "$125K" },
            ].map((u) => (
              <div key={u.label} style={{ flex: 1, textAlign: "center", padding: "10px", background: "#0E1117", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#C5DCF0", fontFamily: "var(--font-baskerville), serif" }}>{u.value}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: 4 }}>{u.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
