<script setup>
defineProps({
  id: Number,
  title: String,
  description: String,
  image: String,
  liveUrl: String,
  githubUrl: String,
  tech: Array,
  index: Number,
  visible: Boolean
})
</script>

<template>
  <div
    :style="{ transitionDelay: visible ? index * 150 + 'ms' : '0ms' }"
    :class="visible
      ? 'group relative bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-emerald-500/20 transition-all duration-700 opacity-100 translate-y-0'
      : 'group relative bg-slate-800 rounded-2xl overflow-hidden shadow-md opacity-0 translate-y-10'"
  >

    <div class="relative overflow-hidden">
      <img
        :src="image"
        class="h-56 w-full object-cover transform group-hover:scale-110 transition duration-500"
      />

      <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
        <router-link
          :to="`/project/${id}`"
          class="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg"
        >
          Voir le projet
        </router-link>
      </div>
    </div>

    <div class="p-6 space-y-4">

      <h3 class="font-semibold text-lg">
        {{ title }}
      </h3>

      <p class="text-gray-400 text-sm overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
        {{ description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="techItem in tech"
          :key="techItem"
          class="px-3 py-1 text-xs bg-slate-700 text-emerald-400 rounded-full"
        >
          {{ techItem }}
        </span>
      </div>

      <div v-if="githubUrl">
        <a
          :href="githubUrl"
          target="_blank"
          class="text-sm text-gray-400 hover:text-white transition"
        >
          GitHub →
        </a>
      </div>

    </div>

  </div>
</template>
