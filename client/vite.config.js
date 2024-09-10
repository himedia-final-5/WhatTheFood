import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  base: "/",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8070",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  preview: {
    port: 3000,
  },
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@layouts": "/src/layouts",
      "@pages": "/src/pages",
      "@stores": "/src/stores",
      "@styles": "/src/styles",
      "@types": "/src/types",
      "@utils": "/src/utils",
    },
  },
});
