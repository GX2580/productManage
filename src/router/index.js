import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 一级路由
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/',
      name: 'admin',
      component: () => import('../views/admin/HomeView.vue'),
      children: [
        // 二级路由
        {
          path: 'AddingGoods',
          name: 'AddingGoods',
          component: () => import('../views/admin/AddingGoodsView.vue'),
        },
        {
          path: '/modify-product/:id',
          name: 'ModifyProduct',
          component: () => import('../views/admin/ModifyProductView.vue'),
        },
        {
          path: 'ProductManage',
          name: 'ProductManage',
          component: () => import('../views/admin/ProductManageView.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('isLogin')
  // console.log(isLogin)

  if (isLogin) {
    next()
  } else {
    if (to.path !== '/login') {
      alert('login first please')
      next('/login')
    } else {
      next()
    }
  }
})
export default router
