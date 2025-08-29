// src/components/SkillsStrip.tsx
import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";
import { palette } from "../data/data";

const SkillsStrip: React.FC = () => {
  return (
    <section
      className="w-full py-8 md:py-12 px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: palette.primaryBg }}
    >
      <motion.div
        className="flex space-x-8 md:space-x-12"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {/* Duplicate list twice for seamless infinite loop */}
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 relative group cursor-pointer w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center p-4 transition-all duration-300"
            style={{
              backgroundColor: palette.secondaryBg,
              border: `1px solid ${palette.subtle + "40"}`,
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: `0 0 15px ${palette.accent1}`,
            }}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-full h-full object-contain"
            />
            <span
              className="absolute bottom-[-22px] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
              style={{ color: palette.text }}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsStrip;
