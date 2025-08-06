import { sveltekit } from "@sveltejs/kit/vite";

import tailwindcss from "@tailwindcss/vite";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  ssr: {
    noExternal: ["@polar-sh/sdk", "@polar-sh/better-auth"]
  },
  optimizeDeps: {
    exclude: ["@polar-sh/sdk/webhooks.ts"]
  }
});
