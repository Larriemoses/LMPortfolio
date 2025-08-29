// src/components/Footer.tsx
import React from "react";
import { palette } from "../data/data";
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full py-10 px-6 md:px-12 border-t"
      style={{
        backgroundColor: palette.secondaryBg,
        borderColor: palette.subtle,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left: Logo/Name */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl font-semibold" style={{ color: palette.text }}>
            Olarewaju Adebulu
          </h2>
          <p className="text-sm" style={{ color: palette.subtle }}>
            SEO Strategist & Full-Stack Developer
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="#hero"
            className="text-sm hover:underline"
            style={{ color: palette.text }}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm hover:underline"
            style={{ color: palette.text }}
          >
            About
          </a>
          <a
            href="#services"
            className="text-sm hover:underline"
            style={{ color: palette.text }}
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-sm hover:underline"
            style={{ color: palette.text }}
          >
            Projects
          </a>
          <a
            href="#blog"
            className="text-sm hover:underline"
            style={{ color: palette.text }}
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-sm hover:underline"
            style={{ color: palette.text }}
          >
            Contact
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end space-x-6 text-xl">
          <a
            href="https://www.linkedin.com/in/olarewaju-adebulu-320184212/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color="#0A66C2" />
          </a>
          <a
            href="https://github.com/larriemoses"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="#EAEAEA" />
          </a>
          <a
            href="https://larriemoses.medium.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaMedium color="#000" />
          </a>
          <a
            href="https://wa.me/2348073210004"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp color="#25D366" />
          </a>
          <a href="mailto:larriemoses@gmail.com">
            <FaEnvelope color="#EA4335" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01ffd7d6d27c5a9d20"
            target="_blank"
            rel="noreferrer"
          >
            <SiUpwork color="#6fda44" />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div
        className="mt-10 text-center text-sm"
        style={{ color: palette.subtle }}
      >
        © {new Date().getFullYear()} Olarewaju Adebulu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
