import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["mailgun.js", "form-data"], // Ensure these dependencies are pre-bundled
  },
  resolve: {
    dedupe: ["mailgun.js", "form-data"], // Prevent duplicate instances of these dependencies
  },
});
