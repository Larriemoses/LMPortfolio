import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { palette } from "../data/data";

const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white flex items-center justify-center"
      style={{ backgroundColor: palette.background }}
    >
      <div className="w-11/12 mx-auto max-w-screen-lg text-center h-full flex flex-col items-center justify-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-8 md:mb-12"
          style={{ color: palette.textPrimary }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-h-full">
          {/* Contact Form */}
          <motion.div
            className="w-full md:w-1/2 flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <form
              action="https://formspree.io/f/xjkejyaw"
              method="POST"
              className="space-y-4 p-6 rounded-lg shadow-xl"
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
                  rows={3}
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
            className="w-full md:w-1/2 flex-shrink-0 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="p-6 rounded-lg shadow-xl space-y-4"
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
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://linkedin.com/in/olarewajuadebulu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaLinkedin
                    size={24}
                    style={{ color: palette.primaryAccent }}
                  />
                </motion.a>
                <motion.a
                  href="https://twitter.com/larrie_moses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaTwitter
                    size={24}
                    style={{ color: palette.primaryAccent }}
                  />
                </motion.a>
                <motion.a
                  href="https://github.com/Larriemoses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaGithub
                    size={24}
                    style={{ color: palette.primaryAccent }}
                  />
                </motion.a>
                <motion.a
                  href="mailto:your-email@example.com"
                  className="text-white hover:text-gray-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaEnvelope
                    size={24}
                    style={{ color: palette.primaryAccent }}
                  />
                </motion.a>
                <motion.a
                  href="https://wa.me/2348012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaWhatsapp
                    size={24}
                    style={{ color: palette.primaryAccent }}
                  />
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
