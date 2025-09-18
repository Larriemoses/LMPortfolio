import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills({
      protocolImports: true,
    }),
  ],
  build: {
    outDir: "dist", // Vercel expects this
    chunkSizeWarningLimit: 1000, // avoid warnings for big libs
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
          icons: ["react-icons", "lucide-react"],
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://lmportfolio.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
