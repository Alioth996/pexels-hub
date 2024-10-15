export default [{
  path: '/',
  name: 'main',
  component: () => import('@/views/layout/index.vue'),
  children: [{
    // main二级路由
    path: '',
    name: 'home',
    component: () => import('@/views/main/index.vue'),
  }]
}]