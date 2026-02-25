<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { projects } from '../data/projects'

const route = useRoute()

const project = computed(() => {
  return projects.find(
    p => String(p.id) === String(route.params.id)
  )
})
console.log('Project found:', project.value)
</script>


<template>
  <div class="min-h-screen bg-slate-950 text-white p-10">

    <router-link to="/" class="text-emerald-400 mb-6 inline-block">
      ← Retour
    </router-link>

    <div v-if="project">

      <h1 class="text-4xl font-bold mb-6">
        {{ project.title }}
      </h1>

      <img
        :src="project.image"
        class="w-full max-w-3xl rounded-xl mb-6"
      />

      <p class="text-gray-400 mb-6">
        {{ project.description }}
      </p>

      <div class="flex gap-4">
        <a
          :href="project.liveUrl"
          target="_blank"
          class="px-6 py-3 bg-emerald-500 text-black rounded-lg"
        >
          Voir le site
        </a>

        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          class="px-6 py-3 border border-emerald-500 text-emerald-500 rounded-lg"
        >
          GitHub
        </a>
      </div>

    </div>

    <div v-else class="text-red-500 text-xl">
      Projet introuvable.
    </div>

  </div>
</template>

