import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/birds/', // GitHub Pages base URL
  server: {
    proxy: {
      '/api': {
        target: 'https://aves.ninjas.cl',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    minify: 'esbuild', // Usa esbuild en lugar de terser (más rápido y sin dependencias)
  }
})
