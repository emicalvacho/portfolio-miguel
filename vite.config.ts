import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // La ruta base se configura dinámicamente según el comando
  // En desarrollo (serve): '/' (raíz) - para desarrollo local
  // En producción (build): '/portfolio-miguel/' - para GitHub Pages
  base: command === 'build' ? '/portfolio-miguel/' : '/',
}))

