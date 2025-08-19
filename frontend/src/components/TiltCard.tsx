// src/components/TiltCard.tsx
import React from "react";
import type { ReactNode } from "react"; // <-- Change this line
import { motion } from "framer-motion";

interface TiltCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  content: string;
}

const TiltCard: React.FC<TiltCardProps> = ({
  title,
  subtitle,
  icon,
  content,
}) => {
  return (
    <motion.div
      className="w-full md:w-auto"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0 12px 24px rgba(6,12,30,0.6)",
      }}
      style={{
        background: "rgba(13,19,33,0.45)",
        border: "1px solid rgba(62,92,118,0.4)",
        borderRadius: 12,
        padding: 24,
        cursor: "pointer",
      }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-shrink-0" style={{ color: "#3e5c76" }}>
          {icon}
        </div>
        <div className="flex flex-col">
          <h3
            className="text-xl font-semibold text-left"
            style={{ color: "#f0ebd8" }}
          >
            {title}
          </h3>
          <p className="text-sm mt-1 text-left" style={{ color: "#748cab" }}>
            {subtitle}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-left" style={{ color: "#748cab" }}>
        {content}
      </p>
    </motion.div>
  );
};

export default TiltCard;
