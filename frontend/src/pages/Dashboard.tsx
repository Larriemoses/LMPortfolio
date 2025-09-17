// src/pages/Dashboard.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { ToastContainer, toast } from "react-toastify";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import BlogList from "../components/dashboard/BlogList";
import BlogEditor from "../components/dashboard/BlogEditor";

import type { Blog } from "../types/blog";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<{ name?: string; role?: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | undefined>(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get("/users/me");
        setUser(data);
        if (data.role !== "admin") {
          navigate("/blogs");
          return;
        }
        const blogsRes = await api.get("/blogs");
        setBlogs(blogsRes.data || []);
      } catch (err) {
        console.error(err);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!user || user.role !== "admin") return null;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <ToastContainer position="bottom-right" theme="light" />
      <Sidebar
        onLogout={() => {
          localStorage.removeItem("token");
          toast.info("Logged out successfully!");
          navigate("/login");
        }}
      />
      <div className="flex-1 flex flex-col">
        <Topbar username={user.name ?? "Admin"} />
        <main className="flex-1 p-6 space-y-8 overflow-y-auto">
          <div className="flex justify-center">
            <button
              onClick={() => {
                setEditingBlog(undefined);
                setIsEditorOpen(true);
              }}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md"
            >
              + Add New Blog
            </button>
          </div>

          {isEditorOpen && (
            <BlogEditor
              blog={editingBlog}
              onClose={() => setIsEditorOpen(false)}
              onSave={(saved: Blog) => {
                if (editingBlog) {
                  setBlogs((prev) =>
                    prev.map((b) => (b.slug === editingBlog.slug ? saved : b))
                  );
                } else {
                  setBlogs((prev) => [saved, ...prev]);
                }
                setIsEditorOpen(false);
              }}
            />
          )}

          <BlogList
            blogs={blogs}
            onEdit={(b: Blog) => {
              setEditingBlog(b);
              setIsEditorOpen(true);
            }}
            onDelete={async (slug: string) => {
              try {
                await api.delete(`/blogs/${slug}`);
                setBlogs((prev) => prev.filter((b) => b.slug !== slug));
                toast.success("Blog deleted");
              } catch (err) {
                console.error(err);
                toast.error("Failed to delete");
              }
            }}
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
