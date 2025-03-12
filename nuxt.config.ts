import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-11-01",
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  routeRules: {
    "/": { prerender: true },
    // "/catalog": { swr: true },
    // "/catalog/**": { swr: 3600 },
    // "/products/**": { swr: 3600 },
  },
  googleFonts: {
    display: "swap",
    families: {
      Roboto: [400, 500, 600, 700],
      Inter: [300, 400, 500, 600, 700, 800, 900],
      "Golos Text": [400, 500, 600, 700, 800, 900],
    },
  },
  $development: {
    nitro: {
      storage: {
        catalog: {
          driver: "fs",
          base: "catalogs",
        },
      },
    },
  },
});
