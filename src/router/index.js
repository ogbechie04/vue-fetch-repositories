import { createRouter, createWebHistory } from 'vue-router'
// import HomeHeader from '../components/HomeHeader.vue'
import RepoHome from '@/components/RepoHome.vue'
import RepoDetails from '@/components/RepoDetails.vue'
import Error404 from '@/components/Error404Page.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RepoHome
    },
    {
      path: '/repoDetails/:id',
      component: RepoDetails,
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
