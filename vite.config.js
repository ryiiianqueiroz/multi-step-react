// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/multi-step-react',
  }

  if (command !== 'serve') {
    config.base = '/multi-step-react/'
  }

  return config
})