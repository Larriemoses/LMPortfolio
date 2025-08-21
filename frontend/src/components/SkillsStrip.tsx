// src/components/SkillsStrip.tsx
import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";
import { palette } from "../data/data";

const SkillsStrip: React.FC = () => {
  return (
    <section
      className="w-full py-8 md:py-12 px-4 md:px-8"
      style={{ backgroundColor: palette.primaryBg }}
    >
      <div
        className="flex overflow-x-scroll no-scrollbar py-4 space-x-8 md:space-x-12"
        // This hides the scrollbar
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 relative group cursor-pointer w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center p-4 transition-all duration-300"
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
              className="absolute bottom-[-24px] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: palette.text }}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsStrip;
