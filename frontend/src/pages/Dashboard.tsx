// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBlog,
  FaSignOutAlt,
  FaPlus,
  FaTrash,
  FaEdit,
  FaBold,
  FaItalic,
  FaHeading,
  FaLink,
  FaImage,
  FaCode,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExtension from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";

const lowlight = createLowlight();
lowlight.register("js", javascript);
lowlight.register("javascript", javascript);
lowlight.register("python", python);

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

  // Extra states for clean UX
  const [linkUrl, setLinkUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] }, // ✅ enable H1, H2, H3
      }),
      LinkExtension.configure({ openOnClick: true }),
      Image,
      CodeBlockLowlight.configure({ lowlight }),
    ],
    content: newBlog.content,
    onUpdate: ({ editor }) => {
      setNewBlog({ ...newBlog, content: editor.getHTML() });
    },
  });

  // Insert link
  const insertLink = () => {
    if (linkUrl.trim()) {
      editor?.chain().focus().setLink({ href: linkUrl }).run();
      setLinkUrl("");
      toast.success("Link added!");
    }
  };

  // Insert image
  const insertImage = () => {
    if (imageUrl.trim()) {
      editor?.chain().focus().setImage({ src: imageUrl }).run();
      setImageUrl("");
      toast.success("Image added!");
    }
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
      editor?.commands.setContent("");
    } catch (error) {
      console.error("Failed to save blog:", error);
      toast.error("Failed to save blog. Check console for details.");
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

  return (
    <div className="flex min-h-screen bg-white text-black">
      <ToastContainer position="bottom-right" theme="light" />

      {/* --- Sidebar omitted for brevity --- */}

      <div className="flex-1 flex flex-col p-6 space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          Admin Dashboard
        </h1>

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

            {/* ✅ Editor Toolbar */}
            <div className="border border-gray-300 rounded-lg bg-white text-black p-2 mb-3">
              <div className="flex flex-wrap gap-2 mb-2">
                <button
                  className={`p-1 ${
                    editor?.isActive("bold") ? "bg-blue-200" : ""
                  }`}
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                >
                  <FaBold />
                </button>
                <button
                  className={`p-1 ${
                    editor?.isActive("italic") ? "bg-blue-200" : ""
                  }`}
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                >
                  <FaItalic />
                </button>
                <button
                  className={`p-1 ${
                    editor?.isActive("heading", { level: 1 })
                      ? "bg-blue-200"
                      : ""
                  }`}
                  onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                >
                  H1
                </button>
                <button
                  className={`p-1 ${
                    editor?.isActive("heading", { level: 2 })
                      ? "bg-blue-200"
                      : ""
                  }`}
                  onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                >
                  H2
                </button>
                <button
                  className={`p-1 ${
                    editor?.isActive("heading", { level: 3 })
                      ? "bg-blue-200"
                      : ""
                  }`}
                  onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 3 }).run()
                  }
                >
                  H3
                </button>
              </div>

              {/* Inline link input */}
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Link URL"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  className="flex-1 border p-1 rounded"
                />
                <button
                  onClick={insertLink}
                  className="px-2 bg-blue-600 text-white rounded"
                >
                  <FaLink />
                </button>
              </div>

              {/* Inline image input */}
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="flex-1 border p-1 rounded"
                />
                <button
                  onClick={insertImage}
                  className="px-2 bg-green-600 text-white rounded"
                >
                  <FaImage />
                </button>
              </div>

              <EditorContent editor={editor} />
            </div>

            <input
              type="text"
              placeholder="Category"
              value={newBlog.category}
              onChange={(e) =>
                setNewBlog({ ...newBlog, category: e.target.value })
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
      </div>
    </div>
  );
};

export default Dashboard;
