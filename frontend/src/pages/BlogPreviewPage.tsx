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

interface Blog {
  _id: string;
  title: string;
  content: string; // Markdown
  author: string;
  category: string;
  image?: string;
  views: number;
  likes: string[];
  comments: any[];
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
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await api.get(`/blogs/${slug}`);
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  const primaryBg = theme === "dark" ? "bg-gray-900" : "bg-white";
  const primaryText = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const secondaryText = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";
  const fontClass = "font-serif";

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
    <div className={`${primaryBg} ${primaryText} min-h-screen p-6 md:p-12`}>
      <div className="max-w-4xl mx-auto">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
          />
        )}

        <h1 className={`text-4xl font-bold mb-4 ${fontClass}`}>{blog.title}</h1>

        <div className="flex items-center space-x-6 text-sm mb-6">
          <span className={`flex items-center ${secondaryText}`}>
            <FaUser className="mr-2" /> {blog.author}
          </span>
          <span className={`flex items-center ${secondaryText}`}>
            <FaEye className="mr-2" /> {blog.views} Views
          </span>
        </div>

        {/* Blog Content */}
        <article
          className={`prose prose-lg max-w-none mb-12 ${
            theme === "dark"
              ? "prose-invert prose-headings:text-gray-100 prose-p:text-gray-300 prose-a:text-blue-400"
              : "prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600"
          }`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </article>

        {/* Author Section */}
        <div
          className={`border-t pt-8 mt-12 ${borderColor} flex flex-col items-center text-center`}
        >
          <img
            src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755525952/1749898239122_v2xyue.jpg"
            alt="Olarewaju Adebulu"
            className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg"
          />
          <h3 className="text-xl font-semibold mb-2">Olarewaju Adebulu</h3>
          <p className={`mb-4 max-w-2xl ${secondaryText}`}>
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
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform duration-300"
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
              aria-label="Upwork"
              className="hover:scale-110 transition-transform duration-300"
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
              aria-label="GitHub"
              className="hover:scale-110 transition-transform duration-300"
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
              aria-label="Twitter (X)"
              className="hover:scale-110 transition-transform duration-300"
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
              aria-label="WhatsApp"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaWhatsapp
                className="text-2xl sm:text-3xl"
                color={brandColors.whatsapp}
              />
            </a>
          </motion.div>
        </div>

        {/* Back to blogs */}
        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewPage;
