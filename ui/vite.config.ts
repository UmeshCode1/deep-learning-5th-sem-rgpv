import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/deep-learning-5th-sem-rgpv/' : '/',
  plugins: [react()],
  server: {
    port: 5173
  }
}))
