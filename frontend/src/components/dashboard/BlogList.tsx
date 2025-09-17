// src/components/dashboard/BlogList.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import type { Blog } from "../../types/blog";

interface Props {
  blogs: Blog[];
  onEdit: (blog: Blog) => void;
  onDelete: (slug: string) => Promise<void> | void;
}

const BlogList: React.FC<Props> = ({ blogs, onEdit, onDelete }) => {
  if (!blogs.length) {
    return <p className="text-gray-500 text-center">No blogs yet.</p>;
  }

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h3 className="text-xl font-bold text-blue-800 mb-4">All Blogs</h3>
      <div className="grid gap-4">
        {blogs.map((b) => (
          <article
            key={b._id}
            className="p-5 bg-white border rounded-xl flex justify-between items-start hover:shadow-md transition"
          >
            <div className="max-w-[70%]">
              <h4 className="text-lg font-semibold text-blue-900 hover:underline">
                <Link to={`/blogs/${b.slug}`}>{b.title}</Link>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                By <span className="font-medium">{b.author}</span> •{" "}
                {b.category} • {b.views} views
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {b.tags?.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onEdit(b)}
                className="p-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg shadow"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => onDelete(b.slug)}
                className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow"
              >
                <FaTrash />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
