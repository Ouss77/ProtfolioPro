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

const currentYear = new Date().getFullYear()
</script>

<template>
  <div>
    <Navbar />
    <Hero
      name="Oussama Sassour"
      title="Full-Stack Developer · SaaS Builder · Tech Coach"
      description="Je conçois des solutions web et SaaS performantes, en alliant architecture scalable, vision produit et expérience utilisateur.
En parallèle, je forme et accompagne des développeurs en bootcamp vers l’excellence technique."
    />
    <About />
    <Projects />
    <Skills />
    <Services />
    <Experience />
    <Education />
    <Contact />

    <footer class="bg-slate-950 border-t border-slate-800 py-6 text-center text-sm text-gray-400">
      © {{ currentYear }} Oussama Sassour. Tous droits réservés.
    </footer>
  </div>
</template>
