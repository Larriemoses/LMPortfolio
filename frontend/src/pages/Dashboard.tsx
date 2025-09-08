import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaBlog,
  FaSignOutAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await api.get("/users/me");
        setUser(data);
      } catch (error) {
        // If there's an error (e.g., 401), navigate to login
        console.error("Failed to fetch user:", error);
        navigate("/login");
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Show a loading message if data is still being fetched
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-300">
        <p>Loading dashboard...</p>
      </div>
    );

  // If loading is complete but user is null (e.g., failed to fetch), show an error or redirect
  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-red-400">
        <p>Error: Could not load user data. Please try logging in again.</p>
      </div>
    );

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50 flex flex-col w-64 bg-gray-800 shadow-xl`}
      >
        <div className="flex items-center justify-between p-6">
          <h1 className="font-bold text-xl text-blue-400">Admin Panel</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a
            href="/dashboard"
            className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          >
            <FaHome className="mr-3" /> Dashboard
          </a>
          <a
            href="/profile"
            className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          >
            <FaUser className="mr-3" /> Profile
          </a>
          <a
            href="/blogs"
            className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          >
            <FaBlog className="mr-3" /> Blogs
          </a>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={logout}
            className="flex items-center w-full p-3 rounded-lg text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors"
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Navbar for Mobile */}
        <div className="flex items-center justify-between md:hidden mb-6">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaBars size={24} />
          </button>
          <h1 className="font-bold text-xl text-blue-400">Dashboard</h1>
        </div>

        {/* User Card */}
        <div className="max-w-xl w-full mx-auto p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                src={user.profilePic || "/default-avatar.png"}
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover transform transition-transform duration-300 hover:scale-105"
              />
              {user.isVerified && (
                <FaCheckCircle
                  className="absolute bottom-1 right-1 text-green-500 bg-gray-800 rounded-full"
                  size={24}
                />
              )}
            </div>
            <h2 className="text-3xl font-bold mt-4 text-blue-300">
              {user.name}
            </h2>
            <p className="text-gray-400 font-medium">{user.title}</p>
            <p className="mt-4 text-gray-300 max-w-sm">{user.bio}</p>
          </div>
        </div>

        {/* Dashboard Content (e.g., Blog Stats) */}
        <div className="mt-10 max-w-xl w-full mx-auto p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-blue-300 mb-4">
            Your Blog Summary
          </h3>
          <p className="text-gray-400">
            Welcome back! This is where you can see a summary of your blog
            activities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-gray-700 rounded-lg text-center">
              <p className="text-xl font-bold">12</p>
              <p className="text-sm text-gray-400">Published Blogs</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg text-center">
              <p className="text-xl font-bold">450</p>
              <p className="text-sm text-gray-400">Total Views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
