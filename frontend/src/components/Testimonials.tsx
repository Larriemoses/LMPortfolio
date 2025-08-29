// src/components/Testimonials.tsx
import React from "react";
import { motion } from "framer-motion";
import { palette } from "../data/data";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Anonymous Client",
    role: "Virtual Assistant Project",
    feedback: "Moses is experienced, I highly recommend him.",
    rating: 5,
  },
  {
    name: "Anonymous Client",
    role: "Article Editor (Technical Writing)",
    feedback: "Good Job Moses.",
    rating: 4.5,
  },
  {
    name: "GGC Consults",
    role: "Logo Design Project",
    feedback:
      "Moses Adebulu has fully satisfied me and offered me the best of service.",
    rating: 5,
  },
  {
    name: "Olalekan A.",
    role: "Music & Product Promotion",
    feedback:
      "Moses is a professional when it comes to content writing. His contents are top-notch, easy to read through, and working with him has given my business the publicity it needed.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="w-full min-h-[60vh] flex items-center justify-center px-6 md:px-12 py-20"
      style={{ backgroundColor: palette.primaryBg }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: palette.text }}
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          What Clients Say
        </motion.h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
              style={{ backgroundColor: palette.secondaryBg }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 20px ${palette.accent1}`,
              }}
            >
              {/* Feedback */}
              <p className="italic mb-4" style={{ color: palette.subtle }}>
                "{t.feedback}"
              </p>

              {/* Name + Role */}
              <h3
                className="text-lg font-semibold"
                style={{ color: palette.accent2 }}
              >
                {t.name}
              </h3>
              <span className="text-sm mb-3" style={{ color: palette.subtle }}>
                {t.role}
              </span>

              {/* Rating */}
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    color={
                      starIndex < Math.round(t.rating)
                        ? "#FFD700"
                        : palette.subtle
                    }
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
