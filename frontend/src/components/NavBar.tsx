// src/components/NavBar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Mail, PenLine } from "lucide-react";

const NavBar: React.FC = () => {
  const location = useLocation();

  // Hide Navbar on protected/auth routes
  const hiddenRoutes = ["/dashboard", "/admin", "/login", "/register"];
  if (hiddenRoutes.some((route) => location.pathname.startsWith(route))) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0d1321] backdrop-blur-md border-b border-[#1d2d44]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
        {/* Social Icons + CTA */}
        <div className="flex space-x-6 items-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#748cab] hover:text-[#3e5c76] transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-[#748cab] hover:text-[#3e5c76] transition-colors"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#748cab] hover:text-[#3e5c76] transition-colors font-bold text-lg"
          >
            M
          </a>

          {/* Write for Us Button */}
          <Link
            to="/login"
            className="ml-6 flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-[#f0ebd8] bg-[#3e5c76] hover:bg-[#1d2d44] transition-all shadow-md"
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
