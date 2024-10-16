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

### 2024-10.16
- 完成移动端和PC端明暗主题切换
- 完成主题跟随系统功能
  + 使用 `window.matchMedia` 特性监听系统主题变化, `watch`实现主题变化


### 2024-10.15

- 完成移动端和PC端的顶部导航栏
- 封装通用组件: popup,cate-menu,popover,header-theme,button,search
- 抽离业务组件: navigation
 1. 数据公有(vuex),视图私有(组件)
 2. pc和移动端使用的 **categorys** 数据是一样的, 可以封装成 **vuex** 方式进行管理

---

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

---


### BUG:
- ~~pc端分类菜单视图更新闪烁~~
  1. 原因: 本地数据只有一个ALL选项, 请求的分类数据有多个, 本地数据与请求的数据之间存在渲染间隔, 导致视图闪烁
  2. 解决: 使用 `LOCAL_CATEGORYS` 数据, 在请求的分类数据之前先渲染本地数据, 等请求的分类数据回来之后再替换掉本地数据
- 移动端在popup菜单中点击靠后的分类选项后顶部的导航栏没有滑动到对应的位置
- ~~修复明暗主题切换时 `Header`组件变化不同步的问题~~
---
