import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@mains': './assets/css/index.css',
      '@globals': './assets/css/global.css',
      '@icons': '../../assets/icons',
      '@root': './App.jsx',
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': './pages',
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@config': path.resolve(__dirname, 'src/config'),
    },
  },
  plugins: [react()],
  server: {
    port: 5005,
    proxy: {
      '/api': {
        target: 'http://localhost:5005',
        changeOrigin: true,
      },
    },
  },
})
