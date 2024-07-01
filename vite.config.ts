import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './src/environment',
  plugins: [
    vue(),
    vueJsx({
      babelPlugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  }
})
