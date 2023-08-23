import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CareersView from '@/views/CareersView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/careers',
      name: 'careers',
      component: CareersView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ]
})

export default router