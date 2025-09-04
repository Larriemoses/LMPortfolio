// src/components/Contact.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, Globe } from "lucide-react";

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
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-between bg-[#0D0D0D] text-white snap-start px-6 md:px-20 py-16 overflow-hidden"
    >
      {/* === Animated Mesh Background === */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #4F46E5 1px, transparent 1px),
            linear-gradient(#10B981 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "moveBg 30s linear infinite",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative z-10">
        {/* === Left: Text & Quick Links === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400">
            Let’s Work Together
          </h2>
          <p className="text-gray-300 max-w-md">
            Whether you have a project in mind, want to collaborate, or just
            want to say hi — my inbox is always open.
          </p>

          <motion.div
            className="flex flex-col space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="mailto:larriemoses@gmail.com"
              className="flex items-center gap-3 hover:text-emerald-400 transition"
            >
              <Mail size={20} /> larriemoses@gmail.com
            </a>
            <a
              href="tel:+2348073210004"
              className="flex items-center gap-3 hover:text-emerald-400 transition"
            >
              <Phone size={20} /> +234 807 321 0004
            </a>
            <a
              href="https://www.linkedin.com/in/olarewaju-adebulu-320184212/"
              target="_blank"
              className="flex items-center gap-3 hover:text-emerald-400 transition"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://github.com/larriemoses"
              target="_blank"
              className="flex items-center gap-3 hover:text-emerald-400 transition"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="https://larriemoses.medium.com"
              target="_blank"
              className="flex items-center gap-3 hover:text-emerald-400 transition"
            >
              <Globe size={20} /> Medium
            </a>
          </motion.div>
        </motion.div>

        {/* === Right: Contact Form === */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4 bg-[#1A1A1A]/90 p-6 md:p-8 rounded-lg shadow-xl border border-gray-800"
        >
          {["name", "email"].map((field, i) => (
            <motion.input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field as "name" | "email"]}
              onChange={handleChange}
              placeholder={`Your ${field === "name" ? "Name" : "Email"}`}
              required
              className="w-full p-3 rounded-md bg-[#0D0D0D] text-white border border-gray-700 focus:border-emerald-400 outline-none transition"
              whileFocus={{ scale: 1.02, boxShadow: "0 0 12px #10B981" }}
            />
          ))}

          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-[#0D0D0D] text-white border border-gray-700 focus:border-emerald-400 outline-none transition"
            whileFocus={{ scale: 1.01, boxShadow: "0 0 12px #10B981" }}
          />

          <motion.button
            type="submit"
            className="w-full py-3 rounded-md font-semibold bg-gradient-to-r from-emerald-500 to-indigo-600 shadow-lg"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 18px rgba(16,185,129,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* === Footer === */}
      <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ color: "#10B981", scale: 1.05 }}
        >
          © {new Date().getFullYear()} Olarewaju Adebulu
        </motion.p>
      </footer>
    </section>
  );
};

export default Contact;
