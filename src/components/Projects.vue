<script setup>
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'
import { useReveal } from '../composables/useReveal'

const { isVisible, elementRef } = useReveal(0.3)
const featuredProjects = projects.slice(0, 3)
</script>

<template>
  <section
    id="projets"
    ref="elementRef"
    class="py-32 bg-gradient-to-b from-slate-950 to-slate-900 text-white"
  >
    <div class="max-w-7xl mx-auto px-6">

      <p class="text-emerald-400 uppercase tracking-widest text-sm mb-3 text-center">
        Projets
      </p>

      <h2 class="text-4xl font-bold mb-16 text-center">
        Mes Projets
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <ProjectCard
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          :id="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :liveUrl="project.liveUrl"
          :githubUrl="project.githubUrl"
          :tech="project.tech"
          :index="index"
          :visible="isVisible"
        />

      </div>

      <div v-if="projects.length > 3" class="flex justify-center mt-12">
        <router-link
          to="/projects"
          class="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-slate-600 shadow-lg hover:shadow-slate-900/50"
        >
          Voir tous les projets
        </router-link>
      </div>

    </div>
  </section>
</template>