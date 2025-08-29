// src/components/Services.tsx
import React from "react";
import { motion } from "framer-motion";
import { palette } from "../data/data";
import { FaSearch, FaCode, FaFileAlt, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: <FaSearch size={40} />,
    title: "Keyword Research & Strategy",
    description:
      "I build SEO strategies with keyword clusters, topic maps, and content calendars tailored to your audience.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Technical SEO Audits",
    description:
      "I analyze Core Web Vitals, indexing, schema, and site performance to ensure Google and users love your site.",
  },
  {
    icon: <FaFileAlt size={40} />,
    title: "SEO Content Writing",
    description:
      "High-quality, SEO-optimized blog posts and landing pages designed to rank, engage, and convert visitors.",
  },
  {
    icon: <FaCode size={40} />,
    title: "On-Page Optimization",
    description:
      "From meta tags to internal linking, I optimize every element for maximum search visibility and ROI.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-12 py-20"
      style={{ backgroundColor: palette.primaryBg }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: palette.text }}
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          My Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg text-left"
              style={{ backgroundColor: palette.secondaryBg }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 20px ${palette.accent1}`,
              }}
            >
              <div className="mb-4" style={{ color: palette.accent2 }}>
                {service.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: palette.text }}
              >
                {service.title}
              </h3>
              <p className="text-md" style={{ color: palette.subtle }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
