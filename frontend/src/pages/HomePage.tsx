// src/pages/HomePage.tsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/AboutMe";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
// import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <main className="bg-[#0D0D0D] text-white">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};

export default HomePage;
