import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ...(process.env.BASE_URL ? { base: process.env.BASE_URL } : {}),
  test: {
    environment: "jsdom",
    globals: true,
  },
});
