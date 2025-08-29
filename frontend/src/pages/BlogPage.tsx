// src/pages/BlogPage.tsx
import React, { useEffect, useState } from "react";
import { palette } from "../data/data";
import { Link } from "react-router-dom";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  createdAt: string;
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section
      className="w-full min-h-screen px-6 md:px-12 py-20"
      style={{ backgroundColor: palette.primaryBg }}
    >
      <div className="max-w-6xl mx-auto">
        <h1
          className="text-4xl font-bold mb-10 text-center"
          style={{ color: palette.text }}
        >
          Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="p-6 rounded-xl shadow-lg flex flex-col justify-between"
              style={{ backgroundColor: palette.secondaryBg }}
            >
              <div>
                <h2
                  className="text-xl font-semibold mb-3"
                  style={{ color: palette.accent2 }}
                >
                  {blog.title}
                </h2>
                <p className="text-sm mb-4" style={{ color: palette.subtle }}>
                  {blog.excerpt?.slice(0, 150)}...
                </p>
                <span className="text-xs" style={{ color: palette.subtle }}>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
              </div>
              <Link
                to={`/blog/${blog.slug}`}
                className="mt-4 inline-block px-5 py-2 rounded-full font-semibold text-sm"
                style={{
                  background: `linear-gradient(45deg, ${palette.accent1}, ${palette.accent2})`,
                  color: palette.text,
                }}
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
