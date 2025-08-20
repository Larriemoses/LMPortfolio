// src/pages/HomePage.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TiltCard from "../components/TiltCard";
import TestimonialCard from "../components/TestimonialCard";
import ProjectCard from "../components/ProjectCard";
import CertificationsCard from "../components/CertificationsCard";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { palette, serviceIcons, experienceIcons } from "../data/data";
import AnimatedSkills from "../components/AnimatedSkills";
import { TrendingUp, PenTool } from "lucide-react"; // Corrected imports

const HomePage = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

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

  const onDownloadFullStack = () => {
    console.log("Downloading Full-Stack Resume...");
    setShowResumeModal(false);
  };

  const onDownloadSeo = () => {
    console.log("Downloading SEO Resume...");
    setShowResumeModal(false);
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: custom * 0.15,
      },
    }),
  };

  const capabilitiesItems = [
    {
      title: "Full-Stack Web Development",
      subtitle: "Building robust, scalable applications",
      icon: serviceIcons["Full-Stack Web Development"],
      content:
        "I design and develop end-to-end web applications using modern frameworks like React and Django, ensuring high performance, seamless user experience, and scalable architecture.",
    },
    {
      title: "End-to-End SEO Content Strategy",
      subtitle: "Content that ranks and converts",
      icon: serviceIcons["End-to-End SEO Content Strategy"],
      content:
        "I develop end-to-end SEO content strategies for organic growth, from keyword research and content clustering to ranking strategies.",
    },
    {
      title: "Technical SEO Audits & Optimization",
      subtitle: "Improving site performance and discoverability",
      icon: serviceIcons["Technical SEO Audits & Optimization"],
      content:
        "I specialize in technical SEO, conducting audits on sitemaps, Core Web Vitals, and PageSpeed. I ensure a clean, scalable structure and fast load times.",
    },
    {
      title: "AI-Enhanced Content Workflows",
      subtitle: "Building smarter content pipelines",
      icon: serviceIcons["AI-Enhanced Content Workflows"],
      content:
        "I leverage AI tools to streamline content creation and research workflows. My process includes AI-enhanced content ideation, competitor gap analysis, and content briefs.",
    },
    {
      title: "Brand Storytelling & Messaging",
      subtitle: "Aligning content with your audience",
      icon: serviceIcons["Brand Storytelling & Messaging"],
      content:
        "I craft brand narratives and messaging that resonate with your Ideal Customer Profile. My work ensures your brand voice is clear and your content aligns with your buyer's journey.",
    },
  ];

  const experienceItems = [
    {
      title: "Lead Full-Stack Engineer",
      company: "DiscountRegion.com",
      duration: "2025 - Present",
      icon: experienceIcons["Lead Full-Stack Engineer"],
      details: [
        "Architected and developed a coupon site with React, TypeScript, and Django.",
        "Implemented technical SEO practices leading to a #1 Google ranking.",
      ],
    },
    {
      title: "Business Development Executive",
      company: "AIDA Creatives",
      duration: "Jun 2025 - Present",
      icon: experienceIcons["Business Development Executive"],
      details: [
        "Managed social profiles, crafted proposals, and tracked leads.",
        "Coordinated with the team to align proposals with client needs.",
      ],
    },
    {
      title: "Jr. Content Writer (Intern)",
      company: "Noovatix Solution",
      duration: "May 2025 - Jul 2025",
      icon: experienceIcons["Jr. Content Writer (Intern)"],
      details: [
        "Led content strategy for blog and landing pages.",
        "Increased organic traffic by 220% and improved rankings for 15+ keywords.",
      ],
    },
    {
      title: "Content Writer Intern",
      company: "DEVDOOT",
      duration: "Apr 2025 - Jun 2025",
      icon: experienceIcons["Content Writer Intern"],
      details: [
        "Created blog posts and developed scripts for brand promo videos.",
        "Increased blog engagement by 22% and campaign click-throughs by 3%.",
      ],
    },
    {
      title: "SEO Content Writer",
      company: "Upwork (Freelance)",
      duration: "Apr 2021 - Feb 2024",
      icon: experienceIcons["SEO Content Writer"],
      details: [
        "Wrote SEO-driven blog content, case studies, and ad copy.",
        "Generated steady monthly traffic (2-5K per brand) across 15+ clients.",
      ],
    },
    {
      title: "User Experience Writer",
      company: "Upwork (Freelance)",
      duration: "Jul 2019 - Aug 2023",
      icon: experienceIcons["User Experience Writer"],
      details: [
        "Wrote UI microcopy and collaborated on onboarding flows.",
        "Improved user task completion in beta tests by 11%.",
      ],
    },
  ];

  const projectItems = [
    {
      title: "Discount Region",
      description:
        "A full-stack web application designed to aggregate and display verified discount codes from top brands and prop firms, ensuring users have access to the latest and most reliable promo codes.",
      techStack: "React, TypeScript, Django",
      link: "https://discountregion.com",
    },
    {
      title: "Discount Center",
      description:
        "This very portfolio, built to showcase my skills in web development and design.",
      techStack: "React, TypeScript",
      link: "https://github.com/larriemoses/discount-center",
    },
    {
      title: "FlowMeld",
      description:
        "An AI-powered life and team orchestrator built with Python to streamline workflows.",
      techStack: "Python",
      link: "https://github.com/Larriemoses/FlowMeld",
    },
  ];

  const certificationsItems = [
    {
      name: "Digital-Marketing Certificate",
      issuer: "HiiT Plc",
      date: "December 2024",
    },
    {
      name: "Toggl Hire React Skill Test",
      issuer: "Toggl Hire Experts Community",
      date: "December 2024",
    },
    { name: "English for IT 2", issuer: "Cisco", date: "November 2024" },
    {
      name: "Web-Design CERTIFICATE",
      issuer: "HiiT Plc",
      date: "November 2024",
    },
    {
      name: "English for IT 1",
      issuer: "Cisco Networking Academy",
      date: "September 2024",
    },
    {
      name: "Career Essentials in Software Development",
      issuer: "Microsoft and LinkedIn",
      date: "August 2024",
    },
    {
      name: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "March 2024",
    },
  ];

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
      <motion.header
        className="flex flex-col items-center justify-center text-center p-6 md:p-12 relative min-h-screen"
        style={{
          background: `linear-gradient(to bottom, ${palette.panel}, ${palette.bg})`,
          color: palette.text,
        }}
      >
        <div className="container mx-auto max-w-5xl flex flex-col items-center pt-12">
          <Link
            to="/blogs"
            className="absolute top-6 right-6 z-10 px-6 py-2 rounded-full font-semibold transition-transform transform hover:scale-105 border-2 border-solid text-sm"
            style={{
              background: "transparent",
              color: palette.text,
              borderColor: palette.text,
            }}
          >
            Blogs
          </Link>
          <AnimatedSkills />
          <div className="flex flex-col items-center mb-8">
            <h1
              style={{ color: palette.text }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 leading-tight"
            >
              Olarewaju Adebulu
            </h1>
            <p
              style={{ color: palette.accent }}
              className="text-xl sm:text-2xl font-semibold mb-6"
            >
              Full-Stack Developer | Technical SEO Strategist | Business
              Development
            </p>
          </div>

          <motion.div
            className="flex justify-center items-center space-x-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowResumeModal(true)}
              className="px-6 py-3 rounded-full font-semibold transition-colors"
              style={{
                background: palette.accent,
                color: palette.text,
              }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </motion.header>
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
              <motion.div
                key={index}
                initial="hidden"
                animate={inViewServices ? "visible" : "hidden"}
                variants={cardVariants}
                custom={index}
              >
                <TiltCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
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
            {experienceItems.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inViewExperience ? "visible" : "hidden"}
                variants={cardVariants}
                custom={index}
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
                    {item.icon}
                  </div>
                  <h3
                    style={{ color: palette.text }}
                    className="text-lg font-semibold"
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: palette.subtle }} className="text-sm mt-2">
                    {item.company} | {item.duration}
                  </p>
                  <ul
                    style={{ color: palette.subtle }}
                    className="text-xs mt-3 space-y-2 text-left"
                  >
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
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
            {certificationsItems.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inViewCertifications ? "visible" : "hidden"}
                variants={cardVariants}
                custom={index}
              >
                <CertificationsCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
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
            {projectItems.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inViewProjects ? "visible" : "hidden"}
                variants={cardVariants}
                custom={index}
              >
                <ProjectCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
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
            <TestimonialCard
              quote="I had the pleasure of working with Olarewaju at Noovatix Solutions, and his talent truly stands out. He blends strategic thinking with powerful storytelling that elevates brands in the B2B SaaS and Fintech space. His content doesn’t just inform—it builds authority and drives results. A reliable, creative, and genuinely inspiring collaborator."
              author="Khadija Jawaid"
              source="Co-Founder, Noovatix Solutions"
              rating={5.0}
            />
            <TestimonialCard
              quote="I was consistently impressed by his dedication and skill. In a short period, he wrote over 20 high-quality blogs for our website, showcasing not just strong writing abilities but also a solid understanding of SEO best practices."
              author="Biswajyoti Das"
              source="Ex Associate at PW"
              rating={5.0}
            />
            <TestimonialCard
              quote="Determination and resilience are two qualities that truly define Olarewaju. I've seen how committed he is to growing his skills and contributing meaningfully to any project he's part of. His curiosity, work ethic, and positive attitude make him a valuable asset."
              author="Chidinma Ofoegbu"
              source="Fintech Content Writer"
              rating={5.0}
            />
          </div>
        </div>
      </motion.section>
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
