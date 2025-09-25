// src/components/ServicesSection.tsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaChartLine,
  FaRobot,
  FaSearch,
  FaPalette,
  FaRocket,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { palette } from "../data/data";

type Service = {
  title: string;
  summary: string;
  fullDescription: string;
  icon: React.ReactNode;
  offerings: string[];
};

const services: Service[] = [
  {
    title: "SEO Strategy",
    summary:
      "Keyword research, content clustering, and growth-focused ranking plans.",
    fullDescription:
      "My SEO strategy is built to generate compounding growth. I'll perform a deep analysis of your industry, competitors, and target audience to build a strategy that drives organic traffic and conversions. This isn't just about keywords; it's about building an entire content ecosystem.",
    icon: <FaChartLine size={30} />,
    offerings: [
      "Comprehensive SEO Audits & Strategy",
      "In-depth Keyword Research & Analysis",
      "On-page and Technical SEO Optimization",
      "Link Building & Outreach Strategies",
      "Performance Tracking & Reporting",
      "Competitor Analysis & Market Research",
    ],
  },
  {
    title: "Technical SEO",
    summary: "Site optimization, schema, and Core Web Vitals improvement.",
    fullDescription:
      "A beautiful website is useless if search engines can't find it. I specialize in technical SEO to ensure your site is clean, fast, and optimized for maximum visibility and performance in all devices.",
    icon: <FaSearch size={30} />,
    offerings: [
      "Technical Site Audits",
      "Core Web Vitals Optimization",
      "Schema Markup Implementation",
      "Crawlability and Indexing Analysis",
      "Mobile and Usability Optimization",
      "Website Security Enhancements",
    ],
  },
  {
    title: "Content Marketing",
    summary: "ICP-aligned storytelling and inbound content engines.",
    fullDescription:
      "I create content that not only ranks but also resonates with your Ideal Customer Profile (ICP). I'll manage the entire content lifecycle to build an inbound content engine that drives leads and sales with meaningful content.",
    icon: <FaRocket size={30} />,
    offerings: [
      "Content Strategy & Planning",
      "Blog Post & Article Creation",
      "Copywriting for Landing Pages",
      "Email Marketing Campaigns",
      "Social Media Content",
      "Content Distribution & Promotion",
    ],
  },
  {
    title: "Web Design & UX",
    summary:
      "WordPress, Shopify, e-commerce, and high-converting landing pages.",
    fullDescription:
      "I build high-converting websites and landing pages that look stunning and provide a seamless user experience. From WordPress and Shopify to custom builds, I focus on design that converts.",
    icon: <FaPalette size={30} />,
    offerings: [
      "Custom Web Design",
      "User Experience (UX) Audits",
      "WordPress Web Design",
      "E-commerce Solutions",
      "Landing Page Design",
      "Shopify Store Development",
    ],
  },
  {
    title: "Full-Stack Development",
    summary: "React, Next.js, and Django for scalable applications.",
    fullDescription:
      "As a full-stack developer, I build scalable, robust web applications using React, Next.js, Django, and other modern technologies. My focus is on performance, maintainability, and clean code.",
    icon: <FaLaptopCode size={30} />,
    offerings: [
      "Custom Web Application Development",
      "API Integration & Development",
      "Database Management",
      "Backend and Frontend Solutions",
      "Maintenance & Support",
      "Web Application Development",
    ],
  },
  {
    title: "AI Automation",
    summary:
      "Systems for content generation, workflow optimization, and growth.",
    fullDescription:
      "I integrate AI tools into your workflows to automate repetitive tasks, generate content at scale, and provide intelligent automations that boost productivity.",
    icon: <FaRobot size={30} />,
    offerings: [
      "Custom AI Workflow Integration",
      "AI-Powered Content Generation",
      "Data Analysis & Reporting Automation",
      "Chatbot Development",
      "Process Optimization with AI",
      "WhatsApp Automation",
      "Trading Bot Development",
    ],
  },
];

const ServicesSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="services-section"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: palette.background }}
    >
      <div className="max-w-screen-lg mx-auto text-white">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-10 text-center"
          style={{ color: palette.textPrimary }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          What I Do
        </motion.h2>

        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                expandedIndex === index
                  ? "bg-[#2a2d31] border-primaryAccent"
                  : "bg-[#212529] border-gray-700"
              }`}
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-center space-x-4">
                  <span style={{ color: palette.primaryAccent }}>
                    {service.icon}
                  </span>
                  <div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: palette.textPrimary }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300">{service.summary}</p>
                  </div>
                </div>
                <span className="flex items-center">
                  {expandedIndex === index ? (
                    <FaChevronUp
                      size={20}
                      style={{ color: palette.primaryAccent }}
                    />
                  ) : (
                    <FaChevronDown
                      size={20}
                      style={{ color: palette.primaryAccent }}
                    />
                  )}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {expandedIndex === index && (
                  <motion.div
                    key={`content-${service.title}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-4 pb-6 text-gray-300"
                  >
                    <p className="mb-3">{service.fullDescription}</p>
                    <p
                      className="font-semibold mb-2"
                      style={{ color: palette.primaryAccent }}
                    >
                      What I Offer:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-5">
                      {service.offerings.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
