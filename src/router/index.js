import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '组件页面',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '/button',
        name: 'Button 按钮',
        component: () => import('/packages/button/doc/doc.md')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;