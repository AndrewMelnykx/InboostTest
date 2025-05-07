import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/InboostTest/",
  build: { outDir: path.resolve(__dirname, "dist") },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  resolve: {
    alias: {
      "@variables": path.resolve(__dirname, "src/helpers/_variables.scss"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@store": path.resolve(__dirname, "src/store"),
      "@slices": path.resolve(__dirname, "src/components/redux/slices"),
      "@selectors": path.resolve(__dirname, "src/components/redux/selectors"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@header": path.resolve(__dirname, "src/components/header"),
      "@main-page": path.resolve(__dirname, "src/components/main-page"),
      "@components": path.resolve(__dirname, "src/components"),
      "@tasks-list": path.resolve(__dirname, "src/components/node-list"),
    },
  },
});
