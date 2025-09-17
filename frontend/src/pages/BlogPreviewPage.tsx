// src/pages/BlogPreviewPage.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { FaUser, FaEye, FaWhatsapp } from "react-icons/fa";
import { TbBrandLinkedin, TbBrandGithub, TbBrandX } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { useTheme } from "../theme/ThemeProvider";
import EditorJsRenderer from "editorjs-react-renderer";
import type { OutputData } from "@editorjs/editorjs";
import type { Blog } from "../types/blog";

const brandColors = {
  linkedin: "#0A66C2",
  upwork: "#14a800",
  github: "#333",
  twitter: "#000000",
  whatsapp: "#25D366",
};

const BlogPreviewPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [otherBlogs, setOtherBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await api.get(`/blogs/${slug}`);
        setBlog(data);

        // fetch other blogs for related section
        const { data: all } = await api.get("/blogs");
        setOtherBlogs(all.filter((b: Blog) => b.slug !== slug).slice(0, 3));
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  const isEditorJsData = (content: any): content is OutputData => {
    return (
      typeof content === "object" && content !== null && "blocks" in content
    );
  };

  const primaryBg = theme === "dark" ? "bg-gray-900" : "bg-white";
  const primaryText = theme === "dark" ? "text-gray-200" : "text-gray-900";
  const secondaryText = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  if (loading) {
    return (
      <div
        className={`flex justify-center items-center min-h-screen ${primaryBg} ${primaryText}`}
      >
        <p>Loading blog...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div
        className={`flex justify-center items-center min-h-screen ${primaryBg} ${primaryText}`}
      >
        <p>Blog not found.</p>
      </div>
    );
  }

  return (
    <div className={`${primaryBg} ${primaryText} min-h-screen`}>
      {/* Hero */}
      {blog.image && (
        <div className="w-full h-80 md:h-[400px] overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 -mt-20 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm mb-8">
            <span className={`flex items-center ${secondaryText}`}>
              <FaUser className="mr-2" /> {blog.author}
            </span>
            <span className={`flex items-center ${secondaryText}`}>
              <FaEye className="mr-2" /> {blog.views} Views
            </span>
            <span className="text-blue-600 font-medium">{blog.category}</span>
          </div>

          {/* Blog Content */}
          <article
            className={`prose prose-lg max-w-none ${
              theme === "dark"
                ? "prose-invert prose-headings:text-gray-100 prose-p:text-gray-300 prose-a:text-blue-400"
                : "prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600"
            }`}
          >
            {isEditorJsData(blog.content) ? (
              <EditorJsRenderer data={blog.content as OutputData} />
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {blog.content as string}
              </ReactMarkdown>
            )}
          </article>
        </div>

        {/* Author Bio */}
        <div className={`mt-16 border-t pt-10 ${borderColor}`}>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755525952/1749898239122_v2xyue.jpg"
              alt={blog.author}
              className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">{blog.author}</h3>
            <p className={`max-w-2xl mb-4 ${secondaryText}`}>
              B2B SaaS & Fintech Content Strategist, Technical Writer, and SEO
              Growth Partner. Helping startups build authority and scale through
              technical SEO, content marketing, and conversion-focused
              storytelling.
            </p>
            {/* Social Icons */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
            >
              <a
                href="https://www.linkedin.com/in/olarewajuadebulu/"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandLinkedin
                  size={28}
                  color={brandColors.linkedin}
                  className="hover:scale-110 transition"
                />
              </a>
              <a
                href="https://upwork.com/freelancers/~01ffd7d6d27c5a9d20"
                target="_blank"
                rel="noreferrer"
              >
                <SiUpwork
                  size={28}
                  color={brandColors.upwork}
                  className="hover:scale-110 transition"
                />
              </a>
              <a
                href="https://github.com/larriemoses"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandGithub
                  size={28}
                  color={brandColors.github}
                  className="hover:scale-110 transition"
                />
              </a>
              <a
                href="https://x.com/larriemoses"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandX
                  size={28}
                  color={brandColors.twitter}
                  className="hover:scale-110 transition"
                />
              </a>
              <a
                href="https://wa.me/+2348073210004"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp
                  size={28}
                  color={brandColors.whatsapp}
                  className="hover:scale-110 transition"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`mt-16 border-t pt-10 ${borderColor}`}>
          <h3 className="text-2xl font-bold mb-6 font-serif">
            Contact the Author
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg bg-transparent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg bg-transparent"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg bg-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Comments Section */}
        <div className={`mt-16 border-t pt-10 ${borderColor}`}>
          <h3 className="text-2xl font-bold mb-6 font-serif">Comments</h3>
          <form className="mb-6">
            <textarea
              rows={3}
              placeholder="Write a comment..."
              className="w-full p-3 border rounded-lg bg-transparent"
            />
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Post Comment
            </button>
          </form>
          {/* Example static comment */}
          <div className="space-y-6">
            {blog.comments.length === 0 ? (
              <p className={secondaryText}>No comments yet. Be the first!</p>
            ) : (
              blog.comments.map((c, i) => (
                <div key={i} className={`p-4 rounded-lg border ${borderColor}`}>
                  <p className="font-semibold">{c.user || "Anonymous"}</p>
                  <p className={secondaryText}>{c.text}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Related Blogs */}
        <div className={`mt-16 border-t pt-10 ${borderColor}`}>
          <h3 className="text-2xl font-bold mb-6 font-serif">Other Articles</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {otherBlogs.map((b) => (
              <Link
                key={b._id}
                to={`/blogs/${b.slug}`}
                className="p-5 rounded-lg border shadow-sm hover:shadow-md transition flex flex-col"
              >
                {b.image && (
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                )}
                <h4 className="text-lg font-bold mb-2">{b.title}</h4>
                <p className={`text-sm ${secondaryText}`}>
                  {(typeof b.content === "string" ? b.content : "").substring(
                    0,
                    100
                  )}
                  ...
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="inline-block px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewPage;
