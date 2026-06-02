import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dbUxPlugin from "@db-ux/core-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dbUxPlugin(), tailwindcss(), react()],
  build: {
    cssMinify: "esbuild"
  }
});
