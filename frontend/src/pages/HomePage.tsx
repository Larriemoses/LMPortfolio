// src/pages/HomePage.tsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Mail, Github, Download } from "lucide-react";
import TiltCard from "../components/TiltCard";
import TestimonialCard from "../components/TestimonialCard";
import ProjectCard from "../components/ProjectCard";
import CertificationsCard from "../components/CertificationsCard";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import {
  palette,
  serviceIcons,
  experienceIcons,
  skillsData,
  capabilitiesItems,
  allSkills,
} from "../data/data";

const HomePage: React.FC = () => {
  const [refServices, inViewServices] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refExperience, inViewExperience] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refProjects, inViewProjects] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refTestimonials, inViewTestimonials] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refCertifications, inViewCertifications] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refContact, inViewContact] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refSkills, inViewSkills] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showResumeModal, setShowResumeModal] = useState(false);

  const onDownloadFullStack = () => {
    console.log("Downloading Full-Stack Resume...");
    setShowResumeModal(false);
  };

  const onDownloadSeo = () => {
    console.log("Downloading SEO Resume...");
    setShowResumeModal(false);
  };

  // Variants for the parent hero container
  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Variants for the child items within the hero
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const SkillCard = ({
    name,
    icon,
  }: {
    name: string;
    icon: React.ReactNode;
  }) => {
    return (
      <div
        style={{ background: palette.panel, borderColor: palette.accent }}
        className="rounded-lg p-3 flex items-center space-x-2 border-2 border-solid"
      >
        <div style={{ color: palette.accent }}>{icon}</div>
        <span
          style={{ color: palette.subtle }}
          className="whitespace-nowrap text-sm"
        >
          {name}
        </span>
      </div>
    );
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div style={{ background: palette.bg, minHeight: "100vh" }}>
      {/* Head component for SEO */}
      <head>
        <title>Olarewaju Adebulu | Full-Stack & Technical SEO Strategist</title>
        <meta
          name="description"
          content="Olarewaju Adebulu is a Full-Stack Developer and Technical SEO Strategist specializing in building high-performance web applications and creating content that ranks and converts. Learn about my projects, skills, and experience in the MERN stack, Python, and SEO."
        />
        <meta
          name="keywords"
          content="Olarewaju Adebulu, Full-Stack Developer, MERN, React, TypeScript, Django, Technical SEO, Content Strategy, AI Integration, Web Development, Portfolio"
        />
      </head>
      <AnimatePresence>
        <Modal
          show={showResumeModal}
          onClose={() => setShowResumeModal(false)}
          onDownloadFullStack={onDownloadFullStack}
          onDownloadSeo={onDownloadSeo}
        />
      </AnimatePresence>

      {/* Hero Section */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="h-screen flex flex-col items-center justify-center text-center p-6 md:p-12 relative"
        style={{
          background: `linear-gradient(to bottom, ${palette.panel}, ${palette.bg})`,
          color: palette.text,
        }}
      >
        <div className="container mx-auto max-w-5xl flex flex-col items-center pt-12">
          {/* Header section to contain the button and align it to the right on all screens */}
          <motion.div
            variants={itemVariants}
            className="absolute top-6 right-6 z-10"
          >
            <Link
              to="/blogs"
              style={{
                background: "transparent",
                color: palette.text,
                borderColor: palette.text,
              }}
              className="inline-block px-6 py-2 rounded-full font-semibold transition-transform transform hover:scale-105 border-2 border-solid text-sm"
            >
              Blogs
            </Link>
          </motion.div>

          {/* Profile Picture and Text Content */}
          <motion.div variants={itemVariants} className="mb-8">
            <div
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 border-solid"
              style={{ borderColor: palette.accent }}
            >
              <img
                src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755525952/1749898239122_v2xyue.jpg"
                alt="Olarewaju Adebulu"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            style={{ color: palette.text }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 leading-tight"
          >
            Olarewaju Adebulu
          </motion.h1>
          <motion.p
            variants={itemVariants}
            style={{ color: palette.accent }}
            className="text-xl sm:text-2xl font-semibold mb-6"
          >
            Full-Stack Developer | Technical SEO Strategist | Business
            Development
          </motion.p>
          <motion.p
            variants={itemVariants}
            style={{ color: palette.subtle }}
            className="text-sm md:text-md max-w-2xl mx-auto mb-8"
          >
            I build systems that attract, engage, and convert. My work combines
            creative storytelling with technical depth, ensuring content
            performs—not just looks good. I specialize in technical SEO,
            focusing on performance, discoverability, and compliance with search
            engine standards.
          </motion.p>

          {/* Social and Download Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-4 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Larriemoses"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors"
              aria-label="Github profile"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/olarewajuadebulu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:larriemoses@gmail.com"
              className="text-white transition-colors"
              aria-label="Email me"
            >
              <Mail size={28} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => setShowResumeModal(true)}
              className="text-white transition-colors"
              aria-label="Download resume"
            >
              <Download size={28} />
            </motion.button>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-2 mt-8 overflow-x-auto"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#experience"
              className="px-4 py-2 rounded-full font-semibold transition-colors whitespace-nowrap hover:bg-opacity-80"
              style={{
                background: palette.accent,
                color: palette.text,
                fontSize: "0.875rem",
              }}
            >
              Experience
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-4 py-2 rounded-full font-semibold transition-colors whitespace-nowrap hover:bg-opacity-80"
              style={{
                background: palette.accent,
                color: palette.text,
                fontSize: "0.875rem",
              }}
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#certifications"
              className="px-4 py-2 rounded-full font-semibold transition-colors whitespace-nowrap hover:bg-opacity-80"
              style={{
                background: palette.accent,
                color: palette.text,
                fontSize: "0.875rem",
              }}
            >
              Certifications
            </motion.a>
          </motion.div>
        </div>
      </motion.header>

      {/* Skills Section */}
      <motion.section
        id="skills"
        ref={refSkills}
        className="py-12 md:py-20"
        style={{ background: palette.bg }}
        initial="hidden"
        animate={inViewSkills ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            style={{ color: palette.text }}
            className="text-2xl font-bold mb-4"
          >
            Key Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {allSkills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        ref={refServices}
        className="py-12 md:py-20"
        style={{ background: palette.panel }}
        initial="hidden"
        animate={inViewServices ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            style={{ color: palette.text }}
            className="text-2xl md:text-3xl font-bold mb-2"
          >
            My Key Capabilities
          </h2>
          <p
            style={{ color: palette.subtle }}
            className="text-sm md:text-md mb-8"
          >
            I help B2B, SaaS, and fintech brands grow through a blend of
            content, technical SEO, and AI-driven optimization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {capabilitiesItems.map((item, index) => (
              <TiltCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
                content={item.content}
              ></TiltCard>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        ref={refExperience}
        className="py-12 md:py-20"
        style={{ background: palette.bg }}
        initial="hidden"
        animate={inViewExperience ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            style={{ color: palette.text }}
            className="text-2xl md:text-3xl font-bold mb-2"
          >
            Professional Experience
          </h2>
          <p
            style={{ color: palette.subtle }}
            className="text-sm md:text-md mb-8"
          >
            A history of my professional journey in web development and content
            strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewExperience ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.08 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 12px 24px rgba(6,12,30,0.6)",
              }}
              className="transform-gpu"
            >
              <div
                style={{
                  border: `1px solid ${palette.accent}`,
                  borderRadius: 12,
                  padding: 18,
                  background: "rgba(13,19,33,0.45)",
                }}
              >
                <div style={{ color: palette.accent }} className="mb-3">
                  {experienceIcons["Lead Full-Stack Engineer"]}
                </div>
                <h3
                  style={{ color: palette.text }}
                  className="text-lg font-semibold"
                >
                  Lead Full-Stack Engineer
                </h3>
                <p style={{ color: palette.subtle }} className="text-sm mt-2">
                  DiscountRegion.com | 2025 - Present
                </p>
                <ul
                  style={{ color: palette.subtle }}
                  className="text-xs mt-3 space-y-2"
                >
                  <li>
                    Architected and developed a coupon site with React,
                    TypeScript, and Django.
                  </li>
                  <li>
                    Implemented technical SEO practices leading to a #1 Google
                    ranking.
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewExperience ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.16 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 12px 24px rgba(6,12,30,0.6)",
              }}
              className="transform-gpu"
            >
              <div
                style={{
                  border: `1px solid ${palette.accent}`,
                  borderRadius: 12,
                  padding: 18,
                  background: "rgba(13,19,33,0.45)",
                }}
              >
                <div style={{ color: palette.accent }} className="mb-3">
                  {experienceIcons["Business Development Executive"]}
                </div>
                <h3
                  style={{ color: palette.text }}
                  className="text-lg font-semibold"
                >
                  Business Development Executive
                </h3>
                <p style={{ color: palette.subtle }} className="text-sm mt-2">
                  AIDA Creatives | Jun 2025 - Present
                </p>
                <ul
                  style={{ color: palette.subtle }}
                  className="text-xs mt-3 space-y-2"
                >
                  <li>
                    Managed social profiles, crafted proposals, and tracked
                    leads.
                  </li>
                  <li>
                    Coordinated with the team to align proposals with client
                    needs.
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewExperience ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.24 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 12px 24px rgba(6,12,30,0.6)",
              }}
              className="transform-gpu"
            >
              <div
                style={{
                  border: `1px solid ${palette.accent}`,
                  borderRadius: 12,
                  padding: 18,
                  background: "rgba(13,19,33,0.45)",
                }}
              >
                <div style={{ color: palette.accent }} className="mb-3">
                  {experienceIcons["Jr. Content Writer (Intern)"]}
                </div>
                <h3
                  style={{ color: palette.text }}
                  className="text-lg font-semibold"
                >
                  Jr. Content Writer (Intern)
                </h3>
                <p style={{ color: palette.subtle }} className="text-sm mt-2">
                  Noovatix Solution | May 2025 - Jul 2025
                </p>
                <ul
                  style={{ color: palette.subtle }}
                  className="text-xs mt-3 space-y-2"
                >
                  <li>Led content strategy for blog and landing pages.</li>
                  <li>
                    Increased organic traffic by 220% and improved rankings for
                    15+ keywords.
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewExperience ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.32 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 12px 24px rgba(6,12,30,0.6)",
              }}
              className="transform-gpu"
            >
              <div
                style={{
                  border: `1px solid ${palette.accent}`,
                  borderRadius: 12,
                  padding: 18,
                  background: "rgba(13,19,33,0.45)",
                }}
              >
                <div style={{ color: palette.accent }} className="mb-3">
                  {experienceIcons["Content Writer Intern"]}
                </div>
                <h3
                  style={{ color: palette.text }}
                  className="text-lg font-semibold"
                >
                  Content Writer Intern
                </h3>
                <p style={{ color: palette.subtle }} className="text-sm mt-2">
                  DEVDOOT | Apr 2025 - Jun 2025
                </p>
                <ul
                  style={{ color: palette.subtle }}
                  className="text-xs mt-3 space-y-2"
                >
                  <li>
                    Created blog posts and developed scripts for brand promo
                    videos.
                  </li>
                  <li>
                    Increased blog engagement by 22% and campaign click-throughs
                    by 3%.
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewExperience ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 12px 24px rgba(6,12,30,0.6)",
              }}
              className="transform-gpu"
            >
              <div
                style={{
                  border: `1px solid ${palette.accent}`,
                  borderRadius: 12,
                  padding: 18,
                  background: "rgba(13,19,33,0.45)",
                }}
              >
                <div style={{ color: palette.accent }} className="mb-3">
                  {experienceIcons["SEO Content Writer"]}
                </div>
                <h3
                  style={{ color: palette.text }}
                  className="text-lg font-semibold"
                >
                  SEO Content Writer
                </h3>
                <p style={{ color: palette.subtle }} className="text-sm mt-2">
                  Upwork (Freelance) | Apr 2021 - Feb 2024
                </p>
                <ul
                  style={{ color: palette.subtle }}
                  className="text-xs mt-3 space-y-2"
                >
                  <li>
                    Wrote SEO-driven blog content, case studies, and ad copy.
                  </li>
                  <li>
                    Generated steady monthly traffic (2-5K per brand) across 15+
                    clients.
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewExperience ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.48 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 12px 24px rgba(6,12,30,0.6)",
              }}
              className="transform-gpu"
            >
              <div
                style={{
                  border: `1px solid ${palette.accent}`,
                  borderRadius: 12,
                  padding: 18,
                  background: "rgba(13,19,33,0.45)",
                }}
              >
                <div style={{ color: palette.accent }} className="mb-3">
                  {experienceIcons["User Experience Writer"]}
                </div>
                <h3
                  style={{ color: palette.text }}
                  className="text-lg font-semibold"
                >
                  User Experience Writer
                </h3>
                <p style={{ color: palette.subtle }} className="text-sm mt-2">
                  Upwork (Freelance) | Jul 2019 - Aug 2023
                </p>
                <ul
                  style={{ color: palette.subtle }}
                  className="text-xs mt-3 space-y-2"
                >
                  <li>
                    Wrote UI microcopy and collaborated on onboarding flows.
                  </li>
                  <li>Improved user task completion in beta tests by 11%.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        id="certifications"
        ref={refCertifications}
        className="py-12 md:py-20"
        style={{ background: palette.panel }}
        initial="hidden"
        animate={inViewCertifications ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            style={{ color: palette.text }}
            className="text-2xl md:text-3xl font-bold mb-2"
          >
            Certifications
          </h2>
          <p
            style={{ color: palette.subtle }}
            className="text-sm md:text-md mb-8"
          >
            My professional and technical qualifications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewCertifications
                  ? { opacity: 1, y: 0 }
                  : { opacity: 1, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <CertificationsCard
                name="Digital-Marketing Certificate"
                issuer="HiiT Plc"
                date="December 2024"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewCertifications
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              <CertificationsCard
                name="Toggl Hire React Skill Test"
                issuer="Toggl Hire Experts Community"
                date="December 2024"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewCertifications
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <CertificationsCard
                name="English for IT 2"
                issuer="Cisco"
                date="November 2024"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewCertifications
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              <CertificationsCard
                name="Web-Design CERTIFICATE"
                issuer="HiiT Plc"
                date="November 2024"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewCertifications
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CertificationsCard
                name="English for IT 1"
                issuer="Cisco Networking Academy"
                date="September 2024"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewCertifications
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.48 }}
            >
              <CertificationsCard
                name="Career Essentials in Software Development"
                issuer="Microsoft and LinkedIn"
                date="August 2024"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewCertifications
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.56 }}
            >
              <CertificationsCard
                name="JavaScript Essentials 1"
                issuer="Cisco Networking Academy"
                date="March 2024"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        ref={refProjects}
        className="py-12 md:py-20"
        style={{ background: palette.bg }}
        initial="hidden"
        animate={inViewProjects ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            style={{ color: palette.text }}
            className="text-2xl md:text-3xl font-bold mb-2"
          >
            Pinned Projects
          </h2>
          <p
            style={{ color: palette.subtle }}
            className="text-sm md:text-md mb-8"
          >
            A selection of my recent work, straight from Github.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewProjects ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <ProjectCard
                title="Discount Region"
                description="A full-stack web application designed to aggregate and display verified discount codes from top brands and prop firms, ensuring users have access to the latest and most reliable promo codes."
                techStack="React, TypeScript, Django"
                link="https://discountregion.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewProjects ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              <ProjectCard
                title="Portfolio Website"
                description="This very portfolio, built to showcase my skills in web development and design."
                techStack="React, TypeScript"
                link="https://github.com/larriemoses/discount-center"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewProjects ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <ProjectCard
                title="FlowMeld"
                description="An AI-powered life and team orchestrator built with Python to streamline workflows."
                techStack="Python"
                link="https://github.com/Larriemoses/FlowMeld"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        ref={refTestimonials}
        className="py-12 md:py-20"
        style={{ background: palette.panel }}
        initial="hidden"
        animate={inViewTestimonials ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            style={{ color: palette.text }}
            className="text-2xl md:text-3xl font-bold mb-2"
          >
            Client Testimonials
          </h2>
          <p
            style={{ color: palette.subtle }}
            className="text-sm md:text-md mb-8"
          >
            What my clients and colleagues have to say about working with me.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewTestimonials
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <TestimonialCard
                quote="I had the pleasure of working with Olarewaju at Noovatix Solutions, and his talent truly stands out. He blends strategic thinking with powerful storytelling that elevates brands in the B2B SaaS and Fintech space. His content doesn’t just inform—it builds authority and drives results. A reliable, creative, and genuinely inspiring collaborator."
                author="Khadija Jawaid"
                source="Co-Founder, Noovatix Solutions"
                rating={5.0}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewTestimonials
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              <TestimonialCard
                quote="I was consistently impressed by his dedication and skill. In a short period, he wrote over 20 high-quality blogs for our website, showcasing not just strong writing abilities but also a solid understanding of SEO best practices."
                author="Biswajyoti Das"
                source="Ex Associate at PW"
                rating={5.0}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                inViewTestimonials
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <TestimonialCard
                quote="Determination and resilience are two qualities that truly define Olarewaju. I've seen how committed he is to growing his skills and contributing meaningfully to any project he's part of. His curiosity, work ethic, and positive attitude make him a valuable asset."
                author="Chidinma Ofoegbu"
                source="Fintech Content Writer"
                rating={5.0}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        ref={refContact}
        className="py-12 md:py-20"
        style={{ background: palette.bg, color: palette.text }}
        initial="hidden"
        animate={inViewContact ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Let's Connect</h2>
          <p
            style={{ color: palette.subtle }}
            className="text-sm md:text-lg max-w-2xl mx-auto mb-8"
          >
            Interested in working together or want to learn more about my
            projects? Feel free to reach out.
          </p>
          <a
            href="mailto:larriemoses@gmail.com"
            style={{
              background: palette.accent,
              color: palette.text,
            }}
            className="inline-block px-8 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-opacity-80"
          >
            Get in Touch
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
