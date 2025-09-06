import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TbBrandLinkedin, TbBrandGithub, TbBrandX } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { palette } from "../data/data";
import ParticlesBackground from "./ParticlesBackground";

const brandColors = {
  linkedin: "#0A66C2",
  github: "#D9D9D9",
  twitter: "#FFFFFF",
  whatsapp: "#25D366",
  upwork: "#6FDA44",
};

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

  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0, -5, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop" as "loop",
      },
    },
  };

  const animatedSequence = [
    "a SEO Content Strategist.",
    1000,
    "a Technical SEO Growth Partner.",
    1000,
    "a Full-Stack Developer.",
    1000,
    "an AI Automation Specialist.",
    1000,
    "a Business Dev. Specialist.",
    1000,
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen p-4 text-white font-poppins"
      style={{ background: palette.background }}
    >
      <ParticlesBackground />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Profile Picture */}
        <motion.div
          className="rounded-full overflow-hidden"
          variants={itemVariants}
        >
          <img
            src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755525952/1749898239122_v2xyue.jpg"
            alt="Olarewaju Adebulu"
            width={200}
            height={200}
            className="object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.p
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          style={{ color: palette.textPrimary }}
          variants={itemVariants}
        >
          Olarewaju Adebulu
        </motion.p>

        {/* Animated Headline */}
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-normal leading-tight"
          style={{ minHeight: "1.2em" }}
          variants={itemVariants}
        >
          <span style={{ color: palette.primaryAccent }}>I am</span>
        </motion.h1>
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-normal leading-tight -mt-2 mb-4"
          style={{ color: palette.primaryAccent }}
          variants={itemVariants}
        >
          <TypeAnimation
            sequence={animatedSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>

        {/* Contact Icons - Centered Horizontally with Brand Colors and Hover Effect */}
        <motion.div
          className="flex space-x-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
        >
          <a
            href="https://www.linkedin.com/in/olarewajuadebulu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform duration-300"
          >
            <TbBrandLinkedin
              className="text-2xl sm:text-3xl"
              color={brandColors.linkedin}
              strokeWidth={1.5}
            />
          </a>
          <a
            href="https://upwork.com/freelancers/~01ffd7d6d27c5a9d20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            className="hover:scale-110 transition-transform duration-300"
          >
            <SiUpwork
              className="text-2xl sm:text-3xl"
              color={brandColors.upwork}
            />
          </a>
          <a
            href="https://github.com/larriemoses"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition-transform duration-300"
          >
            <TbBrandGithub
              className="text-2xl sm:text-3xl"
              color={brandColors.github}
              strokeWidth={1.5}
            />
          </a>
          <a
            href="https://x.com/larriemoses"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter (X)"
            className="hover:scale-110 transition-transform duration-300"
          >
            <TbBrandX
              className="text-2xl sm:text-3xl"
              color={brandColors.twitter}
              strokeWidth={1.5}
            />
          </a>
          <a
            href="https://wa.me/+2348073210004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaWhatsapp
              className="text-2xl sm:text-3xl"
              color={brandColors.whatsapp}
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll-down arrow */}
      <motion.a
        href="#next-section"
        className="absolute bottom-10 z-10 cursor-pointer"
        variants={bounceVariants}
        initial="initial"
        animate="animate"
      >
        <ChevronDown size={48} style={{ color: palette.textPrimary }} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
