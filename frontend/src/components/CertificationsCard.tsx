// src/components/CertificationsCard.tsx
import React from "react";
import { motion } from "framer-motion";

const palette = {
  bg: "#0d1321",
  panel: "#1d2d44",
  accent: "#3e5c76",
  subtle: "#748cab",
  text: "#f0ebd8",
};

interface CertificationsCardProps {
  name: string;
  issuer: string;
  date: string;
}

export default function CertificationsCard({
  name,
  issuer,
  date,
}: CertificationsCardProps) {
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
      <h3 style={{ color: palette.text }} className="text-lg font-semibold">
        {name}
      </h3>
      <p style={{ color: palette.subtle }} className="text-sm mt-1">
        {issuer}
      </p>
      <p style={{ color: palette.subtle }} className="text-sm mt-1">
        Issued: {date}
      </p>
    </motion.div>
  );
}
