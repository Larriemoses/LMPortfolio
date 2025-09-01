// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Layers, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden snap-start"
      style={{
        backgroundColor: "#0D0D0D",
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0),
          radial-gradient(circle at 20px 20px, rgba(255,255,255,0.04) 1px, transparent 0)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* ===== Desktop Left Nav ===== */}
      <nav className="hidden md:flex flex-col justify-between items-center fixed left-0 top-0 h-screen w-20 bg-black/90 py-12 z-50">
        <div className="flex flex-col items-center space-y-10">
          {[
            { id: "hero", icon: <Home size={24} /> },
            { id: "about", icon: <User size={24} /> },
            { id: "services", icon: <Briefcase size={24} /> },
            { id: "projects", icon: <Layers size={24} /> },
            { id: "contact", icon: <Mail size={24} /> },
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

      {/* ===== Mobile Bottom Nav ===== */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 flex justify-around items-center py-3 z-50 border-t border-gray-800">
        <a href="#hero">
          <Home size={22} className="text-gray-300 hover:text-emerald-400" />
        </a>
        <a href="#about">
          <User size={22} className="text-gray-300 hover:text-emerald-400" />
        </a>
        <a href="#services">
          <Briefcase
            size={22}
            className="text-gray-300 hover:text-emerald-400"
          />
        </a>
        <a href="#projects">
          <Layers size={22} className="text-gray-300 hover:text-emerald-400" />
        </a>
        <a href="#contact">
          <Mail size={22} className="text-gray-300 hover:text-emerald-400" />
        </a>
      </nav>

      {/* ===== Hero Content ===== */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-20 md:pl-28 pb-20 md:pb-0">
        {/* === Image with Rings & Orbiting Balls === */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          {/* Rings */}
          <div className="absolute rounded-full w-72 h-72 sm:w-80 sm:h-80 md:w-[21rem] md:h-[21rem] border border-emerald-400/40" />
          <div className="absolute rounded-full w-80 h-80 sm:w-96 sm:h-96 md:w-[24rem] md:h-[24rem] border border-indigo-400/30" />

          {/* Orbiting Ball 1 */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          >
            <div
              className="absolute top-0 left-1/2 -ml-2 w-4 h-4 rounded-full 
                         bg-gradient-to-r from-white to-gray-300 
                         shadow-[0_0_15px_5px_rgba(255,255,255,0.6)]"
            />
          </motion.div>

          {/* Orbiting Ball 2 */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{ duration: 14, ease: "linear", repeat: Infinity }}
          >
            <div
              className="absolute bottom-0 left-1/2 -ml-1.5 w-3 h-3 rounded-full 
                         bg-gradient-to-r from-emerald-300 to-white 
                         shadow-[0_0_12px_3px_rgba(16,185,129,0.6)]"
            />
          </motion.div>

          {/* Profile Image */}
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl relative z-10">
            <img
              src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1756482211/20250407_130820_p6ysay.png"
              alt="Olarewaju Adebulu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* === Intro Content === */}
        <div className="max-w-xl text-center md:text-left order-2 md:order-1">
          <h1 className="text-sm tracking-[0.25em] text-gray-400 mb-3">
            Full Stack Developer • SEO Strategist
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-emerald-400">
            Olarewaju Adebulu
          </h2>
          <p className="mt-4 text-gray-300">
            I build scalable applications & craft SEO strategies that drive
            measurable growth for B2B, SaaS & Fintech brands.
          </p>

          <motion.a
            href="#contact"
            className="inline-block mt-8 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-emerald-500 to-indigo-600 shadow-lg"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 20px rgba(16,185,129,0.5)",
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
