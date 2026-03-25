import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures all built assets resolve relatively
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
  }
});
