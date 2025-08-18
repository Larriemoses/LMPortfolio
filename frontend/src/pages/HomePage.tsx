// src/pages/HomePage.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Compass,
  Brain,
  Briefcase,
  Wand,
  Server,
  Star,
  Users,
  Globe,
  Book,
  PenTool,
  TrendingUp,
  Zap,
  ZapOff,
  Linkedin,
  Mail,
  Github,
  Download,
} from "lucide-react";
import TiltCard from "../components/TiltCard";
import TestimonialCard from "../components/TestimonialCard";
import ProjectCard from "../components/ProjectCard";
import CertificationsCard from "../components/CertificationsCard";
import Modal from "../components/Modal";

// Color palette for the theme
const palette = {
  bg: "#0d1321",
  panel: "#1d2d44",
  accent: "#3e5c76",
  subtle: "#748cab",
  text: "#f0ebd8",
};

const serviceIcons: { [key: string]: React.ReactNode } = {
  "Full-Stack Development": <Code size={40} />,
  "SEO & Content Strategy": <Compass size={40} />,
  "AI Integrations": <Brain size={40} />,
  "Brand Storytelling": <Wand size={40} />,
};

const experienceIcons: { [key: string]: React.ReactNode } = {
  "Business Development Executive": <Briefcase size={40} />,
  "Jr. Content Writer (Intern)": <PenTool size={40} />,
  "Content Writer Intern": <Book size={40} />,
  "SEO Content Writer": <TrendingUp size={40} />,
  "User Experience Writer": <Users size={40} />,
  "Freelance Web Developer": <Code size={40} />,
  "Lead Full-Stack Engineer": <Server size={40} />,
  "Frontend Developer (Contributor)": <Globe size={40} />,
};

const skillsIcons: { [key: string]: React.ReactNode } = {
  "React.js": <Code size={24} />,
  TypeScript: <Code size={24} />,
  Python: <Code size={24} />,
  Django: <Code size={24} />,
  SEO: <Compass size={24} />,
  "Content Strategy": <Book size={24} />,
  AI: <Brain size={24} />,
  "Project Management": <Briefcase size={24} />,
  Leadership: <Star size={24} />,
  Communication: <Users size={24} />,
};

