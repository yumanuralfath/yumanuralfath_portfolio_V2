// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://yumana.my.id",
  compressHTML: true,
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["id", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@tailwindcss/vite"],
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
});
