import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 解析svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    
    createSvgIconsPlugin({
      // 指定需要缓存的图标
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]'
    })
  
  ],
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
        headers:{
          // 开启长连接解决本地代理请求 > 5000ms 导致超时的问题 
          // ConnectTion:"keep-alive"      
          }
      }
    }
  }
})
