// src/components/BlogPreview.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { palette } from "../data/data";
import { Link } from "react-router-dom";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  createdAt: string;
}

const BlogPreview: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs?limit=3`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section
      id="blog-preview"
      className="w-full min-h-[60vh] flex items-center justify-center px-6 md:px-12 py-20"
      style={{ backgroundColor: palette.primaryBg }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: palette.text }}
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          Latest Blog Posts
        </motion.h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <motion.div
              key={blog._id}
              className="p-6 rounded-xl shadow-lg flex flex-col justify-between"
              style={{ backgroundColor: palette.secondaryBg }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 20px ${palette.accent1}`,
              }}
            >
              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: palette.accent2 }}
                >
                  {blog.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: palette.subtle }}>
                  {blog.excerpt?.slice(0, 120)}...
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
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <Link
          to="/blog"
          className="px-8 py-3 rounded-full font-semibold text-lg"
          style={{
            background: `linear-gradient(45deg, ${palette.accent1}, ${palette.accent2})`,
            color: palette.text,
          }}
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogPreview;
