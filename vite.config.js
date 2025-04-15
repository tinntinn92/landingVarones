// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No se necesita importar Tailwind aquí, ya que se configura con postcss.config.js
export default defineConfig({
  plugins: [react()],
})
