// src/components/TestimonialCard.tsx
import React from "react";
import { motion } from "framer-motion";

const palette = {
  bg: "#0d1321",
  panel: "#1d2d44",
  accent: "#3e5c76",
  subtle: "#748cab",
  text: "#f0ebd8",
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  source: string;
  rating: number;
}

export default function TestimonialCard({
  quote,
  author,
  source,
  rating,
}: TestimonialCardProps) {
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
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.168c.969 0 1.371 1.24.588 1.81l-3.376 2.454a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.683-1.54 1.118l-3.376-2.454a1 1 0 00-1.176 0l-3.376 2.454c-.785.565-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.096 9.385c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.691l1.286-3.957z" />
          </svg>
        ))}
        <span
          className="text-sm font-semibold ml-2"
          style={{ color: palette.text }}
        >
          {rating.toFixed(1)} / 5.0
        </span>
      </div>
      <p style={{ color: palette.subtle }} className="italic text-lg mb-4">
        "{quote}"
      </p>
      <p style={{ color: palette.text }} className="font-semibold">
        {author}
      </p>
      <p style={{ color: palette.subtle }} className="text-sm">
        {source}
      </p>
    </motion.div>
  );
}
