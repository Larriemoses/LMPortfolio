// src/pages/HomePage.tsx
import React from "react";
import HeroSection from "../components/HeroSection";
import SkillsStrip from "../components/SkillsStrip"; // Import the new component
import ProjectsSection from "../components/ProjectsSection";
// Import other components as they are created

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <SkillsStrip />
      <ProjectsSection />
      {/* Add other sections here */}
    </main>
  );
};

export default HomePage;
