import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { glob } from "glob";
import { resolve, relative, extname } from "path";
import { fileURLToPath } from "node:url";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ["lib"],
      exclude: ["src", "**/*.stories.tsx"],
      // insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
      // name: "UiKitLibrary",
      fileName: "ui-kit-library",
    },
    rollupOptions: {
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync("lib/**/*.{ts,tsx}").map((file) => [
          // 1. The name of the entry point
          // lib/nested/foo.js becomes nested/foo
          relative("lib", file.slice(0, file.length - extname(file).length)),
          // 2. The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
      external: ["react", "react/jsx-runtime"],
    },
    copyPublicDir: false,
  },
});
