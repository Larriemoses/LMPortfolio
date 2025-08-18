// src/components/NavBar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Mail, PenLine } from "lucide-react"; // Lucide icons (modern & sleek)

const NavBar: React.FC = () => {
  const location = useLocation();

  // Hide Navbar on protected routes
  const hiddenRoutes = ["/dashboard", "/admin"];
  if (hiddenRoutes.some((route) => location.pathname.startsWith(route))) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-[Orbitron]"
        >
          Larrie.dev
        </Link>

        {/* Social Icons */}
        <div className="flex space-x-6 items-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400 transition-colors"
          >
            M
          </a>

          {/* Write for Us Button */}
          <Link
            to="/login"
            className="ml-6 flex items-center px-4 py-2 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90 transition-all shadow-lg"
          >
            <PenLine size={16} className="mr-2" />
            Write for Us
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
