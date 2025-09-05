// src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Users, Globe, CheckCircle } from "lucide-react";

const metrics = [
  { id: 1, icon: <Award size={28} />, value: "4+", label: "Years Experience" },
  {
    id: 2,
    icon: <Briefcase size={28} />,
    value: "50+",
    label: "Projects Delivered",
  },
  { id: 3, icon: <Users size={28} />, value: "30+", label: "Clients Served" },
  {
    id: 4,
    icon: <Globe size={28} />,
    value: "15+",
    label: "Industries Covered",
  },
];

const skills = [
  "SEO Strategy",
  "Technical SEO",
  "Content Strategy",
  "Full-Stack Development",
  "AI Automation",
  "Web Design (WordPress, Shopify, E-commerce, UI/UX)",
  "Business Development",
  "LinkedIn Profile Optimization",
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen snap-center flex items-center justify-center px-6 md:px-20 py-20 bg-[#0D0D0D] text-white overflow-hidden"
    >
      {/* Mesh Background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(79,70,229,0.25) 1px, transparent 1px),
            linear-gradient(rgba(16,185,129,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-emerald-900/20 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
            <img
              src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1756482211/20250407_130820_p6ysay.png"
              alt="Olarewaju Adebulu"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <div className="space-y-8 text-center md:text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-emerald-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>

          {/* Story */}
          <motion.p
            className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I help <span className="text-emerald-400">B2B SaaS</span> and{" "}
            <span className="text-emerald-400">Fintech</span> brands grow
            through a strategic blend of{" "}
            <span className="text-indigo-400">content strategy</span>,{" "}
            <span className="text-indigo-400">technical SEO</span>, and{" "}
            <span className="text-indigo-400">AI-powered optimization</span>.
            With 4+ years of experience, I deliver solutions that combine{" "}
            <span className="text-emerald-400">SEO expertise</span>,{" "}
            <span className="text-emerald-400">full-stack development</span>,
            and{" "}
            <span className="text-emerald-400">business growth systems</span>.
          </motion.p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-[#1A1A1A]/70 p-6 rounded-lg shadow-lg border border-gray-800 flex flex-col items-center"
              >
                <div className="text-indigo-400 mb-2">{metric.icon}</div>
                <h3 className="text-xl font-bold text-white">{metric.value}</h3>
                <p className="text-gray-400 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <CheckCircle size={16} className="text-emerald-400" />
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
