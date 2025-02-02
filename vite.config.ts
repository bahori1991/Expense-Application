import path from "node:path";
import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import serverAdapter from "hono-react-router-adapter/vite";
import { getLoadContext } from "load-context";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    serverAdapter({
      entry: "server/index.ts",
      getLoadContext,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
      "@server": path.resolve(__dirname, "./server"),
    },
  },
});
