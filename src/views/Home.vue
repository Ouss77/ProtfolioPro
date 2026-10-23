<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Projects from '../components/Projects.vue'
import Skills from '../components/Skills.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import Experience from '../components/Experience.vue'
import Education from '../components/Education.vue'
import Contact from '../components/Contact.vue'

import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <div>
    <Navbar />
    <main id="main">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Experience />
      <Education />
      <Contact />
    </main>

    <footer class="site-footer border-t px-4 py-8 text-center text-sm">
      <p>© {{ currentYear }} Oussama Sassour. {{ t('footer.rights') }}</p>
      <p class="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <a class="underline-offset-4 hover:text-emerald-300 hover:underline" href="mailto:oussamasassour@gmail.com">{{ t('footer.email') }}</a>
        <a class="underline-offset-4 hover:text-emerald-300 hover:underline" href="https://github.com/Ouss77" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a class="underline-offset-4 hover:text-emerald-300 hover:underline" href="/CV-OUSSAMA-SASS.pdf" download="CV-OUSSAMA-SASS.pdf">{{ t('footer.cv') }}</a>
      </p>
    </footer>
  </div>
</template>
