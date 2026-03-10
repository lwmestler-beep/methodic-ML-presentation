"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { growthProjections } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

function GrowthChart({ data }: { data: typeof growthProjections }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(0);

  const W = 560;
  const H = 200;
  const padL = 60;
  const padR = 20;
  const padT = 20;
  const padB = 30;

  const maxRev = Math.max(...data.map(d => d.revenue));
  const maxCF = Math.max(...data.map(d => d.cashflow));

  const xScale = (i: number) => padL + (i / (data.length - 1)) * (W - padL - padR);
  const yRevScale = (v: number) => H - padB - ((v / (maxRev * 1.1)) * (H - padT - padB));
  const yCFScale = (v: number) => H - padB - ((v / (maxCF * 1.1)) * (H - padT - padB));

  const revPoints = data.map((d, i) => [xScale(i), yRevScale(d.revenue)]);
  const cfPoints = data.map((d, i) => [xScale(i), yCFScale(d.cashflow)]);

  const pathFromPoints = (pts: number[][], p: number) => {
    if (pts.length === 0) return "";
    const totalPts = Math.floor(p * (pts.length - 1)) + 1;
    const clipped = pts.slice(0, totalPts);
    if (clipped.length === 1) return `M ${clipped[0][0]} ${clipped[0][1]}`;
    let d = `M ${clipped[0][0]} ${clipped[0][1]}`;
    for (let i = 1; i < clipped.length; i++) {
      const cpx = (clipped[i - 1][0] + clipped[i][0]) / 2;
      d += ` C ${cpx} ${clipped[i - 1][1]}, ${cpx} ${clipped[i][1]}, ${clipped[i][0]} ${clipped[i][1]}`;
    }
    return d;
  };

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const animate = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 2);
      setProgress(eased);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView]);

  return (
    <svg ref={ref} width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ overflow: "visible" }}>
      {/* Grid lines */}
      {[0.25, 0.5, 0.75, 1].map((t) => (
        <line
          key={t}
          x1={padL}
          y1={H - padB - t * (H - padT - padB)}
          x2={W - padR}
          y2={H - padB - t * (H - padT - padB)}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={1}
        />
      ))}

      {/* X axis */}
      <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="rgba(255,255,255,0.1)" strokeWidth={1} />

      {/* Year labels */}
      {data.map((d, i) => (
        <text
          key={i}
          x={xScale(i)}
          y={H - 6}
          textAnchor="middle"
          fill="rgba(255,255,255,0.3)"
          fontSize={10}
        >
          Yr {d.year}
        </text>
      ))}

      {/* Cash flow line */}
      <path
        d={pathFromPoints(cfPoints, progress)}
        fill="none"
        stroke="rgba(197,220,240,0.5)"
        strokeWidth={2}
        strokeLinecap="round"
      />

      {/* Revenue line */}
      <path
        d={pathFromPoints(revPoints, progress)}
        fill="none"
        stroke="#89B4D4"
        strokeWidth={2.5}
        strokeLinecap="round"
      />

      {/* Glow on revenue line */}
      <path
        d={pathFromPoints(revPoints, progress)}
        fill="none"
        stroke="#89B4D4"
        strokeWidth={8}
        strokeLinecap="round"
        opacity={0.15}
      />

      {/* Dots */}
      {revPoints.map(([x, y], i) => {
        if (i > Math.floor(progress * (data.length - 1))) return null;
        return (
          <circle key={i} cx={x} cy={y} r={4} fill="#89B4D4" stroke="#080A0E" strokeWidth={2} />
        );
      })}

      {/* Revenue labels */}
      {revPoints.map(([x, y], i) => {
        if (i > Math.floor(progress * (data.length - 1))) return null;
        return (
          <text key={i} x={x} y={y - 10} textAnchor="middle" fill="#89B4D4" fontSize={9} fontFamily="var(--font-mono)">
            ${data[i].revenue}K
          </text>
        );
      })}
    </svg>
  );
}

export default function Slide07_Growth() {
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
        position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
        width: 700, height: 400,
        background: "radial-gradient(ellipse, rgba(74,127,168,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <SlideLabel>Growth Projections</SlideLabel>

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
        Conservative Five-Year Assumptions
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 36 }}
      >
        All values in thousands ($K) · Projections based on conservative mid-range estimates · Operator salary already deducted
      </motion.p>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{ marginBottom: 32 }}
      >
        <GrowthChart data={growthProjections} />
      </motion.div>

      {/* Year cards */}
      <div style={{ display: "flex", gap: 12 }}>
        {growthProjections.map((row, i) => (
          <motion.div
            key={row.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            style={{
              flex: 1,
              background: "#0E1117",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12,
              padding: "14px 12px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: `linear-gradient(90deg, #4A7FA8, #89B4D4)`,
              opacity: 0.5,
            }} />
            <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.3)", marginBottom: 6, letterSpacing: "1px" }}>
              YEAR {row.year}
            </div>
            <div style={{
              fontSize: 15, fontWeight: 700,
              color: row.pct < 0 ? "#C5DCF0" : "#89B4D4",
              fontFamily: "var(--font-baskerville), serif",
              marginBottom: 4,
            }}>
              {row.pct > 0 ? "+" : ""}{row.pct}%
            </div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "1px" }}>
              {row.note}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ display: "flex", gap: 24, marginTop: 16 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 20, height: 2.5, background: "#89B4D4", borderRadius: 2 }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Revenue ($K)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 20, height: 2.5, background: "rgba(197,220,240,0.5)", borderRadius: 2 }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Cash Flow ($K)</span>
        </div>
      </motion.div>
    </div>
  );
}
