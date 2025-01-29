import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/documents": "http://localhost:5000/",
      "/documents": "http://localhost:5173/",
    },
  },
  plugins: [react()],
});