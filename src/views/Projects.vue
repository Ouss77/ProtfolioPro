<script setup>
import { computed } from 'vue'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
import { useI18n } from '../composables/useI18n'

const { t, localizeProject } = useI18n()
const localizedProjects = computed(() => projects.map(project => localizeProject(project)))
</script>

<template>
  <section id="main" class="projects-page relative min-h-screen overflow-hidden px-0 py-24 text-white md:py-28">
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
        {{ t('projectsPage.back') }}
      </router-link>

      <div class="text-center mb-12 md:mb-16">
        <p class="text-emerald-300 uppercase tracking-widest text-sm mb-3">
          {{ t('projectsPage.kicker') }}
        </p>
        <h1 class="mb-4 text-3xl font-bold text-white md:text-5xl">
          {{ t('projectsPage.title') }}
        </h1>
        <p class="mx-auto max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
          {{ t('projectsPage.intro') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        <ProjectCard
          v-for="(project, index) in localizedProjects"
          :key="project.id"
          v-bind="project"
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
    radial-gradient(circle at 10% 8%, rgba(16, 185, 129, 0.18), transparent 36%),
    radial-gradient(circle at 85% 0%, rgba(125, 211, 252, 0.14), transparent 34%),
    linear-gradient(180deg, #1a2a44, #243656 56%, #2c4064);
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