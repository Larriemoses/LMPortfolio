import React from "react";
import { motion } from "framer-motion";
import { palette } from "../data/data";
import ParticlesBackground from "./ParticlesBackground";
import { ChevronDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: `0 0 10px ${palette.primaryAccent}, 0 0 20px ${palette.secondaryAccent}`,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const secondaryButtonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: `0 0 5px ${palette.primaryAccent}`,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0, -5, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen p-4 text-white"
      style={{ background: palette.background }}
    >
      <ParticlesBackground />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Profile Picture */}
        <motion.div
          className="mb-6 rounded-full overflow-hidden border-2 border-primaryAccent"
          variants={itemVariants}
          style={{ boxShadow: `0 0 15px ${palette.primaryAccent}` }}
        >
          <img
            src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755525952/1749898239122_v2xyue.jpg"
            alt="Olarewaju Adebulu"
            width={150}
            height={150}
            className="object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.p
          className="text-2xl sm:text-5xl font-normal"
          style={{ color: palette.textPrimary }}
          variants={nameVariants}
        >
          Olarewaju Adebulu
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="mt-2 text-1xl sm:text-2xl md:text-3xl font-normal leading-tight md:whitespace-nowrap"
          style={{ color: palette.textPrimary }}
          variants={itemVariants}
        >
          SEO-Driven Growth for SaaS, Fintech, and B2B Brands
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-4 text-lg sm:text-xl font-light max-w-3xl"
          style={{ color: palette.textSecondary }}
          variants={itemVariants}
        >
          I help companies rank #1 on Google, scale organic traffic, and build
          high-performing websites & applications through a proven blend of SEO
          strategy, content marketing, and full-stack development.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 font-semibold rounded-full text-lg transition-all duration-300 transform"
            style={{
              background: palette.highlightGradient,
              color: palette.background,
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Hire Me
          </motion.a>
          <motion.a
            href="#portfolio"
            className="px-8 py-4 font-semibold rounded-full border-2 text-lg transition-all duration-300 transform"
            style={{
              borderColor: palette.primaryAccent,
              color: palette.primaryAccent,
            }}
            variants={secondaryButtonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View My Work
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll-down arrow */}
      <motion.div
        className="absolute bottom-10 z-10 cursor-pointer"
        variants={bounceVariants}
        initial="initial"
        animate="animate"
      >
        <ChevronDown size={48} style={{ color: palette.textPrimary }} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
