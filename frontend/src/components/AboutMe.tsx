// src/components/AboutMe.tsx
import React from "react";
import { motion } from "framer-motion";
import { palette } from "../data/data";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-12 py-20"
      style={{ backgroundColor: palette.secondaryBg }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile Image */}
        <motion.img
          src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755525952/1749898239122_v2xyue.jpg"
          alt="Olarewaju Adebulu"
          className="w-72 h-72 md:w-96 md:h-96 rounded-xl object-cover shadow-lg mx-auto"
          whileHover={{ scale: 1.05 }}
        />

        {/* Right: About Content */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: palette.text }}
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed"
            style={{ color: palette.subtle }}
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I’m{" "}
            <span style={{ color: palette.accent2 }}>Olarewaju Adebulu</span>,
            an <strong>SEO Content Strategist</strong> and{" "}
            <strong>Technical SEO Specialist</strong> with a passion for helping
            B2B, SaaS, and Fintech brands scale their online visibility. With a
            mix of{" "}
            <span style={{ color: palette.accent1 }}>data-driven SEO</span>
            and{" "}
            <span style={{ color: palette.accent2 }}>content strategies</span>,
            I create sustainable growth that attracts and converts the right
            audience.
          </motion.p>

          <motion.p
            className="text-md leading-relaxed"
            style={{ color: palette.subtle }}
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I specialize in:
            <br />✓ Keyword Research & Topic Clusters
            <br />✓ Technical SEO Audits & Core Web Vitals
            <br />✓ On-page SEO & Internal Linking
            <br />✓ Long-form Content that Ranks
            <br />✓ Scalable SEO Content Pipelines
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 rounded-full font-semibold"
            style={{
              background: `linear-gradient(45deg, ${palette.accent1}, ${palette.accent2})`,
              color: palette.text,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 20px ${palette.accent1}`,
            }}
          >
            Let’s Work Together
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
