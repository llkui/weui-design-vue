import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/weui-design-vue-next/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      '~': resolve(__dirname, "packages")
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8991,
  }
})
