// src/pages/Dashboard.tsx

import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBlog,
  FaSignOutAlt,
  FaPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import ReactQuill from "react-quill-new";
// ✅ CORRECTED: Import stylesheet from the 'quill' package
import "quill/dist/quill.snow.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  category: string;
  image?: string;
  views: number;
  likes: string[];
  comments: any[];
  tags?: string[];
}

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const [showPostForm, setShowPostForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    image: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserAndBlogs = async () => {
      try {
        const { data } = await api.get("/users/me");
        setUser(data);
        if (data.role !== "admin") {
          navigate("/blogs");
          return;
        }
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
    toast.info("Logged out successfully!");
  };

  const handlePostBlog = async () => {
    if (!newBlog.title || !newBlog.content || !newBlog.category) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      if (editingBlog) {
        const { data } = await api.put(`/blogs/${editingBlog.slug}`, newBlog);
        setAllBlogs(
          allBlogs.map((b) => (b.slug === editingBlog.slug ? data : b))
        );
        toast.success("Blog updated successfully!");
        setEditingBlog(null);
      } else {
        const { data } = await api.post("/blogs", newBlog);
        setAllBlogs([data, ...allBlogs]);
        toast.success("Blog posted successfully!");
      }
      setNewBlog({ title: "", content: "", category: "", tags: "", image: "" });
      setShowPostForm(false);
    } catch (error) {
      console.error("Failed to save blog:", error);
      toast.error("Failed to save blog. Check console for details.");
    }
  };

  const handleDeleteBlog = async (slug: string) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await api.delete(`/blogs/${slug}`);
      setAllBlogs(allBlogs.filter((blog) => blog.slug !== slug));
      toast.success("Blog deleted successfully!");
    } catch (error) {
      console.error("Failed to delete blog:", error);
      toast.error("Failed to delete blog.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-black">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  if (!user || user.role !== "admin") return null;

  // ✅ UPDATED: Added header tags, font, size, and video to toolbar
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  // ✅ UPDATED: Added formats for headers, font, size, and video
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="flex min-h-screen bg-white text-black">
      <ToastContainer position="bottom-right" theme="light" />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50 flex flex-col w-64 bg-gray-100 shadow-xl`}
      >
        <div className="flex items-center justify-between p-6">
          <h1 className="font-bold text-lg text-blue-700">Admin Dashboard</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-gray-600 hover:text-black transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <a
            href="/dashboard"
            className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-200 hover:text-black transition-colors"
          >
            <FaHome className="mr-3" /> Dashboard
          </a>
          <a
            href="/blogs"
            className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-200 hover:text-black transition-colors"
          >
            <FaBlog className="mr-3" /> Blogs
          </a>
        </nav>

        <div className="p-4 border-t border-gray-300">
          <button
            onClick={logout}
            className="flex items-center w-full p-3 rounded-lg text-red-600 hover:bg-gray-200 hover:text-red-800 transition-colors"
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6 space-y-8">
        {/* Mobile Navbar */}
        <div className="flex items-center justify-between md:hidden mb-6">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-600 hover:text-black transition-colors"
          >
            <FaBars size={24} />
          </button>
          <h1 className="font-bold text-xl text-blue-700">Dashboard</h1>
        </div>

        <h1 className="text-3xl font-bold text-center text-blue-800">
          Admin Dashboard
        </h1>

        {/* Add Blog Button */}
        <div className="text-center">
          <button
            onClick={() => {
              setShowPostForm(true);
              setEditingBlog(null);
              setNewBlog({
                title: "",
                content: "",
                category: "",
                tags: "",
                image: "",
              });
            }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center mx-auto"
          >
            <FaPlus className="mr-2" /> Add New Blog
          </button>
        </div>

        {/* Blog Posting Form */}
        {showPostForm && (
          <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg border border-gray-300 w-full">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              {editingBlog ? "Edit Blog" : "New Blog"}
            </h3>
            <input
              type="text"
              placeholder="Title"
              value={newBlog.title}
              onChange={(e) =>
                setNewBlog({ ...newBlog, title: e.target.value })
              }
              className="w-full mb-3 p-2 rounded bg-white border border-gray-300 text-black"
            />
            <ReactQuill
              theme="snow"
              value={newBlog.content}
              onChange={(content) =>
                setNewBlog({ ...newBlog, content: content })
              }
              modules={modules}
              formats={formats}
              className="mb-3 text-black bg-white"
            />
            <input
              type="text"
              placeholder="Category"
              value={newBlog.category}
              onChange={(e) =>
                setNewBlog({ ...newBlog, category: e.target.value })
              }
              className="w-full mb-3 p-2 rounded bg-white border border-gray-300 text-black"
            />
            <input
              type="text"
              placeholder="Tags (comma-separated)"
              value={newBlog.tags}
              onChange={(e) => setNewBlog({ ...newBlog, tags: e.target.value })}
              className="w-full mb-3 p-2 rounded bg-white border border-gray-300 text-black"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newBlog.image}
              onChange={(e) =>
                setNewBlog({ ...newBlog, image: e.target.value })
              }
              className="w-full mb-3 p-2 rounded bg-white border border-gray-300 text-black"
            />
            <button
              onClick={handlePostBlog}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg mt-4"
            >
              {editingBlog ? "Update Blog" : "Publish Blog"}
            </button>
          </div>
        )}

        {/* Blogs List */}
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg border border-gray-300 w-full">
          <h3 className="text-xl font-bold text-blue-800 mb-4">All Blogs</h3>
          {allBlogs.length === 0 ? (
            <p className="text-gray-500">No blogs yet.</p>
          ) : (
            allBlogs.map((blog) => (
              <div
                key={blog._id}
                className="p-4 bg-white border border-gray-300 rounded-lg mb-4 flex justify-between items-center"
              >
                <div>
                  <h4 className="font-bold text-blue-900">
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h4>
                  <p className="text-sm text-gray-700">
                    By {blog.author} | Category: {blog.category}
                  </p>
                  <p className="text-sm text-gray-700">
                    Views: {blog.views} | Likes: {blog.likes?.length || 0} |
                    Comments: {blog.comments?.length || 0}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setEditingBlog(blog);
                      setNewBlog({
                        title: blog.title,
                        content: blog.content,
                        category: blog.category,
                        tags: blog.tags?.join(", ") || "",
                        image: blog.image || "",
                      });
                      setShowPostForm(true);
                    }}
                    className="p-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(blog.slug)}
                    className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
