import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
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
      external: ["react", "react/jsx-runtime"],
    },
    copyPublicDir: false,
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
});
