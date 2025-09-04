// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Layers, Mail, BadgeCheck } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden snap-center bg-black"
    >
      {/* === Mesh Background with gradient overlay === */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(79,70,229,0.35) 1px, transparent 1px),
            linear-gradient(rgba(16,185,129,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-emerald-900/30 z-0" />

      {/* ===== Desktop Left Nav ===== */}
      <nav className="hidden md:flex flex-col justify-between items-center fixed left-0 top-0 h-screen w-16 lg:w-20 bg-black/90 py-8 lg:py-12 z-30">
        <div className="flex flex-col items-center space-y-8 lg:space-y-10">
          {[
            { id: "hero", icon: <Home size={22} /> },
            { id: "about", icon: <User size={22} /> },
            { id: "services", icon: <Briefcase size={22} /> },
            { id: "projects", icon: <Layers size={22} /> },
            { id: "contact", icon: <Mail size={22} /> },
          ].map((link, i) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              whileHover={{ scale: 1.2, color: "#10B981" }}
              className="text-gray-400 hover:text-emerald-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* ===== Hero Content ===== */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-20 px-4 sm:px-8 lg:px-20 lg:pl-20 pb-28 md:pb-0">
        {/* === Image with Orbiting Rings === */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          {/* Ring 1 with glowing ball */}
          <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-[21rem] md:h-[21rem] rounded-full border border-emerald-400/40">
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            >
              <div className="absolute top-0 left-1/2 -ml-1.5 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_5px_rgba(255,255,255,0.6)] z-40" />
            </motion.div>
          </div>

          {/* Ring 2 with glowing ball */}
          <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-[24rem] md:h-[24rem] rounded-full border border-indigo-400/30">
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            >
              <div className="absolute bottom-0 left-1/2 -ml-1.5 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_4px_rgba(16,185,129,0.7)] z-40" />
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(16,185,129,0.6)",
            }}
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl relative z-20"
          >
            <img
              src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1756482211/20250407_130820_p6ysay.png"
              alt="Olarewaju Adebulu"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* === Intro Content === */}
        <div className="max-w-lg text-center md:text-left order-2 md:order-1 mt-8 md:mt-0">
          <motion.h1
            className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm md:text-base tracking-[0.25em] text-gray-300 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Olarewaju Adebulu
            <BadgeCheck size={18} className="text-emerald-400" />
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-emerald-400 to-indigo-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            SEO Content Strategist & Growth Partner
          </motion.h2>

          <motion.p
            className="mt-6 text-gray-200 text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            SaaS • Fintech • B2B | Full-Stack Development • Technical SEO • AI
            Automation
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-block mt-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-semibold bg-gradient-to-r from-emerald-500 to-indigo-600 shadow-lg animate-pulse"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 25px rgba(16,185,129,0.5)",
            }}
            whileTap={{ scale: 0.96 }}
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
