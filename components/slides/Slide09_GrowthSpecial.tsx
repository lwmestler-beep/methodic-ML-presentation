"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { growthProjections } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

// ---  SVG Chart  ---
function GrowthChart({
  data,
  activeYear,
  onHover,
}: {
  data: typeof growthProjections;
  activeYear: number | null;
  onHover: (i: number | null) => void;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(0);

  const W = 560;
  const H = 220;
  const padL = 56;
  const padR = 24;
  const padT = 28;
  const padB = 36;

  const maxRev = Math.max(...data.map((d) => d.revenue));
  const maxCF = Math.max(...data.map((d) => d.cashflow));
  const xScale = (i: number) => padL + (i / (data.length - 1)) * (W - padL - padR);
  const yRev = (v: number) => H - padB - ((v / (maxRev * 1.15)) * (H - padT - padB));
  const yCF = (v: number) => H - padB - ((v / (maxCF * 1.15)) * (H - padT - padB));

  const revPts = data.map((d, i) => [xScale(i), yRev(d.revenue)]);
  const cfPts = data.map((d, i) => [xScale(i), yCF(d.cashflow)]);

  const buildPath = (pts: number[][], p: number) => {
    const total = Math.floor(p * (pts.length - 1)) + 1;
    const clip = pts.slice(0, Math.min(total, pts.length));
    if (clip.length < 2) return clip.length === 1 ? `M ${clip[0][0]} ${clip[0][1]}` : "";
    let d = `M ${clip[0][0]} ${clip[0][1]}`;
    for (let i = 1; i < clip.length; i++) {
      const cpx = (clip[i - 1][0] + clip[i][0]) / 2;
      d += ` C ${cpx} ${clip[i - 1][1]}, ${cpx} ${clip[i][1]}, ${clip[i][0]} ${clip[i][1]}`;
    }
    return d;
  };

  // Area under revenue line
  const buildArea = (pts: number[][], p: number) => {
    const path = buildPath(pts, p);
    if (!path) return "";
    const lastPt = pts[Math.min(Math.floor(p * (pts.length - 1)), pts.length - 1)];
    return `${path} L ${lastPt[0]} ${H - padB} L ${padL} ${H - padB} Z`;
  };

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    const animate = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 2.5);
      setProgress(eased);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView]);

  return (
    <svg
      ref={ref}
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      style={{ overflow: "visible", width: "100%", height: "auto" }}
    >
      <defs>
        <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#89B4D4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#89B4D4" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Grid */}
      {[0.25, 0.5, 0.75, 1].map((t) => (
        <line key={t}
          x1={padL} y1={H - padB - t * (H - padT - padB)}
          x2={W - padR} y2={H - padB - t * (H - padT - padB)}
          stroke="rgba(255,255,255,0.05)" strokeWidth={1} strokeDasharray="4 4"
        />
      ))}
      {/* X axis */}
      <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="rgba(255,255,255,0.1)" strokeWidth={1} />

      {/* Revenue area */}
      <path d={buildArea(revPts, progress)} fill="url(#revGrad)" />

      {/* Cash flow line */}
      <path d={buildPath(cfPts, progress)} fill="none" stroke="rgba(197,220,240,0.45)" strokeWidth={2} strokeLinecap="round" strokeDasharray="6 3" />

      {/* Revenue line */}
      <path d={buildPath(revPts, progress)} fill="none" stroke="#89B4D4" strokeWidth={2.5} strokeLinecap="round" filter="url(#glow)" />

      {/* Year labels + hover dots */}
      {data.map((d, i) => {
        const shown = i <= Math.floor(progress * (data.length - 1));
        const isActive = activeYear === i;
        return (
          <g key={i}>
            {/* Hover zone */}
            <rect
              x={xScale(i) - 30} y={padT} width={60} height={H - padT - padB}
              fill="transparent" style={{ cursor: "pointer" }}
              onMouseEnter={() => onHover(i)} onMouseLeave={() => onHover(null)}
            />
            {/* Revenue dot */}
            {shown && (
              <circle cx={revPts[i][0]} cy={revPts[i][1]} r={isActive ? 7 : 4}
                fill={isActive ? "#fff" : "#89B4D4"} stroke="#080A0E" strokeWidth={2}
                style={{ transition: "r 0.2s" }}
              />
            )}
            {/* CF dot */}
            {shown && (
              <circle cx={cfPts[i][0]} cy={cfPts[i][1]} r={isActive ? 5 : 3}
                fill={isActive ? "#fff" : "rgba(197,220,240,0.6)"} stroke="#080A0E" strokeWidth={1.5}
                style={{ transition: "r 0.2s" }}
              />
            )}
            {/* Year label */}
            <text x={xScale(i)} y={H - 8} textAnchor="middle"
              fill={isActive ? "#89B4D4" : "rgba(255,255,255,0.3)"} fontSize={11}
              fontFamily="var(--font-mono)"
            >
              Yr {d.year}
            </text>
            {/* Active vertical line */}
            {isActive && shown && (
              <line x1={xScale(i)} y1={padT} x2={xScale(i)} y2={H - padB}
                stroke="rgba(137,180,212,0.2)" strokeWidth={1} strokeDasharray="3 3"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

// --- Particle burst for entry ---
function BurstParticle({ angle, delay }: { angle: number; delay: number }) {
  const rad = (angle * Math.PI) / 180;
  const dist = 60 + Math.random() * 40;
  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{ x: Math.cos(rad) * dist, y: Math.sin(rad) * dist, opacity: 0, scale: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      style={{
        position: "absolute", width: 4, height: 4, borderRadius: "50%",
        background: "#89B4D4", pointerEvents: "none",
      }}
    />
  );
}

export default function Slide09_GrowthSpecial() {
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [showBurst, setShowBurst] = useState(false);
  const [totalRevCounter, setTotalRevCounter] = useState(0);

  const totalRev = growthProjections.reduce((sum, d) => sum + d.revenue, 0);

  useEffect(() => {
    // Entry burst
    const t1 = setTimeout(() => setShowBurst(true), 300);
    // Total rev counter
    const start = performance.now();
    const dur = 2200;
    const animate = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 2);
      setTotalRevCounter(eased * totalRev);
      if (p < 1) requestAnimationFrame(animate);
    };
    const t2 = setTimeout(() => requestAnimationFrame(animate), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [totalRev]);

  const active = activeYear !== null ? growthProjections[activeYear] : null;

  return (
    <div style={{
      width: "100%", height: "100%", background: "#080A0E",
      display: "flex", flexDirection: "column",
      padding: "52px 64px 44px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Deep glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute", top: "55%", left: "50%", transform: "translate(-50%, -50%)",
          width: 900, height: 600,
          background: "radial-gradient(ellipse, rgba(74,127,168,0.13) 0%, rgba(137,180,212,0.04) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Entry burst particles */}
      {showBurst && (
        <div style={{ position: "absolute", top: "28%", left: "50%", pointerEvents: "none" }}>
          {Array.from({ length: 16 }, (_, i) => (
            <BurstParticle key={i} angle={(i / 16) * 360} delay={i * 0.03} />
          ))}
        </div>
      )}

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <SlideLabel>Growth Projections</SlideLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            style={{
              fontFamily: "var(--font-baskerville), serif",
              fontSize: "clamp(22px, 2.8vw, 40px)",
              fontWeight: 700, color: "#fff",
              letterSpacing: "-0.5px",
            }}
          >
            Conservative Five-Year Outlook
          </motion.h2>
        </div>

        {/* Total revenue hero counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7, type: "spring", stiffness: 120, damping: 14 }}
          style={{
            background: "linear-gradient(135deg, rgba(74,127,168,0.2), rgba(137,180,212,0.12))",
            border: "1px solid rgba(137,180,212,0.3)",
            borderRadius: 16, padding: "16px 24px",
            textAlign: "center", minWidth: 180,
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(circle at 50% 0%, rgba(137,180,212,0.12) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
          <div style={{ fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase", color: "#89B4D4", marginBottom: 6, fontWeight: 700 }}>
            5-Year Total Revenue
          </div>
          <div style={{
            fontFamily: "var(--font-baskerville), serif",
            fontSize: 28, fontWeight: 700, color: "#fff",
            fontVariantNumeric: "tabular-nums",
          }}>
            ${totalRevCounter.toFixed(0)}K
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>
            projected cumulative
          </div>
        </motion.div>
      </div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ marginBottom: 20, position: "relative" }}
      >
        <GrowthChart data={growthProjections} activeYear={activeYear} onHover={setActiveYear} />
      </motion.div>

      {/* Year cards */}
      <div style={{ display: "flex", gap: 10 }}>
        {growthProjections.map((row, i) => (
          <motion.div
            key={row.year}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5, type: "spring", stiffness: 120, damping: 16 }}
            onMouseEnter={() => setActiveYear(i)}
            onMouseLeave={() => setActiveYear(null)}
            style={{
              flex: 1,
              background: activeYear === i ? "rgba(137,180,212,0.12)" : "#0E1117",
              border: activeYear === i ? "1px solid rgba(137,180,212,0.35)" : "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12, padding: "14px 12px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              position: "relative", overflow: "hidden",
            }}
          >
            {/* Top accent line */}
            <motion.div
              animate={{ opacity: activeYear === i ? 1 : 0 }}
              style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(90deg, #4A7FA8, #89B4D4, #C5DCF0)",
              }}
            />
            <div style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.25)", marginBottom: 6, letterSpacing: "1.5px" }}>
              YEAR {row.year}
            </div>
            <div style={{
              fontFamily: "var(--font-baskerville), serif",
              fontSize: 13, fontWeight: 700,
              color: row.range.startsWith("-") ? "rgba(197,220,240,0.8)" : "#89B4D4",
              marginBottom: 3,
            }}>
              {row.range}
            </div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "1px", marginBottom: 6 }}>
              {row.note}
            </div>
            <AnimatePresence>
              {activeYear === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 8, marginTop: 4 }}>
                    <div style={{ fontSize: 10, color: "#89B4D4", marginBottom: 2 }}>
                      Rev: <span style={{ fontFamily: "var(--font-mono)" }}>${row.revenue}K</span>
                    </div>
                    <div style={{ fontSize: 10, color: "rgba(197,220,240,0.6)" }}>
                      CF: <span style={{ fontFamily: "var(--font-mono)" }}>${row.cashflow}K</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Legend + footnote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        style={{ display: "flex", gap: 24, alignItems: "center", marginTop: 14 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 20, height: 2.5, background: "#89B4D4", borderRadius: 2 }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>Revenue ($K)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 20, height: 2.5, background: "rgba(197,220,240,0.5)", borderRadius: 2, borderTop: "1.5px dashed rgba(197,220,240,0.5)" }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>Cash Flow ($K)</span>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 10, color: "rgba(255,255,255,0.2)", fontStyle: "italic" }}>
          Hover year cards to explore · Conservative mid-range estimates · Operator salary deducted
        </div>
      </motion.div>
    </div>
  );
}
