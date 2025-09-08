// src/pages/BlogPreviewPage.tsx

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import { FaUser, FaArrowLeft, FaEye, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../theme/ThemeProvider";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  image?: string;
  views: number;
  comments: Comment[];
  createdAt: string;
}

interface Comment {
  _id: string;
  name: string;
  text: string;
  createdAt: string;
}

const BlogPreviewPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjkejyaw";

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        const blogResponse = await api.get(`/blogs/${id}`);
        setBlog(blogResponse.data);

        const relatedBlogsResponse = await api.get("/blogs");
        const filteredBlogs = relatedBlogsResponse.data
          .filter((b: Blog) => b._id !== id)
          .slice(0, 5);
        setRelatedBlogs(filteredBlogs);

        await api.patch(`/blogs/${id}/views`);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError("Blog not found or an error occurred.");
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchBlogData();
    }
  }, [id]);

  const handleCommentSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!commentName || !commentText) return;
    try {
      const newComment = { name: commentName, text: commentText };
      await api.post(`/blogs/${id}/comment`, newComment);
      const blogResponse = await api.get(`/blogs/${id}`);
      setBlog(blogResponse.data);
      setCommentName("");
      setCommentText("");
    } catch (error) {
      console.error("Failed to submit comment:", error);
    }
  };

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
          _subject: `New Blog Review from ${contactName}`,
        }),
      });

      if (response.ok) {
        setFormStatus({
          message:
            "Thank you for your feedback! It has been submitted successfully.",
          type: "success",
        });
        setContactName("");
        setContactEmail("");
        setContactMessage("");
      } else {
        setFormStatus({
          message: "Failed to submit. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        message: "An error occurred. Please try again later.",
        type: "error",
      });
    }
    setTimeout(() => {
      setFormStatus({ message: "", type: "" });
    }, 5000);
  };

  const primaryBg = theme === "dark" ? "bg-gray-900" : "bg-white";
  const primaryText = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const secondaryBg = theme === "dark" ? "bg-gray-800" : "bg-gray-50";
  const secondaryText = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const accentColor = theme === "dark" ? "text-green-400" : "text-green-600";
  const inputBg = theme === "dark" ? "bg-gray-700" : "bg-gray-200";
  const buttonBg =
    theme === "dark"
      ? "bg-black hover:bg-gray-800"
      : "bg-black hover:bg-gray-800";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";

  const alertClass =
    formStatus.type === "success" ? "bg-green-500" : "bg-red-500";
  const fontClass = "font-serif";

  if (loading) {
    return (
      <div
        className={`flex justify-center items-center min-h-screen ${primaryBg} ${primaryText} ${fontClass}`}
      >
        <p>Loading blog post...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div
        className={`flex justify-center items-center min-h-screen ${primaryBg} ${primaryText} ${fontClass}`}
      >
        <p>{error || "No blog post found."}</p>
      </div>
    );
  }

  return (
    <div
      className={`${primaryBg} ${primaryText} min-h-screen p-4 sm:p-8 font-sans`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <Link
              to="/blogs"
              className={`flex items-center ${accentColor} transition-colors`}
            >
              <FaArrowLeft className="mr-2" /> Back to All Blogs
            </Link>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${secondaryBg} ${primaryText} hover:opacity-80 transition-opacity`}
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${primaryText} ${fontClass}`}
          >
            {blog.title}
          </h1>
          <div
            className={`flex flex-wrap items-center mb-6 space-x-4 text-sm ${secondaryText} ${fontClass}`}
          >
            <div className="flex items-center">
              <FaUser className="mr-2" />
              <span>By {blog.author}</span>
            </div>
            <span>|</span>
            <div className="flex items-center">
              <FaEye className="mr-2" />
              <span>{blog.views} Views</span>
            </div>
            <span>|</span>
            <span className="text-sm">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </div>

          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto max-h-96 object-cover rounded-lg my-6"
            />
          )}

          <div className="prose max-w-none text-lg leading-relaxed">
            <p
              className={`whitespace-pre-line font-medium ${primaryText} ${fontClass}`}
            >
              {blog.content}
            </p>
          </div>

          {/* Comments Section */}
          <div className="mt-12">
            <h2
              className={`text-2xl font-bold mb-4 ${primaryText} ${fontClass}`}
            >
              Comments ({blog.comments.length})
            </h2>
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={commentName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCommentName(e.target.value)
                }
                className={`w-full p-2 border ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${inputBg} ${primaryText} font-medium ${fontClass}`}
              />
              <textarea
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setCommentText(e.target.value)
                }
                className={`w-full p-2 border ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 h-24 ${inputBg} ${primaryText} font-medium ${fontClass}`}
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-lg font-bold ${buttonBg} text-white`}
              >
                Post Comment
              </button>
            </form>
            <div className="mt-8 space-y-6">
              {blog.comments.map((comment) => (
                <div
                  key={comment._id}
                  className={`${secondaryBg} p-4 rounded-lg border ${borderColor}`}
                >
                  <p className={`font-medium ${secondaryText} ${fontClass}`}>
                    {comment.name}
                  </p>
                  <p className={`mt-1 text-sm ${secondaryText} ${fontClass}`}>
                    {comment.text}
                  </p>
                  <span
                    className={`block text-right text-xs ${secondaryText} ${fontClass}`}
                  >
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80 w-full lg:sticky lg:top-8 lg:self-start">
          {/* Related Blogs Section */}
          <div
            className={`${secondaryBg} rounded-lg p-6 mb-8 border ${borderColor}`}
          >
            <h2
              className={`text-2xl font-bold mb-4 ${primaryText} ${fontClass}`}
            >
              Related Blogs
            </h2>
            <ul className="space-y-4">
              {relatedBlogs.length > 0 ? (
                relatedBlogs.map((relatedBlog) => (
                  <li key={relatedBlog._id}>
                    <Link
                      to={`/blogs/${relatedBlog._id}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className={`block p-4 rounded-lg transition-colors duration-300 ${
                        theme === "dark"
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      <h3
                        className={`font-medium ${secondaryText} ${fontClass}`}
                      >
                        {relatedBlog.title}
                      </h3>
                      <p className={`text-sm ${secondaryText} ${fontClass}`}>
                        By {relatedBlog.author}
                      </p>
                    </Link>
                  </li>
                ))
              ) : (
                <p className={`text-gray-400 ${secondaryText} ${fontClass}`}>
                  No related blogs found.
                </p>
              )}
            </ul>
          </div>

          {/* Contact Author Form */}
          <div
            className={`${secondaryBg} rounded-lg p-6 border ${borderColor}`}
          >
            <h2
              className={`text-2xl font-bold mb-4 ${primaryText} ${fontClass}`}
            >
              Contact Author
            </h2>
            {formStatus.message && (
              <div className={`${alertClass} text-white p-3 rounded-md mb-4`}>
                {formStatus.message}
              </div>
            )}
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={contactName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setContactName(e.target.value)
                }
                className={`w-full p-2 border ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${inputBg} ${primaryText} font-medium ${fontClass}`}
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={contactEmail}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setContactEmail(e.target.value)
                }
                className={`w-full p-2 border ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${inputBg} ${primaryText} font-medium ${fontClass}`}
              />
              <textarea
                placeholder="Your Message or Review"
                name="message"
                value={contactMessage}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setContactMessage(e.target.value)
                }
                className={`w-full p-2 border ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 h-24 ${inputBg} ${primaryText} font-medium ${fontClass}`}
              />
              <button
                type="submit"
                className={`w-full px-4 py-2 rounded-lg font-bold ${buttonBg} text-white`}
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewPage;
