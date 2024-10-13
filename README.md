## 项目介绍
vue3高仿Pexels网站，适应移动端和PC端

## 技术栈
- Vue3@3.2
- Vue-Router@4
- Vuex@4
- Axios


## 亮点
- 独立开发一套中前台的物料解决方案


## 开发日记


### 2024-10.11
- bug: 把.env.development 和 .env.production 放在了 src目录下导致vite(dotenv)找不到配置文件
- 简单封装 `axios`
- 使用 vite `proxy` 解决开发环境下的跨域问题
---
### 2024-10.10
- bug: 移动端切换到PC时需要刷新,因为`window.innerWidth` 不是响应式数据. 使用vueuse的useWindowSize()获取窗口宽度的响应式数据,  computed才会有意义.
- `flexible.js` 判断移动端和PC端
- 添加移动端和PC端路由
- 添加 `tailwindcss`
- 项目初始化



