// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";

import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), solidJs(), db()],
  output: "hybrid",
  adapter: netlify(),
});
