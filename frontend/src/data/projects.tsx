// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  demo?: string;
  img?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "discount-region",
    title: "Discount Region Store",
    description:
      "Built an ecommerce SEO system that achieved #1 Google ranking for primary keywords.",
    tech: ["React", "Node.js", "SEO", "MongoDB"],
    link: "https://discountregion.com",
    github: "https://github.com/Larriemoses/Discount-Center",
    img: "/images/projects/discount-region.png",
    featured: true,
  },
  {
    id: "clickrank",
    title: "ClickRank.ai SEO Strategy",
    description:
      "Delivered a technical + on-page SEO audit that improved site performance and organic reach.",
    tech: ["SEO", "Analytics", "WordPress"],
    link: "#",
    img: "/images/projects/clickrank.png",
    featured: true,
  },
  {
    id: "flowmeld",
    title: "FlowMeld AI Orchestrator",
    description:
      "Developed an AI-powered productivity tool showcasing advanced system design skills.",
    tech: ["Python", "React", "AI"],
    github: "https://github.com/Larriemoses/FlowMeld",
    img: "/images/projects/flowmeld.png",
    featured: true,
  },
  {
    id: "lmportfolio",
    title: "LMPortfolio",
    description:
      "My personal portfolio site built with TypeScript and Tailwind.",
    tech: ["TypeScript", "Tailwind", "Vite"],
    github: "https://github.com/Larriemoses/LMPortfolio",
    demo: "https://lmportfolio.vercel.app",
    img: "/images/projects/lmportfolio.png",
  },
  {
    id: "sendme",
    title: "SendMe Frontend",
    description:
      "Contributed to a logistics platform frontend using React and REST APIs.",
    tech: ["React", "REST", "SCSS"],
    github: "#",
    img: "/images/projects/sendme.png",
  },
];
