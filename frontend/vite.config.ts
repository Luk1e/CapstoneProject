import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/CapstoneProject/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://capstoneproject-7f9w.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
