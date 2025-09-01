// src/components/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Discount Region Store",
    desc: "Built an ecommerce SEO system that achieved #1 Google ranking for primary keywords.",
    tech: ["React", "Node.js", "SEO", "MongoDB"],
    img: "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1752103735/LOGO-ICON-1_gm3k3m.png",
    link: "https://discountregion.com",
    repo: "https://github.com/LarrieMoses/Discount-Center",
  },
  {
    id: 2,
    title: "Discount Center",
    desc: "A discount coupon & affiliate hub — curated Oraimo deals with optimized SEO structure.",
    tech: ["TypeScript", "SEO", "Next.js"],
    img: "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1752540945/image-removebg-preview_uyqjbj.png",
    link: "https://discount-center.vercel.app",
    repo: "https://github.com/LarrieMoses/Discount-Center",
  },
  {
    id: 3,
    title: "ClickRank.ai SEO Strategy",
    desc: "Delivered a technical + on-page SEO audit that boosted performance & organic reach.",
    tech: ["SEO", "Analytics", "WordPress"],
    img: "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1756739153/Screenshot_2025-07-29_172545_dmfr3w.png",
    link: "https://docs.google.com/document/d/1-qX58EJVfmGuPpb06tUJXAz9L4bBnV_G2P-COyUtAN0/edit?tab=t.0",
    repo: null,
  },
  {
    id: 4,
    title: "FlowMeld AI Orchestrator",
    desc: "AI-powered productivity tool showcasing advanced system design & development skills.",
    tech: ["Python", "Django", "RestFramework", "React", "AI Automation"],
    img: "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755519745/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_vonh6w.png",
    link: "https://github.com/LarrieMoses/FlowMeld",
    repo: "https://github.com/LarrieMoses/FlowMeld",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative snap-start min-h-screen flex items-center justify-center px-6 md:px-20 py-20 overflow-hidden"
      style={{
        background: "radial-gradient(circle at top, #0D0D0D, #1A1A1A 80%)",
      }}
    >
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #4F46E5 1px, transparent 1px),
            linear-gradient(#10B981 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "moveBg 25s linear infinite",
        }}
      />

      <div className="max-w-6xl w-full relative z-10 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-indigo-400"
        >
          Projects
        </motion.h2>
        <p className="text-gray-400 mt-3 mb-12">
          A showcase of SEO campaigns & full-stack projects 🚀
        </p>

        {/* Projects Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="relative bg-[#1A1A1A]/80 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-emerald-500/50 transition-all group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Project Image */}
              <div className="overflow-hidden relative">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-contain bg-black group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">{project.desc}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-emerald-400"
                      whileHover={{ x: 5 }}
                    >
                      Visit <ExternalLink size={16} />
                    </motion.a>
                  )}
                  {project.repo && (
                    <motion.a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      Code <Github size={16} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Slider - Mobile */}
        <div className="md:hidden flex overflow-x-auto gap-6 snap-x snap-mandatory pb-6 scrollbar-hide">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="min-w-[80%] bg-[#1A1A1A]/80 rounded-xl overflow-hidden shadow-lg border border-gray-800 snap-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-contain bg-black"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-1 text-xs">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
