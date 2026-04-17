<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const activeSection = ref('accueil')

const navItems = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'services', label: 'Services' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'education', label: 'Parcours' },
  { id: 'contact', label: 'Contact' }
]

const setActiveSection = (id) => {
  if (navItems.some(item => item.id === id)) {
    activeSection.value = id
  }
}

const updateActiveFromScroll = () => {
  const sectionIds = navItems.map(item => item.id)
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean)

  if (!sections.length) {
    return
  }

  const offset = window.scrollY + window.innerHeight * 0.35
  let currentId = sectionIds[0]

  sections.forEach((section) => {
    if (section.offsetTop <= offset) {
      currentId = section.id
    }
  })

  setActiveSection(currentId)
}

const handleHashChange = () => {
  const id = window.location.hash.replace('#', '')
  if (id) {
    setActiveSection(id)
  }
}

const handleNavClick = (id) => {
  setActiveSection(id)
  closeMobileMenu()
}

onMounted(() => {
  handleHashChange()
  updateActiveFromScroll()

  window.addEventListener('scroll', updateActiveFromScroll, { passive: true })
  window.addEventListener('hashchange', handleHashChange)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveFromScroll)
  window.removeEventListener('hashchange', handleHashChange)
})

const closeMobileMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
    
    <nav class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between shadow-lg
">
      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-8 text-gray-300 font-medium">
        <li
          v-for="item in navItems"
          :key="item.id"
        >
          <a
            :href="`#${item.id}`"
            class="relative transition duration-300"
            :class="activeSection === item.id ? 'text-emerald-400' : 'hover:text-emerald-400'"
            @click="handleNavClick(item.id)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Desktop CTA -->
      <div class="hidden md:block">
        <a
          href="/CV-OUSSAMA-SASS.pdf"
          download="CV-OUSSAMA-SASS.pdf"
          class="px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold hover:opacity-90 transition hover:scale-105 duration-300 inline-block"
        >
          Télécharger CV
        </a>
      </div>

      <!-- Mobile Button -->
      <button 
        class="md:hidden text-white text-2xl"
        @click="isOpen = !isOpen"
      > 
        {{ isOpen ? '✕' : '☰' }}  
      </button>
    </nav> 

    <!-- Mobile Menu -->
    <div 
      v-if="isOpen"
      class="md:hidden bg-slate-900 border-t border-white/10"
    >
      <ul class="flex flex-col p-6 gap-6 text-gray-300 font-medium">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="transition"
          :class="activeSection === item.id ? 'text-emerald-400' : 'hover:text-emerald-400'"
          @click="handleNavClick(item.id)" 
        >
          {{ item.label }}
        </a>
        <a
          href="/CV-OUSSAMA-SASS.pdf"
          download="CV-OUSSAMA-SASS.pdf"
          class="mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold inline-block text-center"
        >
          Télécharger CV
        </a>
      </ul>
    </div>

  </header>
</template>
