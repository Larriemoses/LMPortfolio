// src/pages/BlogPreviewPage.tsx

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import { FaUser, FaArrowLeft, FaEye, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../theme/ThemeProvider";
import useBlogData from "../hooks/useBlogData";
import DOMPurify from "dompurify";

// ✅ Tailwind Typography styles Quill content properly
import "quill/dist/quill.snow.css";
import "quill/dist/quill.core.css";
import "../index.css"; // make sure tailwind typography plugin is enabled

interface Blog {
  _id: string;
  slug: string;
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
  const { slug } = useParams<{ slug: string }>();

  const { theme, toggleTheme } = useTheme();
  const { blog, relatedBlogs, loading, error, setBlog } = useBlogData(slug);

  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjkejyaw";

  // ✅ Submit comment
  const handleCommentSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!commentName || !commentText) return;
    try {
      const newComment = { name: commentName, text: commentText };
      await api.post(`/blogs/${slug}/comment`, newComment);
      const blogResponse = await api.get(`/blogs/${slug}`);
      setBlog(blogResponse.data);
      setCommentName("");
      setCommentText("");
    } catch (commentError) {
      console.error("Failed to submit comment:", commentError);
    }
  };

  // ✅ Contact form
  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
          _subject: `New Blog Review from ${contactName}`,
        }),
      });

      if (response.ok) {
        setFormStatus({
          message: "Thank you for your feedback! Submitted successfully.",
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
    } catch (err) {
      setFormStatus({
        message: "An error occurred. Please try again later.",
        type: "error",
      });
    }
    setTimeout(() => setFormStatus({ message: "", type: "" }), 5000);
  };

  // ✅ Tailwind class helpers
  const primaryBg = theme === "dark" ? "bg-gray-900" : "bg-white";
  const primaryText = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const secondaryBg = theme === "dark" ? "bg-gray-800" : "bg-gray-50";
  const secondaryText = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const accentColor = theme === "dark" ? "text-green-400" : "text-green-600";
  const inputBg = theme === "dark" ? "bg-gray-700" : "bg-gray-200";
  const buttonBg = "bg-black hover:bg-gray-800";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";
  const alertClass =
    formStatus.type === "success" ? "bg-green-500" : "bg-red-500";
  const fontClass = "font-serif";

  if (loading)
    return (
      <div
        className={`flex justify-center items-center min-h-screen ${primaryBg} ${primaryText}`}
      >
        <p>Loading blog post...</p>
      </div>
    );

  if (error)
    return (
      <div
        className={`flex flex-col justify-center items-center min-h-screen ${primaryBg} ${primaryText}`}
      >
        <p className="text-xl text-red-500 font-bold mb-4">{error}</p>
        <Link to="/blogs" className={`${accentColor} hover:underline`}>
          Go back to all blogs
        </Link>
      </div>
    );

  if (!blog)
    return (
      <div
        className={`flex justify-center items-center min-h-screen ${primaryBg} ${primaryText}`}
      >
        <p>No blog post found.</p>
      </div>
    );

  // ✅ Sanitize blog content before rendering
  const cleanHTML = DOMPurify.sanitize(blog.content, {
    USE_PROFILES: { html: true },
  });

  return (
    <div className={`${primaryBg} ${primaryText} min-h-screen p-4 sm:p-8`}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <Link
              to="/blogs"
              className={`flex items-center ${accentColor} transition-colors`}
            >
              <FaArrowLeft className="mr-2" /> Back to All Blogs
            </Link>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${secondaryBg} ${primaryText}`}
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {blog.title}
          </h1>

          {/* Author + Meta */}
          <div className="flex items-center space-x-4 text-sm mb-6">
            <img
              src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755525952/1749898239122_v2xyue.jpg"
              alt="Olarewaju Adebulu"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-medium">Olarewaju Adebulu</span>
            <span className="opacity-60">•</span>
            <FaEye className="mr-1" /> {blog.views} views
            <span className="opacity-60">•</span>
            {new Date(blog.createdAt).toLocaleDateString()}
          </div>

          {/* Image */}
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto max-h-96 object-cover rounded-lg my-6"
            />
          )}

          {/* ✅ Rich Content */}
          <div
            className={`prose max-w-none text-lg leading-relaxed ${
              theme === "dark" ? "prose-invert" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: cleanHTML }}
          />

          {/* Comments */}
          <div id="comments-section" className="mt-12">
            <h2 className="text-2xl font-bold mb-4">
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
                className={`w-full p-2 border ${borderColor} rounded-md ${inputBg}`}
              />
              <textarea
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setCommentText(e.target.value)
                }
                className={`w-full p-2 border ${borderColor} rounded-md h-24 ${inputBg}`}
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
                  <p className="font-medium">{comment.name}</p>
                  <p className="mt-1 text-sm">{comment.text}</p>
                  <span className="block text-right text-xs">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80 w-full lg:sticky lg:top-8 lg:self-start">
          {/* Related Blogs */}
          <div
            className={`rounded-lg p-6 mb-8 border ${borderColor} ${secondaryBg}`}
          >
            <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
            <ul className="space-y-4">
              {relatedBlogs.length > 0 ? (
                relatedBlogs.map((relatedBlog) => (
                  <li key={relatedBlog._id}>
                    <Link
                      to={`/blogs/${relatedBlog.slug}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="block p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <h3 className="font-medium">{relatedBlog.title}</h3>
                      <p className="text-sm">By {relatedBlog.author}</p>
                    </Link>
                  </li>
                ))
              ) : (
                <p>No related blogs found.</p>
              )}
            </ul>
          </div>

          {/* Contact Author */}
          <div
            className={`rounded-lg p-6 border ${borderColor} ${secondaryBg}`}
          >
            <h2 className="text-2xl font-bold mb-4">Contact Author</h2>
            {formStatus.message && (
              <div className={`${alertClass} text-white p-3 rounded-md mb-4`}>
                {formStatus.message}
              </div>
            )}
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={contactName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setContactName(e.target.value)
                }
                className={`w-full p-2 border ${borderColor} rounded-md ${inputBg}`}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={contactEmail}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setContactEmail(e.target.value)
                }
                className={`w-full p-2 border ${borderColor} rounded-md ${inputBg}`}
              />
              <textarea
                placeholder="Your Message or Review"
                value={contactMessage}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setContactMessage(e.target.value)
                }
                className={`w-full p-2 border ${borderColor} rounded-md h-24 ${inputBg}`}
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
