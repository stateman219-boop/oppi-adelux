import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/oppi-adelux/',
  server: {
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        oppi: resolve(__dirname, 'oppi.html')
      }
    }
  }
});
