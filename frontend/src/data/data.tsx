// src/data/data.ts

import React from "react";
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
import {
  FaReact,
  FaPython,
  FaLink, // Corrected import for REST APIs
  FaChartLine, // Corrected import for SEO
} from "react-icons/fa";
import { SiTypescript, SiDjango, SiTailwindcss } from "react-icons/si";
import { IoIosBusiness } from "react-icons/io";

export const palette = {
  bg: "#0d1321",
  panel: "#1d2d44",
  accent: "#3e5c76",
  subtle: "#748cab",
  text: "#f0ebd8",
};

export const serviceIcons: { [key: string]: React.ReactNode } = {
  "Full-Stack Web Development": <Code size={40} />,
  "End-to-End SEO Content Strategy": <FaChartLine size={40} />,
  "Technical SEO Audits & Optimization": <FaChartLine size={40} />,
  "AI-Enhanced Content Workflows": <Brain size={40} />,
  "Brand Storytelling & Messaging": <Book size={40} />,
};

export const experienceIcons: { [key: string]: React.ReactNode } = {
  "Business Development Executive": <Briefcase size={40} />,
  "Jr. Content Writer (Intern)": <PenTool size={40} />,
  "Content Writer Intern": <Book size={40} />,
  "SEO Content Writer": <TrendingUp size={40} />,
  "User Experience Writer": <Users size={40} />,
  "Freelance Web Developer": <Code size={40} />,
  "Lead Full-Stack Engineer": <Server size={40} />,
  "Frontend Developer (Contributor)": <Globe size={40} />,
};

export const skillsIcons: { [key: string]: React.ReactNode } = {
  "React.js": <FaReact size={20} />,
  TypeScript: <SiTypescript size={20} />,
  Python: <FaPython size={20} />,
  Django: <SiDjango size={20} />,
  "Technical SEO": <FaChartLine size={20} />,
  "Content Strategy": <Book size={20} />,
  "AI Integrations": <Brain size={20} />,
  "REST APIs": <FaLink size={20} />,
  "Tailwind CSS": <SiTailwindcss size={20} />,
  "Remote Collaboration": <Users size={20} />,
  "Problem Solving": <Brain size={20} />,
  "Cross-Functional Communication": <Users size={20} />,
  "Brand Storytelling": <Book size={20} />,
  JavaScript: <Code size={20} />,
  "AI Prompt Engineer": <Brain size={20} />,
  "Business Development Management": <IoIosBusiness size={20} />,
};

export const capabilitiesItems = [
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

export const skillsData = {
  "Technical Skills": [
    { name: "React.js", icon: skillsIcons["React.js"] },
    { name: "TypeScript", icon: skillsIcons["TypeScript"] },
    { name: "Python", icon: skillsIcons["Python"] },
    { name: "Django", icon: skillsIcons["Django"] },
    { name: "Technical SEO", icon: skillsIcons["Technical SEO"] },
    { name: "Content Strategy", icon: skillsIcons["Content Strategy"] },
    { name: "AI Integrations", icon: skillsIcons["AI Integrations"] },
    { name: "REST APIs", icon: skillsIcons["REST APIs"] },
    { name: "Tailwind CSS", icon: skillsIcons["Tailwind CSS"] },
    { name: "Remote Collaboration", icon: skillsIcons["Remote Collaboration"] },
    { name: "Problem Solving", icon: skillsIcons["Problem Solving"] },
    {
      name: "Cross-Functional Communication",
      icon: skillsIcons["Cross-Functional Communication"],
    },
    { name: "Brand Storytelling", icon: skillsIcons["Brand Storytelling"] },
    { name: "JavaScript", icon: skillsIcons["JavaScript"] },
    { name: "AI Prompt Engineer", icon: skillsIcons["AI Prompt Engineer"] },
    {
      name: "Business Development Management",
      icon: skillsIcons["Business Development Management"],
    },
  ],
};

export const allSkills = [...skillsData["Technical Skills"]];
