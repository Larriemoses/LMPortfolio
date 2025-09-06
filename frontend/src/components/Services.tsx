import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaChartLine,
  FaRobot,
  FaSearch,
  FaPalette,
  FaRocket,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { palette } from "../data/data";

// Modal component
type Service = {
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  offerings: string[];
};

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onNext,
  onPrevious,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
    >
      {/* Previous Button */}
      <motion.button
        onClick={onPrevious}
        className="absolute left-1 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-gray-700 bg-opacity-70 hover:bg-opacity-100 hover:bg-gray-600 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaChevronLeft size={16} />
      </motion.button>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        className="absolute right-1 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-gray-700 bg-opacity-70 hover:bg-opacity-100 hover:bg-gray-600 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaChevronRight size={16} />
      </motion.button>

      {/* Modal Content */}
      <motion.div
        key={service.title}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-11/12 max-w-sm sm:max-w-2xl bg-gray-800 p-4 sm:p-8 rounded-lg shadow-2xl overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl hover:text-gray-400 transition-colors"
        >
          &times;
        </button>
        <div className="flex flex-col items-center text-center space-y-2 mb-4">
          <span className="mb-2" style={{ color: palette.primaryAccent }}>
            {service.icon}
          </span>
          <h2
            className="text-xl sm:text-3xl font-bold"
            style={{ color: palette.textPrimary }}
          >
            {service.title}
          </h2>
        </div>
        <div className="text-gray-300 space-y-4 leading-snug text-sm sm:text-base">
          <p>{service.fullDescription}</p>
          <p
            className="font-bold mt-4"
            style={{ color: palette.primaryAccent }}
          >
            What I Offer:
          </p>
          <ul className="list-disc list-inside space-y-2">
            {service.offerings.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Services component
const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services = [
    {
      title: "SEO Strategy",
      description:
        "Keyword research, content clustering, and growth-focused ranking plans.",
      fullDescription:
        "My SEO strategy is built to generate compounding growth. I'll perform a deep analysis of your industry, competitors, and target audience to build a strategy that drives organic traffic and conversions. This isn't just about keywords; it's about building an entire content ecosystem.",
      icon: <FaChartLine size={40} />,
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
      description:
        "Site optimization, schema, and Core Web Vitals improvement.",
      fullDescription:
        "A beautiful website is useless if search engines can't find it. I specialize in technical SEO to ensure your site is a clean, fast, and organized machine. From fixing crawl errors to implementing advanced schema markup, I'll optimize your site's foundation for maximum performance and visibility.",
      icon: <FaSearch size={40} />,
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
      description: "ICP-aligned storytelling and inbound content engines.",
      fullDescription:
        "I create content that not only ranks high but also resonates with your Ideal Customer Profile (ICP). I'll manage the entire content lifecycle, from ideation and keyword mapping to writing, publishing, and promotion, building a powerful inbound content engine that drives leads and sales.",
      icon: <FaRocket size={40} />,
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
      description:
        "WordPress, Shopify, e-commerce, and high-converting landing pages.",
      fullDescription:
        "I build high-converting websites and landing pages that look stunning and provide a seamless user experience. My expertise spans various platforms, including WordPress and Shopify, to create digital products that are not just beautiful but also built to grow your business.",
      icon: <FaPalette size={40} />,
      offerings: [
        "Custom Web Design",
        "User Experience (UX) Audits",
        "Wordpress Web Design",
        "E-commerce Solutions",
        "Website Redesign",
        "Landing Page Design",
        "Shopify Store Development",
      ],
    },
    {
      title: "Full-Stack Development",
      description: "React, Next.js, and Django for scalable applications.",
      fullDescription:
        "As a full-stack developer, I build scalable, robust web applications from the ground up. I leverage modern technologies like React, Next.js, and Django to create high-performing digital products that can handle growth and evolve with your business.",
      icon: <FaLaptopCode size={40} />,
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
      description:
        "Systems for content generation, workflow optimization, and data-driven growth.",
      fullDescription:
        "I integrate powerful AI tools into your business workflows to automate repetitive tasks, generate content at scale, and gain a competitive edge. From automating your marketing to optimizing internal processes, I'll build custom AI systems that save you time and accelerate your growth.",
      icon: <FaRobot size={40} />,
      offerings: [
        "Custom AI Workflow Integration",
        "AI-Powered Content Generation",
        "Data Analysis & Reporting Automation",
        "Chatbot Development",
        "Process Optimization with AI",
        "Whatsapp Automation",
        "AI Chatbot Development",
      ],
    },
  ];

  const handleNext = () => {
    const currentIndex = services.findIndex(
      (s) => s.title === selectedService?.title
    );
    const nextIndex = (currentIndex + 1) % services.length;
    setSelectedService(services[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = services.findIndex(
      (s) => s.title === selectedService?.title
    );
    const prevIndex = (currentIndex - 1 + services.length) % services.length;
    setSelectedService(services[prevIndex]);
  };

  return (
    <>
      <section
        id="services-section"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white"
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
            What I Do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl shadow-xl space-y-4 cursor-pointer"
                style={{
                  backgroundColor: "#212529",
                  border: "1px solid #4a5568",
                  color: palette.primaryAccent,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
                <h3
                  className="text-xl font-bold leading-snug"
                  style={{ color: palette.textPrimary }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-base font-light mb-4 leading-snug"
                  style={{ color: palette.textSecondary }}
                >
                  {service.description}
                </p>
                <motion.button
                  onClick={() => setSelectedService(service)}
                  className="mt-auto py-2 px-6 rounded-full font-semibold transition-colors duration-300"
                  style={{
                    backgroundColor: palette.primaryAccent,
                    color: palette.background,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  View More →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesSection;
