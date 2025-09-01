// src/components/Services.tsx
import React from "react";
import { motion } from "framer-motion";
import { Search, Code2, BarChart3, Globe, PenTool } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Search size={40} className="text-emerald-400" />,
    title: "SEO Strategy",
    desc: "Result-driven SEO strategies that boost rankings, visibility, and conversions.",
  },
  {
    id: 2,
    icon: <BarChart3 size={40} className="text-indigo-400" />,
    title: "Technical SEO",
    desc: "Comprehensive audits & optimizations for speed, indexing, and site health.",
  },
  {
    id: 3,
    icon: <PenTool size={40} className="text-emerald-400" />,
    title: "Content Strategy",
    desc: "Keyword research, topic clustering & content calendars that scale traffic.",
  },
  {
    id: 4,
    icon: <Code2 size={40} className="text-indigo-400" />,
    title: "Full-Stack Development",
    desc: "Scalable apps with React, Next.js, Node.js, and Django.",
  },
  {
    id: 5,
    icon: <Globe size={40} className="text-emerald-400" />,
    title: "Web Optimization",
    desc: "Core Web Vitals, UX, and accessibility enhancements for maximum growth.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative snap-start min-h-screen flex items-center justify-center px-6 md:px-20 py-20 overflow-hidden"
      style={{
        background: "radial-gradient(circle at top, #1A1A1A, #0D0D0D 70%)",
      }}
    >
      {/* Subtle animated grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #4F46E5 1px, transparent 1px),
            linear-gradient(#10B981 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "moveBg 20s linear infinite",
        }}
      />

      <div className="max-w-6xl w-full text-center relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-emerald-400"
        >
          Services
        </motion.h2>
        <p className="text-gray-400 mt-3 mb-12">
          Helping brands grow with SEO-driven strategies & modern web solutions.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="bg-[#1A1A1A]/80 rounded-xl p-8 shadow-lg border border-gray-800 hover:border-emerald-500/50 transition-all flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {service.icon}
              </motion.div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="inline-block mt-12 px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-emerald-500 to-indigo-600 shadow-lg"
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 20px rgba(16,185,129,0.5)",
          }}
          whileTap={{ scale: 0.96 }}
        >
          Let’s Work Together 🚀
        </motion.a>
      </div>
    </section>
  );
};

export default Services;
