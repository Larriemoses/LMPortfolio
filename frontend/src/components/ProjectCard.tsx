// src/components/ProjectCard.tsx
import React from "react";
import { motion } from "framer-motion";

const palette = {
  bg: "#0d1321",
  panel: "#1d2d44",
  accent: "#3e5c76",
  subtle: "#748cab",
  text: "#f0ebd8",
};

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  link,
}: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0 12px 24px rgba(6,12,30,0.6)",
      }}
    >
      <div
        style={{
          border: `1px solid ${palette.accent}`,
          borderRadius: 12,
          padding: 18,
          background: "rgba(13,19,33,0.45)",
          height: "100%",
        }}
      >
        <h3 style={{ color: palette.text }} className="text-lg font-semibold">
          {title}
        </h3>
        <p style={{ color: palette.subtle }} className="text-sm mt-2 mb-4">
          {description}
        </p>
        <span style={{ color: palette.accent }} className="text-xs font-mono">
          {techStack}
        </span>
      </div>
    </motion.a>
  );
}
