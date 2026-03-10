"use client";
import { motion } from "framer-motion";
import { operationsData } from "@/lib/slides-data";
import SlideLabel from "@/components/ui/SlideLabel";

export default function Slide05_Operations() {
  return (
    <div style={{
      width: "100%", height: "100%", background: "#080A0E",
      display: "flex", flexDirection: "column",
      padding: "52px 64px 44px",
      position: "relative", overflow: "hidden",
    }}>
      <SlideLabel>Operational Stability</SlideLabel>

      <motion.h2
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{ fontFamily: "var(--font-baskerville), serif", fontSize: "clamp(22px, 2.6vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: 10 }}
      >
        Dedicated Operator + Methodic Backend
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.4 }}
        style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 32, maxWidth: 680, lineHeight: 1.6 }}
      >
        We&rsquo;re not managing this from the sidelines. An experienced, full-time operator will run day-to-day operations with Methodic providing the back-office systems, marketing, and strategic support to drive growth.
      </motion.p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, flex: 1 }}>
        {/* Operator */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.65, type: "spring", stiffness: 110, damping: 16 }}
          style={{
            background: "#0E1117", border: "1px solid rgba(137,180,212,0.18)",
            borderRadius: 16, padding: "28px",
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #4A7FA8, #89B4D4)" }} />
          <div className="label" style={{ marginBottom: 20 }}>On-Site Operator</div>

          <div style={{ display: "flex", gap: 28, marginBottom: 20 }}>
            {[
              { value: operationsData.operator.salary, label: "BASE SALARY" },
              { value: operationsData.operator.profitShare, label: "PROFIT SHARE" },
            ].map((m) => (
              <div key={m.label}>
                <div style={{ fontFamily: "var(--font-baskerville), serif", fontSize: 28, fontWeight: 700, color: "#89B4D4", marginBottom: 4 }}>{m.value}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "2px", textTransform: "uppercase" }}>{m.label}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, marginBottom: 16 }}>
            {operationsData.operator.note}
          </div>

          {operationsData.operator.responsibilities.map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 + i * 0.08 }}
              style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 8 }}
            >
              <span style={{ color: "#89B4D4", flexShrink: 0 }}>—</span>
              {r}
            </motion.div>
          ))}
        </motion.div>

        {/* Methodic backend */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.65, type: "spring", stiffness: 110, damping: 16 }}
          style={{
            background: "#0E1117", border: "1px solid rgba(137,180,212,0.12)",
            borderRadius: 16, padding: "28px",
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #89B4D4, #C5DCF0)" }} />
          <div className="label" style={{ marginBottom: 20 }}>Methodic Backend Team</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {operationsData.backend.map((b, i) => (
              <motion.div
                key={b.item}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.07 }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "9px 14px",
                  background: "rgba(137,180,212,0.04)", border: "1px solid rgba(137,180,212,0.08)",
                  borderRadius: 8,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.65)" }}>
                  <span style={{ color: "#89B4D4", fontSize: 12 }}>→</span>
                  {b.item}
                </div>
                {b.person && (
                  <span style={{ fontSize: 10, color: "#89B4D4", whiteSpace: "nowrap", marginLeft: 8, opacity: 0.8 }}>
                    {b.person}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.5 }}
            style={{ marginTop: 14, fontSize: 11, color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}
          >
            This dual structure ensures experienced on-site leadership with a full team scaling systems from day one.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
