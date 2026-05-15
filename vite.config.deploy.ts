import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// vite.config.deploy.ts
// This config is specifically for building the demo from the 'src/playground' directory.
export default defineConfig({
  plugins: [vue()],
  // Set the base path for GitHub Pages.
  // Replace 'imageviewer' with your repository name if it's different.
  base: '/imageviewer/',
  // Set the root to the playground directory.
  root: resolve(__dirname, 'src/playground'),
  build: {
    // Output the build files to a 'dist-demo' directory to avoid conflicts.
    outDir: resolve(__dirname, 'dist-demo'),
    // Empty the output directory before building.
    emptyOutDir: true,
    rollupOptions: {
        // Make sure to bundle everything needed for the demo.
        input: resolve(__dirname, 'src/playground/index.html'),
    },
  },
});
