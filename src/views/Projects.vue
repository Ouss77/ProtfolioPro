<script setup>
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <section class="projects-page relative overflow-hidden min-h-screen py-24 md:py-28 text-white">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="projects-glow projects-glow-left"></div>
      <div class="projects-glow projects-glow-right"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <router-link
        to="/"
        class="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 transition-colors duration-300 mb-8"
      >
        <span aria-hidden="true">←</span>
        Retour a l'accueil
      </router-link>

      <div class="text-center mb-12 md:mb-16">
        <p class="text-emerald-400 uppercase tracking-widest text-sm mb-3">
          Portfolio
        </p>
        <h1 class="text-3xl md:text-5xl font-bold mb-4 text-white">
          Tous mes projets
        </h1>
        <p class="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
          Une selection complete de mes realisations, du SaaS au machine learning.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :id="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :liveUrl="project.liveUrl"
          :githubUrl="project.githubUrl"
          :tech="project.tech"
          :index="index"
          :visible="true"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-page {
  background:
    radial-gradient(circle at 10% 8%, rgba(16, 185, 129, 0.16), transparent 36%),
    radial-gradient(circle at 85% 0%, rgba(14, 165, 233, 0.15), transparent 34%),
    linear-gradient(180deg, #020617, #0b1222 56%, #0f172a);
}

.projects-glow {
  position: absolute;
  width: 22rem;
  height: 22rem;
  border-radius: 9999px;
  filter: blur(72px);
  opacity: 0.24;
}

.projects-glow-left {
  top: -4rem;
  left: -6rem;
  background: #10b981;
}

.projects-glow-right {
  top: -5rem;
  right: -5rem;
  background: #06b6d4;
}
</style>