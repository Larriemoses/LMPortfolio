// src/components/Projects.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { palette } from "../data/data";

const seoProjects = [
  {
    title: "SEO Audit Report for ClickRank",
    description:
      "Comprehensive technical SEO audit covering Core Web Vitals, site structure, and performance improvements.",
    link: "#",
    tags: ["Technical SEO", "Audit", "Core Web Vitals"],
  },
  {
    title: "SEO Content Strategy for SaaS Brand",
    description:
      "Developed keyword clusters, topic map, and long-form blog strategy to drive consistent organic traffic.",
    link: "#",
    tags: ["Content Strategy", "Keyword Research", "B2B SaaS"],
  },
  {
    title: "On-Page Optimization for Fintech Startup",
    description:
      "Improved landing pages, optimized metadata, and restructured internal linking for better search visibility.",
    link: "#",
    tags: ["On-Page SEO", "Fintech", "Conversion Growth"],
  },
];

const devProjects = [
  {
    title: "Discount Center",
    description:
      "A responsive e-commerce web app for discount codes built with MERN stack and TypeScript.",
    link: "#",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "FlowMeld",
    description:
      "An AI-powered life and team orchestrator platform with real-time collaboration tools.",
    link: "#",
    tags: ["Next.js", "AI Integration", "API"],
  },
  {
    title: "Eragon Coupon Page",
    description:
      "Dynamic coupon site for users with real-time filtering and SEO-optimized structure.",
    link: "#",
    tags: ["SEO-Optimized", "React", "Tailwind"],
  },
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"seo" | "dev">("seo");

  const projects = activeTab === "seo" ? seoProjects : devProjects;

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-12 py-20"
      style={{ backgroundColor: palette.secondaryBg }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: palette.text }}
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          Selected Projects
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => setActiveTab("seo")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "seo"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
            style={{
              background:
                activeTab === "seo"
                  ? `linear-gradient(45deg, ${palette.accent1}, ${palette.accent2})`
                  : "transparent",
              border: `1px solid ${palette.accent1}`,
            }}
          >
            SEO Projects
          </button>
          <button
            onClick={() => setActiveTab("dev")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "dev"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
            style={{
              background:
                activeTab === "dev"
                  ? `linear-gradient(45deg, ${palette.accent1}, ${palette.accent2})`
                  : "transparent",
              border: `1px solid ${palette.accent1}`,
            }}
          >
            Dev Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg text-left flex flex-col justify-between"
              style={{ backgroundColor: palette.primaryBg }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 20px ${palette.accent1}`,
              }}
            >
              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: palette.accent2 }}
                >
                  {project.title}
                </h3>
                <p className="text-md mb-4" style={{ color: palette.subtle }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: palette.secondaryBg,
                        color: palette.text,
                        border: `1px solid ${palette.accent1}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={project.link}
                className="mt-auto inline-block px-5 py-2 rounded-full font-semibold text-sm"
                style={{
                  background: `linear-gradient(45deg, ${palette.accent1}, ${palette.accent2})`,
                  color: palette.text,
                }}
              >
                View Case Study
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
