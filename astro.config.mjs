import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://names144.github.io",
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
