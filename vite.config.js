import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild', // fastest minifier
    sourcemap: false,   // don’t generate sourcemaps for production
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: undefined // avoid splitting too many small chunks
      }
    }
  }
});
