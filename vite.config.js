import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Use relative asset paths so the built site works when hosted under
  // GitHub Pages repository paths (or any subpath).
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})