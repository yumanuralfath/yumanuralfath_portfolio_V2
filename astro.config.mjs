// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://yumana.my.id",
  adapter: cloudflare({
    sessionKVBindingName: undefined,
  }),
  compressHTML: true,
  i18n: {
    defaultLocale: "id",
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
