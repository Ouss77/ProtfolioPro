<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, tf, translateLinkLabel } = useI18n()

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
const shortTitle = computed(() => {
  const title = props.title || ''
  const [name] = title.split(/\s[—–]\s/)
  return name || title
})

function fullLink(label) {
  return translateLinkLabel(label)
}

function shortLink(label) {
  return translateLinkLabel(label, 'short')
}
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
        class="h-32 w-full object-cover object-top sm:h-48 md:h-56"
      />
    </router-link>

    <div class="flex flex-1 flex-col gap-2.5 p-4 sm:gap-4 sm:p-6">
      <h3 class="project-card-title text-base font-semibold leading-snug sm:text-lg">
        <router-link :to="`/project/${id}`" class="hover:text-emerald-300 focus-visible:outline-none">
          <span class="sm:hidden">{{ shortTitle }}</span>
          <span class="hidden sm:inline">{{ title }}</span>
        </router-link>
      </h3>

      <p class="project-card-description line-clamp-2 text-sm leading-snug sm:line-clamp-3 sm:leading-relaxed">
        {{ cardText }}
      </p>

      <ul class="flex gap-1.5 overflow-hidden sm:flex-wrap sm:gap-2">
        <li
          v-for="(techItem, techIndex) in tech"
          :key="techItem"
          class="project-tech-pill shrink-0 rounded-full px-2 py-0.5 text-[11px] sm:px-3 sm:py-1 sm:text-xs"
          :class="techIndex > 2 ? 'hidden sm:inline-flex' : ''"
        >
          {{ techItem }}
        </li>
      </ul>

      <div class="mt-auto flex items-center gap-1.5 pt-1 sm:flex-wrap sm:gap-2">
        <router-link
          :to="`/project/${id}`"
          class="project-btn-code inline-flex min-h-11 flex-1 items-center justify-center whitespace-nowrap rounded-lg border px-1.5 py-2 text-xs font-semibold sm:flex-none sm:px-4 sm:text-sm"
          :aria-label="t('actions.details')"
        >
          <span class="sm:hidden">{{ t('actions.detailsShort') }}</span>
          <span class="hidden sm:inline">{{ t('actions.details') }}</span>
        </router-link>

        <a
          v-if="liveUrl"
          :href="liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-btn-live inline-flex min-h-11 flex-1 items-center justify-center whitespace-nowrap rounded-lg bg-emerald-500 px-1.5 py-2 text-xs font-semibold text-black hover:bg-emerald-400 sm:flex-none sm:px-4 sm:text-sm"
          :aria-label="fullLink(liveLabel)"
        >
          <span class="sm:hidden">{{ shortLink(liveLabel) }}</span>
          <span class="hidden sm:inline">{{ fullLink(liveLabel) }}</span>
        </a>

        <a
          v-for="link in sourceLinks"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="project-btn-code inline-flex min-h-11 flex-1 items-center justify-center whitespace-nowrap rounded-lg border px-1.5 py-2 text-xs font-semibold sm:flex-none sm:px-4 sm:text-sm"
          :aria-label="fullLink(link.label)"
        >
          <span class="sm:hidden">{{ shortLink(link.label) }}</span>
          <span class="hidden sm:inline">{{ fullLink(link.label) }}</span>
        </a>
      </div>
    </div>
  </article>
</template>
