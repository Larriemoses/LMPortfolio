// src/components/layout/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { palette } from "../data/data";

const Navbar: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{ backgroundColor: palette.secondaryBg }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-wide"
          style={{ color: palette.accent1 }}
        >
          Olarewaju.dev
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" style={{ color: palette.text }}>
            Home
          </Link>
          <Link to="/services" style={{ color: palette.text }}>
            Services
          </Link>
          <Link to="/projects" style={{ color: palette.text }}>
            Projects
          </Link>
          <Link to="/blogs" style={{ color: palette.text }}>
            Blog
          </Link>
          <Link to="/contact" style={{ color: palette.text }}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl" style={{ color: palette.text }}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
