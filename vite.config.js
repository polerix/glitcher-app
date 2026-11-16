import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import pkg from './package.json'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  base: '/glitcher-app/',
  build: {
    outDir: 'dist',
    target: 'esnext',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        app: resolve(__dirname, 'app.html'),
      },
    },
  },
  define: {
    'import.meta.env.VERSION': JSON.stringify(pkg.version)
  }
}) 