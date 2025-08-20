// src/data/data.ts
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaSass,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaUserCog,
  FaBusinessTime,
  FaLaptopCode,
  FaCode,
  FaLink,
  FaBook,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDjango,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiGraphql,
  SiNextdotjs,
} from "react-icons/si";
import { Briefcase, Zap, Star, TrendingUp, PenTool } from "lucide-react";

export const palette = {
  bg: "#0d1321",
  panel: "#1d2d44",
  accent: "#3e5c76",
  subtle: "#748cab",
  text: "#f0ebd8",
};

export const serviceIcons = {
  "Full-Stack Web Development": <FaLaptopCode size={40} />,
  "End-to-End SEO Content Strategy": <FaChartLine size={40} />,
  "Technical SEO Audits & Optimization": <TrendingUp size={40} />, // Changed to TrendingUp
  "AI-Enhanced Content Workflows": <FaBrain size={40} />,
  "Brand Storytelling & Messaging": <FaBook size={40} />,
};

export const experienceIcons = {
  "Lead Full-Stack Engineer": <FaCode size={40} />,
  "Business Development Executive": <Briefcase size={40} />,
  "Jr. Content Writer (Intern)": <PenTool size={40} />, // Changed to PenTool
  "Content Writer Intern": <FaBook size={40} />,
  "SEO Content Writer": <TrendingUp size={40} />, // Changed to TrendingUp
  "User Experience Writer": <FaUserCog size={40} />,
};

export const skillsByNiche = {
  development: [
    { name: "React.js", icon: <FaReact size={24} />, color: "#61DAFB" },
    { name: "TypeScript", icon: <SiTypescript size={24} />, color: "#3178C6" },
    { name: "Node.js", icon: <FaNodeJs size={24} />, color: "#68A063" },
    { name: "Django", icon: <SiDjango size={24} />, color: "#092E20" },
    { name: "Python", icon: <FaPython size={24} />, color: "#3776AB" },
    { name: "HTML5", icon: <FaHtml5 size={24} />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt size={24} />, color: "#1572B6" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={24} />,
      color: "#06B6D4",
    },
    { name: "JavaScript", icon: <FaJsSquare size={24} />, color: "#F7DF1E" },
    { name: "Git", icon: <FaGitAlt size={24} />, color: "#F05032" },
    { name: "Firebase", icon: <SiFirebase size={24} />, color: "#FFCA28" },
    { name: "PostgreSQL", icon: <SiPostgresql size={24} />, color: "#336791" },
  ],
  seo: [
    { name: "Technical SEO", icon: <TrendingUp size={24} />, color: "#3498DB" },
    {
      name: "Content Strategy",
      icon: <FaChartLine size={24} />,
      color: "#2ECC71",
    },
    { name: "AI Tools", icon: <FaBrain size={24} />, color: "#E74C3C" },
  ],
};

// New data structure for the navigation/contact icons
export const heroIcons = [
  {
    id: "experience",
    icon: <Briefcase size={40} />,
    color: "#2ECC71",
    label: "Experience",
    link: "#experience",
  },
  {
    id: "projects",
    icon: <Zap size={40} />,
    color: "#E74C3C",
    label: "Projects",
    link: "#projects",
  },
  {
    id: "certifications",
    icon: <Star size={40} />,
    color: "#FFD700",
    label: "Certifications",
    link: "#certifications",
  },
  {
    id: "email",
    icon: <FaEnvelope size={40} />,
    color: "#D44638",
    label: "Email",
    link: "mailto:larriemoses@gmail.com",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin size={40} />,
    color: "#0077B5",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/olarewajuadebulu",
  },
  {
    id: "github",
    icon: <FaGithub size={40} />,
    color: "#24292E",
    label: "GitHub",
    link: "https://github.com/Larriemoses",
  },
  {
    id: "whatsapp",
    icon: <FaWhatsapp size={40} />,
    color: "#25D366",
    label: "WhatsApp",
    link: "https://wa.me/2348073210004",
  },
];

export const allSkills = Object.values(skillsByNiche).flat();
