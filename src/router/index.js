import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/project/:id', component: ProjectDetails }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
