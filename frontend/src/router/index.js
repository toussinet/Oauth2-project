import { createRouter, createWebHistory } from 'vue-router'
import { authStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
     {
      path: '/',
      name: 'Dashbord',
      component: () => import('../views/DashboardView.vue'),
      meta: {requiresAuth: true}
      
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },

  ]
})

router.beforeEach((to, from, next)=>{
  const store = authStore()
  if(to.meta.requiresAuth && !store.user.token){
    next({name: 'Login'})
  }else{
    next()
  }
})

export default router
