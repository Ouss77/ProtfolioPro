<script setup>
import { computed } from 'vue'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../composables/useI18n'

const { isVisible, elementRef } = useReveal(0.12)
const { t, localizeProject } = useI18n()

const featuredProjects = computed(() =>
  projects.filter(project => project.featured).map(project => localizeProject(project))
)
const hasMore = computed(() => projects.some(project => !project.featured))
</script>

<template>
  <section
    id="projets"
    ref="elementRef"
    class="projects-section band-b px-4 py-16 text-white sm:px-6 md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl">
      <p class="projects-kicker mb-3 text-center text-sm uppercase tracking-widest text-emerald-300">
        {{ t('projectsSection.kicker') }}
      </p>

      <h2 class="projects-title mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
        {{ t('projectsSection.title') }}
      </h2>

      <p class="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-slate-200 md:mb-14 md:text-base">
        {{ t('projectsSection.intro') }}
      </p>

      <div class="grid gap-6 md:grid-cols-2 md:gap-8">
        <ProjectCard
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          v-bind="project"
          :index="index"
          :visible="isVisible"
        />
      </div>

      <div v-if="hasMore" class="mt-10 flex justify-center md:mt-12">
        <router-link
          to="/projects"
          class="projects-cta inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-400 px-8 py-3 font-semibold text-slate-950 shadow-lg hover:bg-emerald-300"
        >
          {{ t('actions.allProjects') }}
        </router-link>
      </div>
    </div>
  </section>
</template>
