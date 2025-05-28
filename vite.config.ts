import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isVercelBuild = process.env.VERCEL_ENV === 'production' ||
    process.env.VERCEL_ENV === 'preview' ||
    process.env.VERCEL_ENV === 'development'; // Para Vercel CLI local

  let basePath = '/'; // Default para desenvolvimento local

  if (isVercelBuild) {
    basePath = '/'; // Vercel sempre usa a raiz
  } else if (mode === 'production') {
    // Para outros builds de produção (ex: GitHub Pages)
    basePath = '/tsunami-guild-platform/';
  }

  return {
    plugins: [react()],
    base: basePath,
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
    },
    // Lidar com a navegação SPA é feito através do Vite Plugin ao invés de configuração server e preview
  }
})
