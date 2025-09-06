import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(), // ✅ Correctly processes React components
    tailwindcss(), // Correctly handles Tailwind CSS
    nodePolyfills({
      // ✅ Fixes the "process is not defined" error
      // globals: true,
      protocolImports: true,
    }),
  ],
});
