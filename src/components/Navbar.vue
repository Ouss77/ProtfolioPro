<script setup>
import { inject, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from '../composables/useI18n'
import { scrollToSection } from '../utils/scrollToSection'

const isOpen = ref(false)
const activeSection = ref('accueil')
const themeApi = inject('theme', null)
const { t, locale, setLocale } = useI18n()

const navItems = [
  { id: 'accueil', label: 'nav.home' },
  { id: 'about', label: 'nav.about' },
  { id: 'projets', label: 'nav.projects' },
  { id: 'competences', label: 'nav.skills' },
  { id: 'services', label: 'nav.services' },
  { id: 'experiences', label: 'nav.experience' },
  { id: 'education', label: 'nav.education' },
  { id: 'contact', label: 'nav.contact' }
]

const setActiveSection = (id) => {
  if (navItems.some(item => item.id === id)) {
    activeSection.value = id
  }
}

const updateActiveFromScroll = () => {
  const sections = navItems
    .map(item => document.getElementById(item.id))
    .filter(Boolean)

  if (!sections.length) {
    return
  }

  const offset = window.scrollY + 96
  let currentId = sections[0].id

  sections.forEach((section) => {
    if (section.offsetTop <= offset) {
      currentId = section.id
    }
  })

  setActiveSection(currentId)
}

const closeMobileMenu = () => {
  isOpen.value = false
}

const handleNavClick = (event, id) => {
  scrollToSection(id, event)
  setActiveSection(id)
  closeMobileMenu()
}

const onKeydown = (event) => {
  if (event.key === 'Escape') {
    closeMobileMenu()
  }
}

onMounted(() => {
  const id = window.location.hash.replace('#', '')
  if (id) {
    setActiveSection(id)
  }
  updateActiveFromScroll()
  window.addEventListener('scroll', updateActiveFromScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveFromScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="site-header fixed top-0 z-50 w-full">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-emerald-400 focus:px-3 focus:py-2 focus:text-black"
      @click="handleNavClick($event, 'main')"
    >
      {{ t('nav.skip') }}
    </a>

    <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 md:h-20" aria-label="Primary">
      <a href="#accueil" class="brand-link truncate text-sm font-semibold sm:text-base" @click="handleNavClick($event, 'accueil')">
        Oussama Sassour
      </a>

      <ul class="hidden items-center gap-4 text-sm font-medium xl:flex">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="nav-link inline-flex min-h-11 items-center"
            :class="activeSection === item.id ? 'is-active' : ''"
            :aria-current="activeSection === item.id ? 'true' : undefined"
            @click="handleNavClick($event, item.id)"
          >
            {{ t(item.label) }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <div class="lang-switch" role="group" :aria-label="t('nav.language')">
          <button
            type="button"
            class="lang-btn"
            :aria-pressed="locale === 'en'"
            @click="setLocale('en')"
          >
            EN
          </button>
          <button
            type="button"
            class="lang-btn"
            :aria-pressed="locale === 'fr'"
            @click="setLocale('fr')"
          >
            FR
          </button>
        </div>

        <button
          v-if="themeApi"
          type="button"
          class="theme-toggle inline-flex min-h-11 items-center rounded-full border px-3 py-2 text-xs font-semibold sm:text-sm"
          :aria-label="themeApi.toggleAriaLabel"
          @click="themeApi.toggleTheme"
        >
          {{ themeApi.toggleLabel }}
        </button>

        <a
          href="/CV-OUSSAMA-SASS.pdf"
          download="CV-OUSSAMA-SASS.pdf"
          class="cv-link hidden min-h-11 items-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-4 py-2 text-sm font-semibold text-black xl:inline-flex"
        >
          {{ t('actions.cv') }}
        </a>

        <button
          type="button"
          class="menu-toggle inline-flex h-11 w-11 items-center justify-center rounded-lg text-2xl xl:hidden"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          :aria-label="isOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true">{{ isOpen ? '✕' : '☰' }}</span>
        </button>
      </div>
    </nav>

    <div
      v-if="isOpen"
      id="mobile-menu"
      class="mobile-menu border-t xl:hidden"
    >
      <ul class="flex flex-col px-4 py-3 text-base font-medium">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="nav-link flex min-h-12 items-center border-b border-white/10"
            :class="activeSection === item.id ? 'is-active' : ''"
            :aria-current="activeSection === item.id ? 'true' : undefined"
            @click="handleNavClick($event, item.id)"
          >
            {{ t(item.label) }}
          </a>
        </li>
        <li>
          <a
            href="/CV-OUSSAMA-SASS.pdf"
            download="CV-OUSSAMA-SASS.pdf"
            class="cv-link mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-5 py-3 text-center font-semibold text-black"
          >
            {{ t('actions.cv') }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
