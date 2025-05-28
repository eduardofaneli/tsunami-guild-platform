import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isVercelBuild = process.env.VITE_DEPLOY_PLATFORM === 'vercel'


  console.log(`[vite.config.ts] Iniciando configuração.`);
  console.log(`[vite.config.ts] process.env.NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`[vite.config.ts] process.env.VITE_DEPLOY_PLATFORM: ${process.env.VITE_DEPLOY_PLATFORM}`);
  console.log(`[vite.config.ts] Vite mode: ${mode}`);
  console.log(`[vite.config.ts] isVercelBuild: ${isVercelBuild}`);

  let basePath = '/'; // Default para desenvolvimento local

  if (isVercelBuild) {
    basePath = '/'; // Vercel sempre usa a raiz

    console.log(`[vite.config.ts] Configuração para Vercel: basePath = ${basePath}`);

  } else if (mode === 'production') {
    // Para outros builds de produção (ex: GitHub Pages)
    basePath = '/tsunami-guild-platform/';

    console.log(`[vite.config.ts] Configuração de produção: basePath = ${basePath}`);
  }


  console.log(`[vite.config.ts] Configuração final: basePath = ${basePath}`);

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
