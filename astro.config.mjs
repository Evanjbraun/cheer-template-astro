import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import lottie from "astro-integration-lottie";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://astro.build/config
export default defineConfig({
  site: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://devcheer.com",
  integrations: [mdx(), sitemap(), lottie(), tailwind()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
    runtime: {
      mode: "nodejs",
      nodeVersion: "18.x"
    },
    imageService: true,
    assets: {
      includeFiles: ['src/assets/**/*', 'public/**/*', 'public/cheerlottie/**/*.json']
    }
  }),
  vite: {
    plugins: [tsconfigPaths()],
    build: {
      assetsInlineLimit: 0
    },
    publicDir: 'public'
  },
  favicon: {
    rel: 'icon',
    type: 'image/png',
    href: '/favicon.png'
  }
});