import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  const base = isProduction ? '/tsunami-guild-platform/' : '/'
  
  return {
    plugins: [react()],
    base,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            animations: ['framer-motion'],
            forms: ['react-hook-form'],
            icons: ['lucide-react']
          }
        }
      }
    }
  }
})
