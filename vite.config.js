import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel serves from the domain root; GitHub Pages serves under /Portfolio/
  base: process.env.VERCEL ? '/' : '/Portfolio/',
})
