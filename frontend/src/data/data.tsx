// src/data/data.tsx
import {
  Linkedin,
  Github,
  Mail,
  FileText,
  MousePointer2,
  Download,
} from "lucide-react";
import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaWordpress,
  FaShopify,
  FaSearchengin,
} from "react-icons/fa";
import { SiDjango, SiMongodb, SiTypescript, SiNextdotjs } from "react-icons/si";

// ✅ Custom Medium Icon (SVG)
export const MediumIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 28,
  color = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 1043.63 592.71"
  >
    <path d="M588.67 296.36c0 163.64-131.65 296.36-294.34 296.36S0 460 0 296.36 131.65 0 294.34 0s294.33 132.72 294.33 296.36zm173.33 0c0 154.08-65.82 279.02-147 279.02s-147-124.94-147-279.02 65.82-279.01 147-279.01 147 124.94 147 279.01zm281.63 0c0 142.16-30.1 257.47-67.28 257.47s-67.28-115.31-67.28-257.47 30.1-257.46 67.28-257.46 67.28 115.31 67.28 257.46z" />
  </svg>
);

// ✅ Moved palette object to the top so it is defined before it's used
export const palette = {
  background: "#0D0D0D",
  primaryAccent: "#00F5A0",
  secondaryAccent: "#00D9F5",
  tertiaryAccent: "#F5A300", // A new golden-orange color
  highlightGradient: "linear-gradient(90deg, #00F5A0, #00D9F5)",
  textPrimary: "#FFFFFF",
  textSecondary: "#B0B0B0",
  error: "#FF4D4D",
};

// 🌐 Hero Section Icons
export const heroIcons = [
  {
    id: "linkedin",
    icon: <Linkedin size={30} />,
    color: palette.primaryAccent,
    link: "https://www.linkedin.com/in/olarewaju-adebulu-320184212/",
    label: "LinkedIn",
  },
  {
    id: "github",
    icon: <Github size={30} />,
    color: palette.secondaryAccent,
    link: "https://github.com/larriemoses",
    label: "GitHub",
  },
  {
    id: "medium",
    icon: <MediumIcon size={30} color={palette.primaryAccent} />,
    color: palette.primaryAccent,
    link: "https://larriemoses.medium.com",
    label: "Medium",
  },
  {
    id: "upwork",
    icon: <MousePointer2 size={30} />,
    color: palette.secondaryAccent,
    link: "https://www.upwork.com/freelancers/~01ffd7d6d27c5a9d20",
    label: "Upwork",
  },
  {
    id: "whatsapp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 448 512"
        fill={palette.secondaryAccent}
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 224.3 32c-59 0-114.8 23.1-156.6 65.1C25.7 139 2.6 194.8 2.6 253.7c0 45.5 13.5 89.7 39 127.9L0 480l102.2-40.2c36.1 19.8 76.7 30.2 118.1 30.2h.1c59 0 114.8-23.1 156.6-65.1 41.9-42 65-97.8 65-156.7 0-58.9-23.1-114.7-65-156.7zM224.3 438c-36.6 0-72.5-9.8-104-28.4l-7.4-4.4-60.7 23.9L76 366.2l-4.8-7.5c-23.2-36.4-35.4-78.7-35.4-121 0-118.8 96.7-215.6 215.5-215.6 57.6 0 111.7 22.4 152.4 63.1 40.6 40.6 63 94.6 63 152.1 0 118.8-96.7 215.6-215.4 215.6zm121.1-163.3c-6.6-3.3-39-19.2-45.1-21.4-6.1-2.2-10.5-3.3-14.9 3.3s-17.1 21.4-21 25.7c-3.9 4.3-7.7 4.9-14.3 1.6-39-19.2-64.6-34.1-90.2-77.3-6.8-11.7 6.8-10.9 19.2-36.2 2.1-4.3 1.1-8-0.6-11.3s-14.9-35.7-20.4-48.7c-5.4-13-10.9-11.2-14.9-11.4-3.9-0.2-8.3-0.2-12.8-0.2s-11.8 1.6-18 8c-6.2 6.2-23.6 23.1-23.6 56.4s24.2 65.4 27.6 69.9c3.3 4.3 47.6 72.7 115.4 102.1 16.1 7 28.6 11.2 38.4 14.4 16.1 3.2 30.7 3 42.2 1.8 12.8-0.6 39-15.9 44.5-31.2 5.5-15.3 5.5-28.4 3.9-31.1-1.6-2.5-6-3.9-12.6-6.6z" />
      </svg>
    ),
    color: palette.secondaryAccent,
    link: "https://wa.me/2348073210004",
    label: "WhatsApp",
  },
  {
    id: "mail",
    icon: <Mail size={30} />,
    color: palette.primaryAccent,
    link: "mailto:larriemoses@gmail.com",
    label: "Email",
  },
  {
    id: "resume-seo",
    icon: <Download size={30} />,
    color: palette.primaryAccent,
    link: "/resume-seo.pdf", // Replace later
    label: "Download SEO CV",
  },
  {
    id: "resume-dev",
    icon: <Download size={30} />,
    color: palette.secondaryAccent,
    link: "/resume-fullstack.pdf", // Replace later
    label: "Download Fullstack CV",
  },
];

// 🏷️ Skills
export const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Django",
  "Shopify",
  "WordPress",
  "MongoDB",
  "SQL",
  "TailwindCSS",
  "Figma",
  "Ahrefs",
  "SEMRush",
  "SurferSEO",
  "Google Analytics",
  "Google Search Console",
];

// 📂 Projects
export const projects = [
  {
    id: "discount-region",
    title: "Discount Region Store",
    description:
      "Built an ecommerce SEO system that achieved #1 Google ranking for primary keywords.",
    tech: ["React", "Node.js", "SEO", "MongoDB"],
    link: "https://discountregion.com",
    img: "/images/projects/discount-region.png",
  },
  {
    id: "clickrank",
    title: "ClickRank.ai SEO Strategy",
    description:
      "Delivered a technical + on-page SEO audit that improved site performance and organic reach.",
    tech: ["SEO", "Analytics", "WordPress"],
    link: "#",
    img: "/images/projects/clickrank.png",
  },
  {
    id: "flowmeld",
    title: "FlowMeld AI Orchestrator",
    description:
      "Developed an AI-powered productivity tool showcasing advanced system design skills.",
    tech: ["Python", "React", "AI"],
    link: "#",
    img: "/images/projects/flowmeld.png",
  },
];

// 🏷️ Blog Categories
export const blogCategories = [
  "SEO",
  "Content Strategy",
  "Web Development",
  "AI & Tech",
  "B2B Marketing",
];

// ✅ Skills with icons for background ticker
export const skillsWithIcons = [
  { name: "React.js", icon: <FaReact size={14} /> },
  { name: "Node.js", icon: <FaNodeJs size={14} /> },
  { name: "Python", icon: <FaPython size={14} /> },
  { name: "Django", icon: <SiDjango size={14} /> },
  { name: "TypeScript", icon: <SiTypescript size={14} /> },
  { name: "Next.js", icon: <SiNextdotjs size={14} /> },
  { name: "MongoDB", icon: <SiMongodb size={14} /> },
  { name: "WordPress", icon: <FaWordpress size={14} /> },
  { name: "Shopify", icon: <FaShopify size={14} /> },
  { name: "HTML5", icon: <FaHtml5 size={14} /> },
  { name: "CSS3", icon: <FaCss3Alt size={14} /> },
  { name: "JavaScript", icon: <FaJsSquare size={14} /> },
  { name: "SEO Strategy", icon: <FaSearchengin size={14} /> },
];
