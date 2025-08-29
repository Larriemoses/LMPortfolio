// src/components/Contact.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { palette } from "../data/data";
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔹 Later: send this data to your backend API
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full min-h-[80vh] flex items-center justify-center px-6 md:px-12 py-20"
      style={{ backgroundColor: palette.primaryBg }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Contact Form */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: palette.text }}
          >
            Get In Touch
          </h2>
          <p style={{ color: palette.subtle }}>
            I’d love to hear about your project. Fill out the form and I’ll get
            back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg"
              style={{
                backgroundColor: palette.secondaryBg,
                color: palette.text,
              }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg"
              style={{
                backgroundColor: palette.secondaryBg,
                color: palette.text,
              }}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 rounded-lg"
              style={{
                backgroundColor: palette.secondaryBg,
                color: palette.text,
              }}
              required
            />
            <motion.button
              type="submit"
              className="px-6 py-3 rounded-full font-semibold"
              style={{
                background: `linear-gradient(45deg, ${palette.accent1}, ${palette.accent2})`,
                color: palette.text,
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 20px ${palette.accent1}`,
              }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Quick Links */}
        <motion.div
          className="flex flex-col items-center lg:items-start space-y-6 justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold" style={{ color: palette.text }}>
            Or connect with me directly:
          </h3>
          <div className="flex flex-wrap gap-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/olarewaju-adebulu-320184212/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin color="#0A66C2" />
            </a>
            <a
              href="https://github.com/larriemoses"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color="#EAEAEA" />
            </a>
            <a
              href="https://larriemoses.medium.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaMedium color="#000" />
            </a>
            <a
              href="https://wa.me/2348073210004"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp color="#25D366" />
            </a>
            <a href="mailto:larriemoses@gmail.com">
              <FaEnvelope color="#EA4335" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01ffd7d6d27c5a9d20"
              target="_blank"
              rel="noreferrer"
            >
              <SiUpwork color="#6fda44" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
