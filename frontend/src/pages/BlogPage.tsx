// src/pages/BlogPage.tsx
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import { FaUser, FaEye, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../theme/ThemeProvider";
import { stripHtml } from "string-strip-html";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  content: string; // markdown
  author: string;
  category: string;
  image?: string;
  views: number;
  likes: string[];
  comments: any[];
}

const BlogPage = () => {
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

  const primaryBg = theme === "dark" ? "bg-gray-900" : "bg-white";
  const cardBgClass = theme === "dark" ? "bg-gray-800" : "bg-gray-100";
  const primaryText = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const secondaryText = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const buttonBg =
    theme === "dark"
      ? "bg-black hover:bg-gray-800"
      : "bg-black hover:bg-gray-800";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";
  const fontClass = "font-serif";

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
      className={`${primaryBg} ${primaryText} min-h-screen p-8 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className={`text-4xl font-bold ${fontClass} text-center w-full`}>
            Our Blogs
          </h1>
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full ${cardBgClass} ${primaryText} hover:opacity-80 transition-opacity`}
          >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
        {blogs.length === 0 ? (
          <p className={`text-center text-lg ${secondaryText} ${fontClass}`}>
            No blogs to display yet. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className={`${cardBgClass} rounded-lg shadow-xl overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-[1.02] border ${borderColor}`}
              >
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h2
                      className={`mt-2 text-2xl font-bold ${primaryText} ${fontClass}`}
                    >
                      {blog.title}
                    </h2>
                    <p className={`mt-2 text-sm ${secondaryText} ${fontClass}`}>
                      {stripHtml(blog.content).result.substring(0, 150)}...
                    </p>
                  </div>
                  <div className={`mt-4 pt-4 border-t ${borderColor}`}>
                    <div className="flex justify-between items-center text-xs mb-4">
                      <div
                        className={`flex items-center space-x-4 ${secondaryText}`}
                      >
                        <span className={`flex items-center ${fontClass}`}>
                          <FaEye className="mr-1" /> {blog.views} Views
                        </span>
                        <span className={`flex items-center ${fontClass}`}>
                          <FaUser className="mr-1" /> {blog.author}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className={`inline-block w-full text-center px-4 py-2 rounded-lg font-bold transition-colors duration-300 ${buttonBg} text-white`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
