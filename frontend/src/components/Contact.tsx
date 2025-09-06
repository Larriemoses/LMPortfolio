import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { palette } from "../data/data";

const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white"
      style={{ backgroundColor: palette.background }}
    >
      <div className="w-11/12 mx-auto max-w-screen-lg text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12"
          style={{ color: palette.textPrimary }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-start text-left">
          {/* Contact Form */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-6 p-6 rounded-lg shadow-xl"
              style={{
                backgroundColor: "#212529",
                border: "1px solid #4a5568",
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: palette.primaryAccent }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: palette.primaryAccent }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: palette.primaryAccent }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 rounded-md font-bold transition-colors duration-300"
                style={{
                  backgroundColor: palette.primaryAccent,
                  color: palette.background,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex-1 w-full md:mt-0 mt-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="p-6 rounded-lg shadow-xl space-y-6"
              style={{
                backgroundColor: "#212529",
                border: "1px solid #4a5568",
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: palette.textPrimary }}
              >
                Connect with me
              </h3>
              <p className="text-gray-300">
                Feel free to connect with me on social media or send me a direct
                message via email.
              </p>
              <div className="flex flex-col space-y-4">
                <motion.a
                  href="https://linkedin.com/in/olarewajuadebulu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-white hover:text-gray-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaLinkedin
                    size={24}
                    style={{ color: palette.primaryAccent }}
                  />
                  <span className="text-lg">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://twitter.com/larrie_moses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-white hover:text-gray-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaTwitter
                    size={24}
                    style={{ color: palette.primaryAccent }}
                  />
                  <span className="text-lg">Twitter</span>
                </motion.a>
                <motion.a
                  href="https://github.com/Larriemoses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-white hover:text-gray-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaGithub
                    size={24}
                    style={{ color: palette.primaryAccent }}
                  />
                  <span className="text-lg">GitHub</span>
                </motion.a>
                <motion.a
                  href="mailto:your-email@example.com"
                  className="flex items-center space-x-4 text-white hover:text-gray-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaEnvelope
                    size={24}
                    style={{ color: palette.primaryAccent }}
                  />
                  <span className="text-lg">Email</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
