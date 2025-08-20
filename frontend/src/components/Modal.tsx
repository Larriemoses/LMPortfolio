// src/components/Modal.tsx
import React from "react";
import { motion } from "framer-motion";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onDownloadFullStack: () => void;
  onDownloadSeo: () => void;
}

// Improved color palette for better UI/UX
const palette = {
  bg: "#081729",
  panel: "#102a43",
  accent: "#00a8cc",
  subtle: "#b7c5d3",
  text: "#f0f4f8",
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Modal({
  show,
  onClose,
  onDownloadFullStack,
  onDownloadSeo,
}: ModalProps) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(6,12,30,0.8)" }}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.3 }}
        className="rounded-lg p-6 shadow-lg max-w-sm w-full"
        style={{
          background: palette.panel,
          border: `1px solid ${palette.accent}`,
        }}
      >
        <h3
          style={{ color: palette.text }}
          className="text-xl font-semibold text-center mb-4"
        >
          Download Resume
        </h3>
        <p
          style={{ color: palette.subtle }}
          className="text-center text-sm mb-6"
        >
          Please select the version of the resume you would like to download.
        </p>
        <div className="flex flex-col space-y-3">
          <button
            onClick={onDownloadFullStack}
            className="w-full py-2 rounded font-semibold transition-colors"
            style={{ backgroundColor: palette.accent, color: palette.text }}
          >
            Full-Stack Resume
          </button>
          <button
            onClick={onDownloadSeo}
            className="w-full py-2 rounded font-semibold transition-colors"
            style={{ backgroundColor: palette.accent, color: palette.text }}
          >
            SEO Resume
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-300"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}
