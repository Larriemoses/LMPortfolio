// src/components/dashboard/Sidebar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaBlog, FaSignOutAlt } from "react-icons/fa";

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const NavLink = ({
    to,
    icon,
    label,
  }: {
    to: string;
    icon: React.ReactNode;
    label: string;
  }) => (
    <Link
      to={to}
      className={`flex items-center p-3 rounded-lg transition ${
        pathname === to
          ? "bg-blue-600 text-white"
          : "hover:bg-blue-50 text-gray-700"
      }`}
    >
      <span className="mr-3">{icon}</span> {label}
    </Link>
  );

  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition-transform w-64 bg-white border-r shadow z-40`}
    >
      <div className="flex items-center justify-between p-6 border-b">
        <h1 className="font-bold text-xl text-blue-700">Admin</h1>
        <button onClick={() => setOpen(false)} className="md:hidden">
          <FaTimes size={22} />
        </button>
      </div>

      <nav className="px-4 py-6 space-y-2">
        <NavLink to="/dashboard" icon={<FaHome />} label="Dashboard" />
        <NavLink to="/blogs" icon={<FaBlog />} label="Blogs" />
      </nav>

      <div className="p-4 border-t mt-auto">
        <button
          onClick={onLogout}
          className="flex items-center w-full p-3 rounded-lg text-red-600 hover:bg-red-50"
        >
          <FaSignOutAlt className="mr-3" /> Logout
        </button>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="absolute top-4 left-4 md:hidden bg-blue-600 text-white p-2 rounded-lg"
      >
        <FaBars />
      </button>
    </aside>
  );
};

export default Sidebar;
