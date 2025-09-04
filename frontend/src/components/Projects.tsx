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
    link: "https://discountcenter.com",
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
    tech: ["Python", "React", "AI"],
    img: "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755519745/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_vonh6w.png",
    link: "https://github.com/LarrieMoses/FlowMeld",
    repo: "https://github.com/LarrieMoses/FlowMeld",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative snap-start min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-16 bg-black overflow-hidden"
    >
      {/* === Mesh Background === */}
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

      <div className="max-w-7xl w-full relative z-10 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-indigo-400"
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A showcase of SEO campaigns & full-stack projects 🚀
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="bg-[#1A1A1A]/80 rounded-lg overflow-hidden shadow-lg border border-gray-800 flex flex-col hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}
            >
              {/* Project Image */}
              <div className="w-full h-36 md:h-40 lg:h-44 bg-black flex items-center justify-center">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="max-h-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 flex flex-col flex-1 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm flex-1">
                  {project.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-3">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-emerald-400"
                      whileHover={{ x: 4 }}
                    >
                      Visit <ExternalLink size={14} />
                    </motion.a>
                  )}
                  {project.repo && (
                    <motion.a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      Code <Github size={14} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
