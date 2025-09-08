// src/pages/Dashboard.tsx

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
  FaPlus,
} from "react-icons/fa";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [allBlogs, setAllBlogs] = useState<any[]>([]); // To store all blogs
  const [showPostForm, setShowPostForm] = useState(false); // New state to toggle form visibility
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    category: "",
    image: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserAndBlogs = async () => {
      try {
        const { data } = await api.get("/users/me");
        setUser(data);
        if (data.role !== "admin") {
          // Redirect if not an admin
          navigate("/blogs");
          return;
        }

        // Fetch all approved blogs for the dashboard list
        const blogs = await api.get("/blogs");
        setAllBlogs(blogs.data);
      } catch (error) {
        console.error("Failed to fetch user or blogs:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchUserAndBlogs();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Post blog (admin only, always approved)
  const handlePostBlog = async () => {
    try {
      const { data } = await api.post("/blogs", newBlog);
      setAllBlogs([data, ...allBlogs]); // Add the new blog to the list
      setNewBlog({ title: "", content: "", category: "", image: "" });
      alert("Blog posted successfully!");
      setShowPostForm(false); // Hide the form after successful post
    } catch (error) {
      console.error("Failed to post blog:", error);
      alert("Failed to post blog. Check console for details.");
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-300">
        <p>Loading dashboard...</p>
      </div>
    );

  // If user is not an admin, they are already redirected.
  // This is a safety check.
  if (!user || user.role !== "admin") return null;

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50 flex flex-col w-64 bg-gray-800 shadow-xl`}
      >
        {/* Profile section */}
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-3">
            <img
              src={user.profilePic || "/default-avatar.png"}
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
            />
            <div className="hidden md:block">
              <h1 className="font-bold text-lg text-blue-400">
                Admin Dashboard
              </h1>
              <p className="text-gray-400 text-sm">{user.name}</p>
            </div>
          </div>
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
      <div className="flex-1 flex flex-col p-6 space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-400">
          Admin Dashboard
        </h1>

        {/* Toggleable Blog Posting Form */}
        <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 w-full">
          <button
            onClick={() => setShowPostForm(!showPostForm)}
            className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold mb-4 w-full justify-center"
          >
            <FaPlus className="mr-2" />
            {showPostForm ? "Hide Post Form" : "Post a New Blog"}
          </button>

          {showPostForm && (
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
                New Blog Details
              </h3>
              <input
                type="text"
                placeholder="Title"
                value={newBlog.title}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
                className="w-full mb-3 p-2 rounded bg-gray-700 text-gray-100"
              />
              <textarea
                placeholder="Content"
                value={newBlog.content}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, content: e.target.value })
                }
                className="w-full mb-3 p-2 rounded bg-gray-700 text-gray-100"
                rows={5}
              />
              <input
                type="text"
                placeholder="Category"
                value={newBlog.category}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, category: e.target.value })
                }
                className="w-full mb-3 p-2 rounded bg-gray-700 text-gray-100"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newBlog.image}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, image: e.target.value })
                }
                className="w-full mb-3 p-2 rounded bg-gray-700 text-gray-100"
              />
              <button
                onClick={handlePostBlog}
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg mt-4 w-full justify-center"
              >
                <FaPlus className="mr-2" /> Publish Blog
              </button>
            </div>
          )}
        </div>

        {/* All Blogs List for Admin */}
        <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 w-full">
          <h3 className="text-xl font-bold text-purple-400 mb-4">
            All Published Blogs
          </h3>
          {allBlogs.length === 0 ? (
            <p className="text-gray-400">No blogs have been published yet.</p>
          ) : (
            allBlogs.map((blog) => (
              <div key={blog._id} className="p-4 bg-gray-700 rounded-lg mb-4">
                <h4 className="font-bold text-blue-300">{blog.title}</h4>
                <p className="text-sm text-gray-400">
                  By {blog.author} | Status: {blog.status}
                </p>
                <p className="text-sm text-gray-400">
                  Views: {blog.views} | Likes: {blog.likes?.length || 0} |
                  Comments: {blog.comments?.length || 0}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
