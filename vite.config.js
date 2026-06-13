import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   build: {
      rollupOptions: {
         output: {
            manualChunks(id) {
               if (id.includes("node_modules")) {
                  if (id.includes("three")) return "three";
                  if (id.includes("@react-three/rapier") || id.includes("@dimforge"))
                     return "rapier";
                  if (id.includes("@react-three")) return "fiber";
                  if (id.includes("meshline")) return "meshline";
               }
            },
         },
      },
   },
});
