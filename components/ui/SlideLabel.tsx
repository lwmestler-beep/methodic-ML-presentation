"use client";
import { motion } from "framer-motion";

export default function SlideLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="label"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      style={{ marginBottom: 16 }}
    >
      {children}
    </motion.div>
  );
}
