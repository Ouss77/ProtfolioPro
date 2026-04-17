<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: Number,
  title: String,
  description: String,
  image: String,
  liveUrl: String,
  githubUrl: String,
  tech: {
    type: Array,
    default: () => []
  },
  index: {
    type: Number,
    default: 0
  },
  visible: {
    type: Boolean,
    default: true
  }
})

const hasCodeLink = computed(() => Boolean(props.githubUrl && props.githubUrl.trim()))
const router = useRouter()

function goToProjectDetails() {
  if (props.id !== undefined && props.id !== null) {
    router.push(`/project/${props.id}`)
  }
}
</script>

<template>
  <article
    role="link"
    tabindex="0"
    @click="goToProjectDetails"
    @keydown.enter.prevent="goToProjectDetails"
    @keydown.space.prevent="goToProjectDetails"
    :style="{ transitionDelay: visible ? index * 150 + 'ms' : '0ms' }"
    :class="visible
      ? 'project-card group relative bg-slate-900/70 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-black/30 hover:shadow-emerald-500/25 hover:-translate-y-1 hover:scale-[1.015] transition-all duration-500 opacity-100 translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'
      : 'project-card group relative bg-slate-900/70 border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-black/30 opacity-0 translate-y-10 cursor-pointer'"
  >

    <div class="relative overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="h-56 w-full object-cover transform group-hover:scale-110 transition duration-500"
      />
    </div>

    <div class="p-6 space-y-4">

      <h3 class="project-card-title font-semibold text-lg text-white leading-snug">
        {{ title }}
      </h3>

      <p class="project-card-description text-gray-300 text-sm leading-relaxed overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-h-[2.75rem]">
        {{ description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="techItem in tech"
          :key="techItem"
          class="project-tech-pill px-3 py-1 text-xs bg-slate-700 text-emerald-400 rounded-full"
        >
          {{ techItem }}
        </span>
      </div>

      <div class="flex items-center gap-2 pt-1">
        <a
          v-if="liveUrl"
          :href="liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
          class="project-btn-live inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-black hover:bg-emerald-400 transition-colors duration-300"
        >
          Live Demo
        </a>

        <a
          v-if="hasCodeLink"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
          class="project-btn-code inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg border border-slate-600 text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition-all duration-300"
        >
          Code
        </a>

        <span
          v-else
          class="project-btn-disabled inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg border border-slate-700 text-slate-500 cursor-not-allowed"
        >
          Code
        </span>
      </div>

    </div>

  </article>
</template>
