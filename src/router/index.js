import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import Projects from '../views/Projects.vue'
import { projects } from '../data/projects'
import { localizeProject, translate } from '../composables/useI18n'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/project/:id', component: ProjectDetails }
]

const SITE_URL = 'https://www.oussamasassour.com'

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 88,
        behavior: 'smooth'
      }
    }

    return { top: 0 }
  }
})

function upsertMeta(attribute, key, content) {
  if (typeof document === 'undefined') {
    return
  }

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertCanonical(href) {
  if (typeof document === 'undefined') {
    return
  }

  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

export function applyRouteMeta(to) {
  const project = to.params.id
    ? localizeProject(projects.find(item => String(item.id) === String(to.params.id)))
    : null

  let title = translate('meta.homeTitle')
  let description = translate('meta.homeDescription')

  if (to.path === '/projects') {
    title = translate('meta.projectsTitle')
    description = translate('meta.projectsDescription')
  } else if (to.path.startsWith('/project/')) {
    title = project ? `${project.title} | Oussama Sassour` : translate('meta.projectFallbackTitle')
    description = project?.summary || translate('meta.projectFallbackDescription')
  }

  const path = to.path === '/' ? '/' : to.path
  const url = `${SITE_URL}${path}`

  document.title = title
  upsertMeta('name', 'description', description)
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:url', url)
  upsertMeta('property', 'og:locale', translate('meta.locale'))
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)
  upsertCanonical(url)
}

router.afterEach((to) => {
  applyRouteMeta(to)
})

if (typeof window !== 'undefined') {
  window.addEventListener('portfolio-locale', () => {
    applyRouteMeta(router.currentRoute.value)
  })
}
