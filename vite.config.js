import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    // 前端代理解决开发环境下的跨域问题
    proxy: {
      '/api': {
        // 代理地址
        target: 'https://api.imooc-front.lgdsunday.club/',
        changeOrigin: true,
        // api路径重写
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
