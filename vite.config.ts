import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "UiKitLibrary",
      fileName: "ui-kit-library",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
  plugins: [react()],
});
