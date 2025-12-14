import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

function cdnPrefixImages(prefix: string): Plugin {
  const normalized = prefix.replace(/\/$/, "");
  return {
    name: "cdn-prefix-images",
    enforce: "post",
    transform(code: string, id: string) {
      if (!/\.(html|ts|tsx|js|jsx|css)$/.test(id)) return;
      const replaced = code.replace(/([\"'`(])\/images\//g, `$1${normalized}/images/`);
      if (replaced !== code) {
        return { code: replaced, map: null };
      }
      return null;
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ...(process.env.CDN_IMG_PREFIX ? [cdnPrefixImages(process.env.CDN_IMG_PREFIX)] : []),
  ],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
