import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Gebruik base: "/SITESPRINT/" alleen als je site draait op username.github.io/SITESPRINT/ zonder custom domain.
// Met custom domain (zie public/CNAME) hoort base "/".
export default defineConfig({
  plugins: [react()],
  base: "/"
});
