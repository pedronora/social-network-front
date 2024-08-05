import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', redirect: { name: 'Posts' } },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../pages/posts/listPost.vue')
  },
  {
    path: '/posts/create',
    name: 'CreatePost',
    component: () => import('../pages/posts/createPost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
