import React from "react";
import { motion } from "framer-motion";
import { TbTrophy, TbUsers, TbBulb } from "react-icons/tb";
import { palette } from "../data/data";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white flex items-center justify-center"
      style={{ backgroundColor: palette.background }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        {/* Left side: Image and text */}
        <motion.div
          className="w-full md:w-1/2 mb-12 md:mb-0 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755525952/1749898239122_v2xyue.jpg"
            alt="Olarewaju Adebulu"
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover mx-auto mb-6 shadow-2xl"
            style={{ borderColor: palette.primaryAccent }}
          />
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: palette.textPrimary }}
          >
            About Me
          </h2>
          <p
            className="text-lg md:text-xl font-light leading-relaxed"
            style={{ color: palette.textSecondary }}
          >
            I am a professional who helps brands achieve sustainable,
            compounding growth by blending technical expertise with creative
            strategy and modern technology.
          </p>
        </motion.div>

        {/* Right side: Metrics */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="flex flex-col items-center justify-center p-6 rounded-lg shadow-xl cursor-pointer"
              style={{
                backgroundColor: "#212529",
                border: "1px solid #4a5568",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <TbTrophy size={40} color={palette.primaryAccent} />
              <p className="text-3xl font-bold mt-2">50+</p>
              <p className="text-sm font-light">Projects Completed</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center justify-center p-6 rounded-lg shadow-xl cursor-pointer"
              style={{
                backgroundColor: "#212529",
                border: "1px solid #4a5568",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TbUsers size={40} color={palette.primaryAccent} />
              <p className="text-3xl font-bold mt-2">20+</p>
              <p className="text-sm font-light">Happy Clients</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center justify-center p-6 rounded-lg shadow-xl cursor-pointer"
              style={{
                backgroundColor: "#212529",
                border: "1px solid #4a5568",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TbBulb size={40} color={palette.primaryAccent} />
              <p className="text-3xl font-bold mt-2">4+</p>
              <p className="text-sm font-light">Years of Experience</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
