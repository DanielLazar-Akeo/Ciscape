import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ciscape/',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@Assets': path.resolve(__dirname, './src/assets'),
      '@Src': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue()]
})
