import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

import path from "path";

export default defineConfig({
  plugins: [sveltekit()],
//   resolve: {
//     alias: {
//       bun: path.resolve(__dirname, "node_modules/bun"),
//     },
//   },
});
