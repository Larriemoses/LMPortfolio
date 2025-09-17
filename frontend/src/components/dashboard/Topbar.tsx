// src/components/dashboard/Topbar.tsx
import React from "react";

interface TopbarProps {
  username: string;
}

const Topbar: React.FC<TopbarProps> = ({ username }) => {
  return (
    <div className="flex items-center justify-between bg-white px-6 py-4 border-b shadow-sm">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Welcome, {username}
        </h2>
        <p className="text-sm text-gray-500">Admin Dashboard</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          {username ? username.charAt(0).toUpperCase() : "A"}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
