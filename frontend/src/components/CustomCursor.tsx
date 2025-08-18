// src/components/CustomCursor.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor fixed pointer-events-none z-[9999] rounded-full mix-blend-screen"
      animate={{ x: position.x - 10, y: position.y - 10 }}
      transition={{ type: "spring", stiffness: 50, damping: 5, mass: 0.1 }}
      style={{
        width: 20,
        height: 20,
        background: "rgba(116, 140, 171, 0.5)",
        filter: "blur(10px)",
      }}
    />
  );
};

export default CustomCursor;