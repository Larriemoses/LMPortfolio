// src/pages/BlogPage.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEye, FaMoon, FaSun, FaTag } from "react-icons/fa";
import { useTheme } from "../theme/ThemeProvider";
import { stripHtml } from "string-strip-html";
import api from "../services/api";
import type { Blog } from "../types/blog";

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await api.get("/blogs");
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const primaryBg = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-white";
  const primaryText = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const secondaryText = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const buttonBg =
    theme === "dark"
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-blue-600 hover:bg-blue-700";

  if (loading) {
    return (
      <div
        className={`flex justify-center items-center min-h-screen ${primaryBg} ${primaryText}`}
      >
        <p>Loading blogs...</p>
      </div>
    );
  }

  return (
    <div
      className={`${primaryBg} ${primaryText} min-h-screen transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold font-serif text-center mb-14">
          Latest Articles
        </h1>

        {blogs.length === 0 ? (
          <p className={`text-center text-lg ${secondaryText} font-serif`}>
            No blogs to display yet. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className={`${cardBg} rounded-xl shadow-md border ${borderColor} flex flex-col overflow-hidden hover:shadow-xl transition duration-300`}
              >
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover"
                  />
                )}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
                      {blog.category}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold font-serif leading-snug hover:underline">
                      {blog.title}
                    </h2>
                    <p
                      className={`mt-3 text-sm ${secondaryText} leading-relaxed`}
                    >
                      {stripHtml(blog.content).result.substring(0, 160)}...
                    </p>
                  </div>

                  <div className={`mt-5 pt-4 border-t ${borderColor}`}>
                    <div className="flex justify-between items-center text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <FaEye /> {blog.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUser /> {blog.author}
                      </span>
                    </div>

                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {blog.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded"
                          >
                            <FaTag size={10} /> {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      to={`/blogs/${blog.slug}`}
                      className={`inline-block w-full text-center px-4 py-2 rounded-lg font-semibold transition ${buttonBg} text-white`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Floating Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg ${cardBg} ${primaryText} hover:opacity-80 transition`}
      >
        {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>
    </div>
  );
};

export default BlogPage;
