import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@Assets': path.resolve(__dirname, './src/assets')
    }
  },
  plugins: [vue()]
})
