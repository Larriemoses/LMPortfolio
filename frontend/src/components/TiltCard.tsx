// src/components/TiltCard.tsx
import React from "react";
import { motion } from "framer-motion";

const palette = {
  bg: "#0d1321",
  panel: "#1d2d44",
  accent: "#3e5c76",
  subtle: "#748cab",
  text: "#f0ebd8",
};

interface TiltCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function TiltCard({
  title,
  subtitle,
  icon,
  children,
}: TiltCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0 12px 24px rgba(6,12,30,0.6)",
      }}
      className="rounded-xl p-6 transform-gpu"
      style={{
        border: `1px solid ${palette.accent}`,
        background: "rgba(13,19,33,0.45)",
      }}
    >
      <div style={{ color: palette.accent }} className="mb-3">
        {icon}
      </div>
      <h3 style={{ color: palette.text }} className="text-xl font-semibold">
        {title}
      </h3>
      <p style={{ color: palette.subtle }} className="text-sm mt-1 mb-4">
        {subtitle}
      </p>
      <p style={{ color: palette.subtle }} className="text-sm">
        {children}
      </p>
    </motion.div>
  );
}