const HomePage: React.FC = () => {
  const [refSkills, inViewSkills] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refServices, inViewServices] = useInView({
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

  const [showResumeModal, setShowResumeModal] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselItems = [
    {
      title: "End-to-End SEO Content Strategy",
      subtitle: "Content that ranks and converts",
      icon: serviceIcons["SEO & Content Strategy"],
      content:
        "I develop end-to-end SEO content strategies for organic growth, from keyword research and content clustering to ranking strategies.",
    },
    {
      title: "Technical SEO Audits & Optimization",
      subtitle: "Improving site performance and discoverability",
      icon: serviceIcons["Full-Stack Development"],
      content:
        "I specialize in technical SEO, conducting audits on sitemaps, Core Web Vitals, and PageSpeed. I ensure a clean, scalable structure and fast load times.",
    },
    {
      title: "AI-Enhanced Content Workflows",
      subtitle: "Building smarter content pipelines",
      icon: serviceIcons["AI Integrations"],
      content:
        "I leverage AI tools to streamline content creation and research workflows. My process includes AI-enhanced content ideation, competitor gap analysis, and content briefs.",
    },
    {
      title: "Brand Storytelling & Messaging",
      subtitle: "Aligning content with your audience",
      icon: serviceIcons["Brand Storytelling"],
      content:
        "I craft brand narratives and messaging that resonate with your Ideal Customer Profile. My work ensures your brand voice is clear and your content aligns with your buyer's journey.",
    },
  ];

  const handleNextCarousel = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrevCarousel = () => {
    setCarouselIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const onDownloadFullStack = () => {
    // This is where you would put the logic to download the full-stack resume
    console.log("Downloading Full-Stack Resume...");
    setShowResumeModal(false);
  };

  const onDownloadSeo = () => {
    // This is where you would put the logic to download the SEO resume
    console.log("Downloading SEO Resume...");
    setShowResumeModal(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skillsData = {
    "Technical Skills": [
      { name: "React.js", icon: skillsIcons["React.js"] },
      { name: "TypeScript", icon: skillsIcons["TypeScript"] },
      { name: "Python", icon: skillsIcons["Python"] },
      { name: "Django", icon: skillsIcons["Django"] },
      { name: "Technical SEO", icon: skillsIcons["SEO"] },
      { name: "Content Strategy", icon: skillsIcons["Content Strategy"] },
      { name: "AI Integrations", icon: skillsIcons["AI"] },
      { name: "REST APIs", icon: <Zap size={24} /> },
      { name: "Tailwind CSS", icon: <ZapOff size={24} /> },
    ],
    "Soft Skills": [
      { name: "Remote Collaboration", icon: <Users size={24} /> },
      { name: "Problem Solving", icon: <Brain size={24} /> },
      { name: "Cross-Functional Communication", icon: <Users size={24} /> },
      { name: "Brand Storytelling", icon: <Book size={24} /> },
    ],
  };

  return (
    <div style={{ background: palette.bg, minHeight: "100vh" }}>
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
        variants={containerVariants}
        className="min-h-[80vh] flex items-center justify-center"
        style={{
          background: `linear-gradient(to bottom, ${palette.panel}, ${palette.bg})`,
          color: palette.text,
          padding: "6rem 0 4rem 0",
        }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h1
            variants={itemVariants}
            style={{ color: palette.text }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 leading-tight"
          >
            Olarewaju Adebulu
          </motion.h1>
          <motion.p
            variants={itemVariants}
            style={{ color: palette.accent }}
            className="text-xl sm:text-2xl font-semibold mb-6"
          >
            Full-Stack Developer | Technical SEO Strategist
          </motion.p>
          <motion.p
            variants={itemVariants}
            style={{ color: palette.subtle }}
            className="text-lg max-w-2xl mx-auto"
          >
            I build systems that attract, engage, and convert. My work combines
            creative storytelling with technical depth, ensuring content
            performs—not just looks good. I specialize in technical SEO,
            focusing on performance, discoverability, and compliance with search
            engine standards.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-4 mt-6"
          >
            <a
              href="https://github.com/Larriemoses"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/olarewajuadebulu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:larriemoses@gmail.com"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="Email me"
            >
              <Mail size={28} />
            </a>
            <button
              onClick={() => setShowResumeModal(true)}
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="Download resume"
            >
              <Download size={28} />
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center space-x-4 mt-12"
          >
            <a
              href="#skills"
              className="px-6 py-2 rounded-full font-semibold transition-colors"
              style={{ backgroundColor: palette.accent, color: palette.text }}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="px-6 py-2 rounded-full font-semibold transition-colors"
              style={{ backgroundColor: palette.accent, color: palette.text }}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="px-6 py-2 rounded-full font-semibold transition-colors"
              style={{ backgroundColor: palette.accent, color: palette.text }}
            >
              Projects
            </a>
            <a
              href="#certifications"
              className="px-6 py-2 rounded-full font-semibold transition-colors"
              style={{ backgroundColor: palette.accent, color: palette.text }}
            >
              Certifications
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* Skills Section */}
      <section
        id="skills"
        ref={refSkills}
        className="py-20"
        style={{ background: palette.bg }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            style={{ color: palette.text }}
            className="text-3xl font-bold mb-2"
          >
            My Skill Set
          </h2>
          <p style={{ color: palette.subtle }} className="text-md mb-8">
            A combination of technical expertise and soft skills that drive
            results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inViewSkills ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ background: palette.panel }}
              className="p-6 rounded-xl text-left"
            >
              <h3
                style={{ color: palette.accent }}
                className="text-2xl font-semibold mb-4"
              >
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skillsData["Technical Skills"].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div style={{ color: palette.subtle }}>{skill.icon}</div>
                    <span style={{ color: palette.text }} className="text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inViewSkills ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ background: palette.panel }}
              className="p-6 rounded-xl text-left"
            >
              <h3
                style={{ color: palette.accent }}
                className="text-2xl font-semibold mb-4"
              >
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skillsData["Soft Skills"].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div style={{ color: palette.subtle }}>{skill.icon}</div>
                    <span style={{ color: palette.text }} className="text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section (Carousel) */}
      <section
        id="services"
        ref={refServices}
        className="py-20"
        style={{ background: palette.panel }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            style={{ color: palette.text }}
            className="text-3xl font-bold mb-2"
          >
            My Key Capabilities
          </h2>
          <p style={{ color: palette.subtle }} className="text-md mb-8">
            I help B2B, SaaS, and fintech brands grow through a blend of
            content, technical SEO, and AI-driven optimization.
          </p>

          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex items-center space-x-6 w-full"
              initial={{ x: 0 }}
              animate={{
                x: `-${
                  carouselIndex *
                  (100 /
                    (window.innerWidth < 768
                      ? 1
                      : window.innerWidth < 1024
                      ? 2
                      : 4))
                }vw`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex space-x-6 w-full flex-shrink-0">
                {carouselItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0"
                  >
                    <TiltCard
                      title={item.title}
                      subtitle={item.subtitle}
                      icon={item.icon}
                    >
                      {item.content}
                    </TiltCard>
                  </div>
                ))}
              </div>
            </motion.div>

            <button
              onClick={handlePrevCarousel}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2"
              style={{ background: "rgba(0,0,0,0.5)" }}
            >
              &lt;
            </button>
            <button
              onClick={handleNextCarousel}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2"
              style={{ background: "rgba(0,0,0,0.5)" }}
            >
              &gt;
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20"
        style={{ background: palette.bg }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            style={{ color: palette.text }}
            className="text-3xl font-bold mb-2"
          >
            Professional Experience
          </h2>
          <p style={{ color: palette.subtle }} className="text-md mb-8">
            A history of my professional journey in web development and content
            strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inViewSkills ? { opacity: 1, y: 0 } : {}}
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
              animate={inViewSkills ? { opacity: 1, y: 0 } : {}}
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
              animate={inViewSkills ? { opacity: 1, y: 0 } : {}}
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
              animate={inViewSkills ? { opacity: 1, y: 0 } : {}}
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
              animate={inViewSkills ? { opacity: 1, y: 0 } : {}}
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
                    Generated steady monthly traffic (2-5K) across 15+ clients.
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inViewSkills ? { opacity: 1, y: 0 } : {}}
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
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        ref={refCertifications}
        className="py-20"
        style={{ background: palette.panel }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            style={{ color: palette.text }}
            className="text-3xl font-bold mb-2"
          >
            Certifications
          </h2>
          <p style={{ color: palette.subtle }} className="text-md mb-8">
            My professional and technical qualifications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inViewCertifications ? { opacity: 1, y: 0 } : {}}
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
              animate={inViewCertifications ? { opacity: 1, y: 0 } : {}}
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
              animate={inViewCertifications ? { opacity: 1, y: 0 } : {}}
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
              animate={inViewCertifications ? { opacity: 1, y: 0 } : {}}
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
              animate={inViewCertifications ? { opacity: 1, y: 0 } : {}}
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
              animate={inViewCertifications ? { opacity: 1, y: 0 } : {}}
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
              animate={inViewCertifications ? { opacity: 1, y: 0 } : {}}
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
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={refProjects}
        className="py-20"
        style={{ background: palette.bg }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            style={{ color: palette.text }}
            className="text-3xl font-bold mb-2"
          >
            Pinned Projects
          </h2>
          <p style={{ color: palette.subtle }} className="text-md mb-8">
            A selection of my recent work, straight from GitHub.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inViewProjects ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <ProjectCard
                title="Discount Region"
                description="A full-stack coupon website built with React, TypeScript, and Django. Achieved a #1 Google ranking for primary keywords."
                techStack="React, TypeScript, Django"
                link="https://www.linkedin.com/in/olarewajuadebulu"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inViewProjects ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              <ProjectCard
                title="Portfolio Website"
                description="This very portfolio, built to showcase my skills in web development and design."
                techStack="React, TypeScript"
                link="https://www.linkedin.com/in/olarewajuadebulu"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inViewProjects ? { opacity: 1, y: 0 } : {}}
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
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={refTestimonials}
        className="py-20"
        style={{ background: palette.panel }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            style={{ color: palette.text }}
            className="text-3xl font-bold mb-2"
          >
            Client Testimonials
          </h2>
          <p style={{ color: palette.subtle }} className="text-md mb-8">
            What my clients and colleagues have to say about working with me.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inViewTestimonials ? { opacity: 1, y: 0 } : {}}
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
              animate={inViewTestimonials ? { opacity: 1, y: 0 } : {}}
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
              animate={inViewTestimonials ? { opacity: 1, y: 0 } : {}}
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
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20"
        style={{ background: palette.bg, color: palette.text }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
          <p
            style={{ color: palette.subtle }}
            className="text-lg max-w-2xl mx-auto mb-8"
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
      </section>
    </div>
  );
};

export default HomePage;
