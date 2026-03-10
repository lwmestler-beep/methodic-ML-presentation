"use client";
import { motion } from "framer-motion";
import { operatingTeam, advisors } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

function Initials({ name, size = 40 }: { name: string; size?: number }) {
  const parts = name.split(" ");
  const initials = parts.map((p) => p[0]).join("").slice(0, 2);
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: "linear-gradient(135deg, #4A7FA8 0%, #89B4D4 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.34, fontWeight: 700, color: "#fff", flexShrink: 0,
      fontFamily: "var(--font-baskerville), serif",
      marginBottom: 8,
    }}>
      {initials}
    </div>
  );
}

export default function Slide02_OperatingTeam() {
  return (
    <div style={{
      width: "100%", height: "100%", background: "#080A0E",
      display: "flex", flexDirection: "column",
      padding: "44px 60px 36px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "20%", right: "-10%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(74,127,168,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

      <SlideLabel>Operating Team &amp; Advisors</SlideLabel>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{
          fontFamily: "var(--font-baskerville), serif",
          fontSize: "clamp(20px, 2.6vw, 34px)",
          fontWeight: 700, color: "#fff", marginBottom: 24,
        }}
      >
        OPERATING TEAM <span style={{ background: "linear-gradient(135deg,#89B4D4,#C5DCF0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>&amp;</span> ADVISORS
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, flex: 1, minHeight: 0 }}>

        {/* Left: Operating Team */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            style={{ fontSize: 11, fontWeight: 600, color: "#89B4D4", letterSpacing: "3px", textTransform: "uppercase", marginBottom: 14 }}
          >
            Operating Team
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {operatingTeam.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.5, type: "spring", stiffness: 130, damping: 18 }}
                style={{
                  background: "#0E1117",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "14px 10px",
                  display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                }}
              >
                <Initials name={m.name} size={42} />
                <div style={{ fontSize: 11, fontWeight: 600, color: "#fff", lineHeight: 1.2 }}>{m.name}</div>
                <div style={{ fontSize: 9, color: "#89B4D4", letterSpacing: "0.5px", marginTop: 3, lineHeight: 1.3 }}>{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Advisors */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            style={{ fontSize: 11, fontWeight: 600, color: "#89B4D4", letterSpacing: "3px", textTransform: "uppercase", marginBottom: 14 }}
          >
            Strategic Advisors
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {advisors.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.25 + i * 0.06, duration: 0.5, type: "spring", stiffness: 130, damping: 18 }}
                style={{
                  background: "#0E1117",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10,
                  padding: "12px 6px",
                  display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                }}
              >
                <Initials name={a.name} size={34} />
                <div style={{ fontSize: 10, fontWeight: 600, color: "#fff", lineHeight: 1.2 }}>{a.name}</div>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", letterSpacing: "0.3px", marginTop: 3, lineHeight: 1.3 }}>{a.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* eTower banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.5 }}
        style={{
          marginTop: 20,
          background: "rgba(137,180,212,0.07)", border: "1px solid rgba(137,180,212,0.15)",
          borderRadius: 10, padding: "12px 24px", textAlign: "center",
        }}
      >
        <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginRight: 8 }}>Backed by eTower</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
          An elite entrepreneurship community at Babson College. Alumni have built companies valued at over{" "}
          <span style={{ color: "#89B4D4", fontWeight: 700 }}>$3 billion</span>, providing an extensive network for deal sourcing, operational expertise, and talent recruitment.
        </span>
      </motion.div>
    </div>
  );
}
