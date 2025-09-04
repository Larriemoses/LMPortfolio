// src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen snap-center flex items-center justify-center px-6 md:px-20 py-20 bg-[#0D0D0D] text-white overflow-hidden"
    >
      {/* Meshy background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(79,70,229,0.3) 1px, transparent 1px),
            linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-emerald-900/20 z-0" />

      <div className="relative z-10 max-w-5xl text-center md:text-left space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-emerald-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I help <span className="text-emerald-400">B2B SaaS</span> and{" "}
          <span className="text-emerald-400">Fintech</span> brands grow through
          a strategic blend of{" "}
          <span className="text-indigo-400">content strategy</span>,{" "}
          <span className="text-indigo-400">technical SEO</span>, and{" "}
          <span className="text-indigo-400">AI-powered optimization</span>.
        </motion.p>

        <motion.p
          className="text-gray-400 leading-relaxed text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          As a strategist, I design systems that attract, engage, and convert. I
          structure websites for performance, scalability, and visibility. I
          also bring the technical edge of a{" "}
          <span className="text-emerald-400">Full-Stack Developer</span>,
          building SEO-ready apps with React, MERN, and Django while
          implementing AI-driven automation for growth.
        </motion.p>

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-gray-300"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {[
            "SEO Content Strategy & Editorial Planning",
            "Technical SEO: Site Architecture, Core Web Vitals, Structured Data",
            "Content Marketing: Storytelling & Inbound Lead Generation",
            "Full-Stack Web Development: React, MERN, Python/Django",
            "AI-Powered Automation & Workflow Optimization",
          ].map((skill, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="before:content-['▹'] before:text-emerald-400 before:mr-2"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default About;
