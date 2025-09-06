import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaChartLine,
  FaRobot,
  FaClipboardList,
} from "react-icons/fa";
import { palette } from "../data/data";

// Define the type for a project object
interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  linkText?: string;
  icon: React.ReactNode;
}

// Data for your projects with added icons
const projects: Project[] = [
  {
    title: "Discount Region Store",
    description:
      "An SEO-optimized e-commerce platform that achieved #1 Google rankings, demonstrating expertise in full-stack development and search engine optimization.",
    technologies: ["React", "Next.js", "Node.js", "E-commerce", "SEO"],
    githubLink: "https://github.com/Larriemoses/Discount-Region",
    liveLink: "https://discountregion.com",
    icon: <FaLaptopCode size={30} />,
  },
  {
    title: "Discount Center",
    description:
      "An affiliate coupon hub with an SEO-first structure, providing a curated collection of discount codes to drive organic traffic.",
    technologies: ["TypeScript", "React", "SEO"],
    githubLink: "https://github.com/Larriemoses/Discount-Center",
    liveLink: "https://discountcenter.com",
    icon: <FaChartLine size={30} />,
  },
  {
    title: "ClickRank.ai SEO Audit",
    description:
      "An advanced technical and on-page SEO strategy and audit that significantly boosted a client's organic reach and search rankings.",
    technologies: ["Technical SEO", "On-page SEO", "Audit"],
    liveLink:
      "https://docs.google.com/document/d/1-qX58EJVfmGuPpb06tUJXAz9L4bBnV_G2P-COyUtAN0/edit?tab=t.0",
    linkText: "Audit Report",
    icon: <FaClipboardList size={30} />,
  },
  {
    title: "FlowMeld AI Orchestrator",
    description:
      "A productivity tool that showcases AI automation and robust React system design, built to streamline workflows for teams and individuals.",
    technologies: ["React", "Python", "AI Automation"],
    githubLink: "https://github.com/Larriemoses/FlowMeld",
    icon: <FaRobot size={30} />,
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects-section"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white min-h-[90vh] md:h-[90vh] flex flex-col justify-center"
      style={{ backgroundColor: palette.background }}
    >
      <div className="w-11/12 mx-auto max-w-screen-lg text-center h-max-content">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12"
          style={{ color: palette.textPrimary }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col"
              style={{ border: "1px solid #4a5568" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="flex items-center space-x-4 mb-4"
                style={{ color: palette.primaryAccent }}
              >
                {project.icon}
                <h3
                  className="text-xl font-bold"
                  style={{ color: palette.textPrimary }}
                >
                  {project.title}
                </h3>
              </div>
              <p
                className="text-base font-light mb-4 flex-grow"
                style={{ color: palette.textSecondary }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: palette.primaryAccent,
                      color: palette.background,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-start space-x-4 mt-auto">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white hover:text-gray-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub />
                    <span>Code</span>
                  </motion.a>
                )}
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white hover:text-gray-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaExternalLinkAlt />
                    <span>{project.linkText || "Live Demo"}</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
