// src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="snap-start min-h-screen flex items-center justify-center bg-[#0D0D0D] px-6 md:px-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* === Left: Intro === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I am{" "}
            <span className="text-emerald-400 font-semibold">
              Olarewaju Adebulu
            </span>
            , a passionate{" "}
            <span className="text-indigo-400">Full Stack Developer</span> and{" "}
            <span className="text-indigo-400">SEO Strategist</span>. I help
            brands build scalable web platforms while creating SEO-driven
            strategies that boost organic growth. My work bridges{" "}
            <span className="text-emerald-400">technology</span> and{" "}
            <span className="text-emerald-400">marketing</span> to deliver real
            business results.
          </p>
          <p className="text-gray-400">
            With years of experience, I have worked with B2B, SaaS, and Fintech
            clients to improve visibility, drive traffic, and scale conversions.
          </p>
        </motion.div>

        {/* === Right: Quick Stats === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-6 text-center"
        >
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-emerald-400">3+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-emerald-400">25+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-emerald-400">15+</h3>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-emerald-400">10+</h3>
            <p className="text-gray-400">SEO Strategies</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
