import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { palette } from "../data/data";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  linkText?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Apexium Consults & Services",
    description:
      "A modern, responsive corporate website for Apexium Consult & Services Ltd, built with React, TypeScript, and Vite. This project showcases the firm's business consulting and legal services with a professional design, optimized performance, and mobile-first responsiveness.",
    technologies: [
      "React",
      "Vite",
      "Redux",
      "Framer Motion",
      "Python",
      "Django",
      "SEO",
    ],
    githubLink: "https://github.com/Larriemoses/FlowMeld",
    liveLink: "https://apexiumconsults.com",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757606113/WhatsApp_Image_2025-09-06_at_23.37.09_70e673d7_ip3isc.jpg",
  },
  {
    title: "Discount Region Store",
    description:
      "An SEO-optimized e-commerce platform that achieved #1 Google rankings, demonstrating expertise in full-stack development and search engine optimization.",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Framer Motion",
      "Python",
      "Django",
      "SEO",
      "PostgreSQL",
      "Rest Framework",
      "Render",
      "Cloudinary",
    ],
    githubLink: "https://github.com/Larriemoses/Discount-Region",
    liveLink: "https://discountregion.com",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1752104168/logo_-_dr_sa3zzg.jpg",
  },
  {
    title: "Discount Center",
    description:
      "An affiliate coupon hub with an SEO-first structure, providing a curated collection of discount codes to drive organic traffic.",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Framer Motion",
      "SEO",
      "PostgreSQL",
      "Rest Framework",
      "Render",
      "Cloudinary",
    ],
    githubLink: "https://github.com/Larriemoses/Discount-Center",
    liveLink: "https://discountcenterstores.com",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1758218071/Screenshot_2025-09-18_185404_bbx7nx.png",
  },
  {
    title: "ClickRank.ai SEO Audit",
    description:
      "An advanced technical and on-page SEO strategy and audit that significantly boosted a client's organic reach and search rankings.",
    technologies: [
      "Technical SEO",
      "On-page SEO",
      "Audit",
      "Strategy",
      "Google Search Console",
      "Ahrefs",
      "Screaming Frog",
      "Google Analytics",
      "Seobility",
    ],
    liveLink:
      "https://docs.google.com/document/d/1-qX58EJVfmGuPpb06tUJXAz9L4bBnV_G2P-COyUtAN0/edit",
    linkText: "Audit Report",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1758217519/banner-1544x500_jqbzma.png",
  },
  {
    title: "FlowMeld AI Orchestrator",
    description:
      "A productivity tool that showcases AI automation and robust React system design, built to streamline workflows for teams and individuals.",
    technologies: [
      "React",
      "Python",
      "AI Automation",
      "AI Integration",
      "Redux",
      "Framer Motion",
      "Python",
      "Django",
      "SEO",
      "PostgreSQL",
      "Rest Framework",
      "Render",
      "Cloudinary",
    ],
    githubLink: "https://github.com/Larriemoses/FlowMeld",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1744342852/generate-ai-artificial-intelligence-logo-ai-logo-concept_268834-2200_obpogi.png",
  },
];

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="projects-section"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: palette.background }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          style={{ color: palette.textPrimary }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        {/* Masonry grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => {
            const isOpen = expanded === index;

            return (
              <motion.div
                key={index}
                className="bg-[#1e1e22] rounded-2xl shadow-lg border border-gray-700 overflow-hidden break-inside-avoid hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Cover Image */}
                {project.image && (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                )}

                {/* Content */}
                <div className="p-6 flex flex-col">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: palette.textPrimary }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm text-gray-300 mb-3"
                    style={{ color: palette.textSecondary }}
                  >
                    {isOpen
                      ? project.description
                      : project.description.slice(0, 100) +
                        (project.description.length > 100 ? "..." : "")}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          backgroundColor: palette.primaryAccent,
                          color: palette.background,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand/Collapse */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : index)}
                    className="flex items-center gap-2 text-sm font-medium mb-3 text-blue-400 hover:text-blue-300 transition"
                  >
                    {isOpen ? (
                      <>
                        Show Less <FaChevronUp />
                      </>
                    ) : (
                      <>
                        Show More <FaChevronDown />
                      </>
                    )}
                  </button>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="text-sm text-gray-400 mb-4"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {project.description}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-white text-sm"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white text-sm"
                      >
                        <FaExternalLinkAlt />{" "}
                        {project.linkText ? project.linkText : "Live Demo"}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
