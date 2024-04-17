import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-P_2_-chatMenu/",
  plugins: [react()],
  server: { port: 3000 },
});
