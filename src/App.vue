<script setup>
import { computed, onMounted, provide, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from './composables/useI18n'

const { t, locale, setLocale } = useI18n()

const theme = ref('dark')

function applyTheme(nextTheme) {
  theme.value = nextTheme
  const root = document.documentElement

  root.classList.toggle('light-mode', nextTheme === 'light')
  root.classList.toggle('dark-mode', nextTheme === 'dark')

  localStorage.setItem('theme', nextTheme)
}

function toggleTheme() {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark') {
    applyTheme(storedTheme)
    return
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(prefersDark ? 'dark' : 'light')
})

const toggleLabel = computed(() => (theme.value === 'dark' ? t('theme.light') : t('theme.dark')))
const toggleAriaLabel = computed(() => (
  theme.value === 'dark' ? t('theme.toLight') : t('theme.toDark')
))

provide('theme', reactive({
  toggleTheme,
  toggleLabel,
  toggleAriaLabel
}))

const route = useRoute()
const showFloatingToggle = computed(() => route.path !== '/')
</script>

<template>
  <div v-if="showFloatingToggle" class="fixed right-4 top-4 z-[90] flex items-center gap-2">
    <div class="lang-switch" role="group" :aria-label="t('nav.language')">
      <button type="button" class="lang-btn" :aria-pressed="locale === 'en'" @click="setLocale('en')">EN</button>
      <button type="button" class="lang-btn" :aria-pressed="locale === 'fr'" @click="setLocale('fr')">FR</button>
    </div>
    <button
      type="button"
      class="theme-toggle inline-flex min-h-11 items-center rounded-full border bg-slate-900/90 px-3 py-2 text-xs font-semibold shadow-lg backdrop-blur-md"
      :aria-label="toggleAriaLabel"
      @click="toggleTheme"
    >
      {{ toggleLabel }}
    </button>
  </div>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>
