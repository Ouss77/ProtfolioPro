<script setup>
import { computed, onMounted, ref } from 'vue'

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

const toggleLabel = computed(() => (theme.value === 'dark' ? 'Light mode' : 'Dark mode'))
</script>

<template>
  <button
    type="button"
    class="fixed bottom-5 right-5 z-[90] rounded-full border border-emerald-500/40 bg-slate-900/90 px-4 py-2 text-sm font-semibold text-emerald-300 shadow-lg backdrop-blur-md hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-200"
    @click="toggleTheme"
  >
    {{ toggleLabel }}
  </button>

  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
</template>
