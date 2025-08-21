import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { palette } from "../data/data";

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "SEO", "Content", "Development"];

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "All" || project.categories.includes(activeFilter)
  );

  return (
    <section
      className="w-full py-20 px-4 md:px-8"
      style={{ backgroundColor: palette.secondaryBg }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        style={{ color: palette.text }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Work
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className="px-4 py-2 rounded-full font-semibold transition-all duration-300"
            style={{
              backgroundColor:
                activeFilter === category
                  ? palette.accent1
                  : palette.secondaryBg,
              color: activeFilter === category ? palette.text : palette.subtle,
              border: `1px solid ${
                activeFilter === category ? palette.accent1 : palette.subtle
              }`,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 10px ${palette.accent1 + "40"}`,
            }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden shadow-lg transition-all duration-300 group"
            style={{
              backgroundColor: palette.primaryBg,
              border: `1px solid ${palette.subtle + "40"}`,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 20px ${palette.accent1 + "80"}`,
            }}
          >
            <div className="relative w-full h-48 md:h-56">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(to top, ${palette.primaryBg}B0, transparent)`,
                }}
              >
                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <span
                      key={metricIndex}
                      className="text-xs px-2 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: palette.accent2,
                        color: palette.text,
                      }}
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: palette.accent1 + "40",
                        color: palette.accent1,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3
                className="text-xl md:text-2xl font-semibold mb-2"
                style={{ color: palette.text }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm md:text-base"
                style={{ color: palette.subtle }}
              >
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
