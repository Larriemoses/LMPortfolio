import React, { useState } from "react";
import { motion } from "framer-motion";
import { palette, skills } from "../data/data";
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";

// ✅ Custom Upwork Icon (inline SVG)
const UpworkIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 28,
  color = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 100 100"
  >
    <path d="M77.2 14.1c-9.2 0-17 6.6-18.9 15.4l-4.6 20.3c-1.5-2.7-3.4-5.5-5.3-8.5l-7.1-11.7H30.3v41.1h9.2V47.2l4.9 8.3c3.4 5.7 6.6 11 9.1 15.8h8.1l7.3-31.8c1-4.3 4.8-7.5 9.4-7.5 5.4 0 9.9 4.4 9.9 9.9s-4.4 9.9-9.9 9.9c-2.1 0-4.2-.7-5.9-1.9l-2.5 9.7c2.5 1.2 5.3 1.8 8.3 1.8 10.5 0 19.1-8.6 19.1-19.1-.2-10.5-8.8-19.1-19.1-19.1z" />
  </svg>
);

const HeroSection: React.FC = () => {
  const [showResumeOptions, setShowResumeOptions] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20 overflow-hidden"
      style={{ backgroundColor: palette.primaryBg }}
    >
      {/* Background Floating Skills */}
      <div className="absolute inset-0 z-0 flex flex-wrap justify-center items-center opacity-10 pointer-events-none select-none">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            className="mx-4 my-2 text-sm whitespace-nowrap"
            style={{ color: palette.subtle }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 + i * 0.2 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left: Intro */}
        <motion.div
          className="text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-semibold mb-4 leading-tight"
            style={{ color: palette.text, fontFamily: "Poppins, sans-serif" }}
            variants={itemVariants}
          >
            Hi, I’m{" "}
            <span style={{ color: palette.accent1 }}>Olarewaju Adebulu</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl mb-6"
            style={{ color: palette.accent2, fontFamily: "Inter, sans-serif" }}
            variants={itemVariants}
          >
            SEO Content Strategist • Full-Stack Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
            style={{ color: palette.subtle, fontFamily: "Inter, sans-serif" }}
            variants={itemVariants}
          >
            I help B2B, SaaS, and Fintech brands grow through{" "}
            <span style={{ color: palette.accent1 }}>high-impact SEO</span> and{" "}
            <span style={{ color: palette.accent2 }}>
              code-driven performance
            </span>
            .
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-full font-semibold shadow-lg"
              style={{
                background: `linear-gradient(45deg, ${palette.accent1}, ${palette.accent2})`,
                color: palette.text,
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 20px ${palette.accent1}`,
              }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#blog"
              className="px-6 py-3 rounded-full font-semibold border"
              style={{
                borderColor: palette.accent1,
                color: palette.accent1,
              }}
              whileHover={{
                scale: 1.1,
                color: palette.text,
                backgroundColor: palette.accent1,
              }}
            >
              Read My Blog
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center justify-center lg:justify-start space-x-6 mt-10 text-2xl"
            variants={itemVariants}
          >
            <motion.a
              href="https://www.linkedin.com/in/olarewaju-adebulu-320184212/"
              target="_blank"
              whileHover={{ scale: 1.3, rotate: 10, color: palette.accent1 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/larriemoses"
              target="_blank"
              whileHover={{ scale: 1.3, rotate: 10, color: palette.accent2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://larriemoses.medium.com"
              target="_blank"
              whileHover={{ scale: 1.3, rotate: -10, color: palette.accent1 }}
            >
              <FaMedium />
            </motion.a>
            <motion.a
              href="https://wa.me/2348073210004"
              target="_blank"
              whileHover={{ scale: 1.3, color: "#25D366" }}
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              href="mailto:larriemoses@gmail.com"
              whileHover={{ scale: 1.3, color: palette.accent2 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="https://www.upwork.com/freelancers/~01ffd7d6d27c5a9d20"
              target="_blank"
              whileHover={{ scale: 1.3, color: palette.accent1 }}
            >
              <UpworkIcon size={28} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Profile + Resume */}
        <motion.div
          className="relative flex flex-col items-center space-y-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {/* Animated Profile */}
          <motion.img
            src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755525952/1749898239122_v2xyue.jpg"
            alt="Olarewaju Adebulu"
            className="h-80 w-80 lg:h-96 lg:w-96 object-cover rounded-full border-4 border-transparent"
            animate={{
              filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(100%)"],
            }}
            transition={{ repeat: Infinity, duration: 8 }}
            whileHover={{ scale: 1.05 }}
          />

          {/* Resume Button */}
          <motion.button
            onClick={() => setShowResumeOptions(!showResumeOptions)}
            className="px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
            style={{
              background: `linear-gradient(45deg, ${palette.accent1}, ${palette.accent2})`,
              color: palette.text,
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: `0 0 20px ${palette.accent1}`,
            }}
          >
            <MdFileDownload /> <span>Download Resume</span>
          </motion.button>

          {/* Resume Options Popup */}
          {showResumeOptions && (
            <motion.div
              className="absolute top-full mt-2 bg-[#1A1A2E] rounded-lg shadow-lg p-4 space-y-2 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <a
                href="/resume-seo.pdf"
                className="block px-4 py-2 rounded hover:bg-[#0F3460] text-white"
              >
                SEO Resume
              </a>
              <a
                href="/resume-fullstack.pdf"
                className="block px-4 py-2 rounded hover:bg-[#0F3460] text-white"
              >
                Fullstack Resume
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
