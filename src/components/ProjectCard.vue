<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { tf, translateLinkLabel } = useI18n()

const props = defineProps({
  id: Number,
  title: String,
  summary: String,
  description: String,
  image: String,
  imageAlt: String,
  liveUrl: String,
  liveLabel: {
    type: String,
    default: 'Live Demo'
  },
  links: {
    type: Array,
    default: () => []
  },
  tech: {
    type: Array,
    default: () => []
  },
  featured: {
    type: Boolean,
    default: false
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

const cardText = computed(() => props.summary || props.description)
const sourceLinks = computed(() => (props.links || []).filter(link => link?.href))
</script>

<template>
  <article
    :style="{ transitionDelay: visible ? index * 100 + 'ms' : '0ms' }"
    :class="visible ? 'is-in' : ''"
    class="project-card rise group relative flex h-full flex-col overflow-hidden rounded-2xl shadow-xl"
  >
    <router-link :to="`/project/${id}`" class="relative block overflow-hidden" :aria-label="tf('actions.viewProject', { title })">
      <img
        :src="image"
        :alt="imageAlt || title"
        width="640"
        height="360"
        loading="lazy"
        decoding="async"
        class="h-48 w-full object-cover sm:h-56"
      />
    </router-link>

    <div class="flex flex-1 flex-col gap-4 p-5 sm:p-6">
      <h3 class="project-card-title text-lg font-semibold leading-snug">
        <router-link :to="`/project/${id}`" class="hover:text-emerald-300 focus-visible:outline-none">
          {{ title }}
        </router-link>
      </h3>

      <p class="project-card-description text-sm leading-relaxed">
        {{ cardText }}
      </p>

      <ul class="flex flex-wrap gap-2">
        <li
          v-for="techItem in tech"
          :key="techItem"
          class="project-tech-pill rounded-full px-3 py-1 text-xs"
        >
          {{ techItem }}
        </li>
      </ul>

      <div class="mt-auto flex flex-wrap items-center gap-2 pt-1">
        <router-link
          :to="`/project/${id}`"
          class="project-btn-code inline-flex min-h-11 items-center justify-center rounded-lg border px-4 py-2 text-sm font-semibold"
        >
          {{ tf('actions.details') }}
        </router-link>

        <a
          v-if="liveUrl"
          :href="liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-btn-live inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400"
        >
          {{ translateLinkLabel(liveLabel) }}
        </a>

        <a
          v-for="link in sourceLinks"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="project-btn-code inline-flex min-h-11 items-center justify-center rounded-lg border px-4 py-2 text-sm font-semibold"
        >
          {{ translateLinkLabel(link.label) }}
        </a>
      </div>
    </div>
  </article>
</template>
