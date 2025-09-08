// src/pages/AdminDashboard.tsx
import { useEffect, useState } from "react";
import api from "../services/api";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  status: string;
}

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchPendingBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("/blogs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlogs(res.data.filter((b: Blog) => b.status === "pending"));
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };
    fetchPendingBlogs();
  }, []);

  const handleStatusChange = async (
    id: string,
    status: "approved" | "rejected"
  ) => {
    try {
      const token = localStorage.getItem("token");
      await api.patch(
        `/blogs/${id}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBlogs(blogs.filter((b) => b._id !== id)); // remove from list
    } catch (error) {
      console.error("Failed to update blog status", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Blog Review</h1>
      {blogs.length === 0 ? (
        <p>No pending blogs</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="border p-4 mb-4 rounded shadow">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p>{blog.content}</p>
            <p className="text-sm text-gray-500">
              By {blog.author} — {blog.category}
            </p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleStatusChange(blog._id, "approved")}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Approve
              </button>
              <button
                onClick={() => handleStatusChange(blog._id, "rejected")}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
