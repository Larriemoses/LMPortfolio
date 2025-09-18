// src/pages/BlogPreviewPage.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import { motion } from "framer-motion";
import { FaUser, FaEye, FaWhatsapp } from "react-icons/fa";
import { TbBrandLinkedin, TbBrandGithub, TbBrandX } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

interface Blog {
  _id: string;
  title: string;
  content: string; // ✅ HTML from TipTap
  author: string;
  category: string;
  image?: string;
  views: number;
  likes: string[];
  comments: { author: string; text: string }[];
  slug: string;
}

const brandColors = {
  linkedin: "#0A66C2",
  upwork: "#14a800",
  github: "#333",
  twitter: "#000000",
  whatsapp: "#25D366",
};

const BlogPreviewPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [otherBlogs, setOtherBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Comments
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await api.get(`/blogs/${slug}`);
        setBlog(data);

        const res = await api.get("/blogs");
        setOtherBlogs(res.data.filter((b: Blog) => b.slug !== slug));
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    try {
      await api.post(`/blogs/${slug}/comments`, {
        author: commentName || "Anonymous",
        text: commentText,
      });

      // refresh comments
      const { data } = await api.get(`/blogs/${slug}`);
      setBlog(data);

      setCommentName("");
      setCommentText("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white text-gray-800">
        <p>Loading blog...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white text-gray-800">
        <p>Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Blog Content */}
        <div className="lg:col-span-8">
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full max-h-[400px] object-cover rounded-lg shadow mb-8"
            />
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif">
            {blog.title}
          </h1>

          <div className="flex items-center space-x-6 text-sm mb-10 text-gray-500">
            <span className="flex items-center">
              <FaUser className="mr-2" /> {blog.author}
            </span>
            <span className="flex items-center">
              <FaEye className="mr-2" /> {blog.views} Views
            </span>
          </div>

          {/* Blog Body (TipTap HTML rendered) */}
          <article
            className="prose prose-lg lg:prose-xl max-w-none font-serif text-gray-900 
            prose-headings:font-serif prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
            prose-p:leading-relaxed prose-p:my-6 prose-img:rounded-lg prose-img:my-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Author Section */}
          <div className="border-t pt-8 mt-12 border-gray-300 flex flex-col items-center text-center">
            <img
              src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755525952/1749898239122_v2xyue.jpg"
              alt="Olarewaju Adebulu"
              className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Olarewaju Adebulu</h3>
            <p className="mb-4 max-w-2xl text-gray-600">
              I’m a{" "}
              <span className="font-semibold">
                B2B SaaS & Fintech Content Strategist, Technical Writer, and SEO
                Growth Partner
              </span>
              . I help startups build authority and scale through technical SEO,
              content marketing, and conversion-focused storytelling.
            </p>

            {/* Contact Icons */}
            <motion.div
              className="flex space-x-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
            >
              <a
                href="https://www.linkedin.com/in/olarewajuadebulu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandLinkedin
                  className="text-2xl sm:text-3xl"
                  color={brandColors.linkedin}
                />
              </a>
              <a
                href="https://upwork.com/freelancers/~01ffd7d6d27c5a9d20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiUpwork
                  className="text-2xl sm:text-3xl"
                  color={brandColors.upwork}
                />
              </a>
              <a
                href="https://github.com/larriemoses"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithub
                  className="text-2xl sm:text-3xl"
                  color={brandColors.github}
                />
              </a>
              <a
                href="https://x.com/larriemoses"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandX
                  className="text-2xl sm:text-3xl"
                  color={brandColors.twitter}
                />
              </a>
              <a
                href="https://wa.me/+2348073210004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  className="text-2xl sm:text-3xl"
                  color={brandColors.whatsapp}
                />
              </a>
            </motion.div>
          </div>

          {/* Comments Section */}
          <div className="mt-16 border-t pt-10 border-gray-300">
            <h3 className="text-2xl font-bold mb-6">Comments</h3>
            <form className="space-y-4 mb-8" onSubmit={handleCommentSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                className="w-full p-3 border rounded bg-white"
              />
              <textarea
                placeholder="Write a comment..."
                rows={4}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full p-3 border rounded bg-white"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Post Comment
              </button>
            </form>

            <div className="space-y-6">
              {blog.comments.length === 0 ? (
                <p className="text-gray-500">No comments yet. Be the first!</p>
              ) : (
                blog.comments.map((c, i) => (
                  <div key={i} className="border-b pb-4">
                    <p className="font-semibold">{c.author || "Anonymous"}</p>
                    <p className="text-gray-700">{c.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-20 self-start">
          <Link
            to="/blogs"
            className="block px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 text-center"
          >
            ← Back to Blogs
          </Link>

          <div>
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <div className="space-y-4">
              {otherBlogs.slice(0, 5).map((b) => (
                <Link
                  key={b._id}
                  to={`/blogs/${b.slug}`}
                  className="block p-4 border rounded-lg hover:shadow-md transition"
                >
                  <h4 className="font-semibold">{b.title}</h4>
                  <p className="text-sm text-gray-600">
                    {b.content.replace(/<[^>]+>/g, "").substring(0, 90)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Form (Formspree) */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact the Author</h3>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 border rounded bg-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded bg-white"
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Your Message"
                className="w-full p-2 border rounded bg-white"
              />
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Send
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPreviewPage;
