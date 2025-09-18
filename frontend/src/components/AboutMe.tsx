// src/components/AboutAndServices.tsx

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbTrophy, TbUsers, TbBulb } from "react-icons/tb";
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
    summary: "Keyword research, content clustering, and growth-focused plans.",
    fullDescription:
      "My SEO strategy is built to generate compounding growth. I analyze your industry, competitors, and target audience to build a strategy that drives traffic and conversions.",
    icon: <FaChartLine size={28} />,
    offerings: [
      "Comprehensive SEO Audits",
      "In-depth Keyword Research",
      "On-page & Technical SEO",
      "Link Building & Outreach",
      "Performance Tracking & Reporting",
    ],
  },
  {
    title: "Technical SEO",
    summary: "Site optimization, schema, and Core Web Vitals improvement.",
    fullDescription:
      "I specialize in technical SEO to ensure your site is clean, fast, and optimized for maximum performance and visibility.",
    icon: <FaSearch size={28} />,
    offerings: [
      "Technical Site Audits",
      "Core Web Vitals Optimization",
      "Schema Markup Implementation",
      "Crawlability & Indexing Fixes",
      "Mobile & Usability Optimization",
    ],
  },
  {
    title: "Content Marketing",
    summary: "ICP-aligned storytelling and inbound content engines.",
    fullDescription:
      "I create content that ranks and resonates with your Ideal Customer Profile (ICP). I handle the full content lifecycle from strategy to promotion.",
    icon: <FaRocket size={28} />,
    offerings: [
      "Content Strategy & Planning",
      "Blog & Article Creation",
      "Copywriting for Landing Pages",
      "Email Marketing Campaigns",
      "Content Distribution & Promotion",
    ],
  },
  {
    title: "Web Design & UX",
    summary: "WordPress, Shopify, and high-converting landing pages.",
    fullDescription:
      "I build websites that look stunning and convert. From WordPress to Shopify, I create designs that blend aesthetics with performance.",
    icon: <FaPalette size={28} />,
    offerings: [
      "Custom Web Design",
      "User Experience (UX) Audits",
      "E-commerce Solutions",
      "Website Redesign",
      "Landing Page Design",
      "Shopify Store Development",
    ],
  },
  {
    title: "Full-Stack Development",
    summary: "React, Next.js, and Django for scalable apps.",
    fullDescription:
      "I build scalable, robust applications using modern technologies with a focus on clean architecture and growth.",
    icon: <FaLaptopCode size={28} />,
    offerings: [
      "Custom Web Application Development",
      "API Integration & Development",
      "Database Management",
      "Backend & Frontend Solutions",
      "Maintenance & Support",
    ],
  },
  {
    title: "AI Automation",
    summary: "Systems for workflows, content, and data-driven growth.",
    fullDescription:
      "I integrate AI tools into your workflows to automate repetitive tasks, generate content at scale, and optimize processes.",
    icon: <FaRobot size={28} />,
    offerings: [
      "Custom AI Workflow Integration",
      "AI-Powered Content Generation",
      "Data Analysis & Automation",
      "Chatbot Development",
      "Process Optimization",
    ],
  },
];

const AboutAndServices: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const expandedRef = useRef<HTMLDivElement | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (expandedIndex !== null && expandedRef.current) {
      expandedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [expandedIndex]);

  return (
    <section
      id="about-and-services"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: palette.background }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - About Me */}
        <motion.div
          className="lg:col-span-1 text-center lg:text-left lg:sticky lg:top-20 self-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755525952/1749898239122_v2xyue.jpg"
            alt="Olarewaju Adebulu"
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover mx-auto lg:mx-0 mb-6 shadow-2xl border-4"
            style={{ borderColor: palette.primaryAccent }}
          />
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: palette.textPrimary }}
          >
            About Me
          </h2>
          <p
            className="text-lg font-light leading-relaxed mb-8"
            style={{ color: palette.textSecondary }}
          >
            I help brands achieve sustainable growth by blending technical
            expertise with creative strategy and modern technology.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div className="flex flex-col items-center bg-[#212529] border border-gray-700 p-3 rounded-lg shadow hover:scale-105 hover:border-primaryAccent transition-all">
              <TbTrophy size={30} color={palette.primaryAccent} />
              <p className="text-xl font-bold mt-2">50+</p>
              <p className="text-xs">Projects</p>
            </motion.div>
            <motion.div className="flex flex-col items-center bg-[#212529] border border-gray-700 p-3 rounded-lg shadow hover:scale-105 hover:border-primaryAccent transition-all">
              <TbUsers size={30} color={palette.primaryAccent} />
              <p className="text-xl font-bold mt-2">20+</p>
              <p className="text-xs">Clients</p>
            </motion.div>
            <motion.div className="flex flex-col items-center bg-[#212529] border border-gray-700 p-3 rounded-lg shadow hover:scale-105 hover:border-primaryAccent transition-all">
              <TbBulb size={30} color={palette.primaryAccent} />
              <p className="text-xl font-bold mt-2">4+</p>
              <p className="text-xs">Years</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Services */}
        <div className="lg:col-span-2">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left"
            style={{ color: palette.textPrimary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            What I Do
          </motion.h2>

          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                ref={expandedIndex === index ? expandedRef : null}
                className={`border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                  expandedIndex === index
                    ? "bg-[#2a2d31] border-primaryAccent shadow-xl"
                    : "bg-[#212529] border-gray-700 hover:shadow-lg hover:border-primaryAccent"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="flex items-center justify-between p-4"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center space-x-3">
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
                      <p className="text-sm text-gray-400">{service.summary}</p>
                    </div>
                  </div>
                  {expandedIndex === index ? (
                    <FaChevronUp
                      size={18}
                      style={{ color: palette.primaryAccent }}
                    />
                  ) : (
                    <FaChevronDown
                      size={18}
                      style={{ color: palette.primaryAccent }}
                    />
                  )}
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      key={`content-${service.title}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                      }}
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
      </div>
    </section>
  );
};

export default AboutAndServices;
