<script setup>
import { onMounted, ref } from 'vue'
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../composables/useI18n'

const { isVisible, elementRef } = useReveal(0.12)
const { t } = useI18n()

const openIndex = ref(null)
const pinnedIndex = ref(null)
const suppressHover = ref(false)
const canHover = ref(false)

onMounted(() => {
  canHover.value = window.matchMedia('(hover: hover) and (pointer: fine)').matches
})

function isOpen(index) {
  return pinnedIndex.value === index || openIndex.value === index
}

function toggle(index) {
  if (pinnedIndex.value === index) {
    pinnedIndex.value = null
    openIndex.value = null
    suppressHover.value = true
    return
  }

  pinnedIndex.value = index
  suppressHover.value = false
}

function onEnter(index) {
  if (!canHover.value || suppressHover.value) {
    return
  }
  openIndex.value = index
}

function onLeave() {
  openIndex.value = null
  suppressHover.value = false
}
</script>

<template>
  <section
    id="experiences"
    ref="elementRef"
    class="experience-section band-a px-4 py-16 text-white sm:px-6 md:py-20"
  >
    <div class="mx-auto max-w-6xl lg:max-w-[84rem]">
      <div class="mb-8 text-center md:mb-12">
        <p class="mb-3 text-sm uppercase tracking-widest text-emerald-300">
          {{ t('experience.kicker') }}
        </p>
        <h2 class="experience-title mb-3 text-3xl font-bold text-white md:mb-4 md:text-4xl">
          {{ t('experience.title') }}
        </h2>
        <p class="experience-subtitle mx-auto max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
          {{ t('experience.intro') }}
        </p>
        <p class="mx-auto mt-2 max-w-2xl text-sm text-slate-300">
          {{ t('experience.hint') }}
        </p>
      </div>

      <div class="relative">
        <div class="experience-timeline absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-emerald-300 via-emerald-400/40 to-transparent md:left-1/2"></div>

        <div class="space-y-4 md:space-y-6">
          <article
            v-for="(experience, index) in t('experience.items')"
            :key="experience.title"
            class="rise relative pl-8 md:grid md:grid-cols-2 md:items-start md:gap-8 md:pl-0"
            :style="{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }"
            :class="isVisible ? 'is-in' : ''"
            @mouseenter="onEnter(index)"
            @mouseleave="onLeave"
          >
            <div class="experience-node absolute left-4 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-300 shadow-md shadow-emerald-400/40 md:left-1/2"></div>

            <div
              class="experience-card surface-card overflow-hidden rounded-2xl"
              :class="index % 2 === 0 ? 'md:col-start-1 md:mr-8' : 'md:col-start-2 md:ml-8'"
            >
              <h3>
                <button
                  type="button"
                  class="flex w-full items-start justify-between gap-3 p-5 text-left md:p-6"
                  :aria-expanded="isOpen(index)"
                  :aria-controls="`experience-panel-${index}`"
                  @click="toggle(index)"
                  @focus="onEnter(index)"
                  @blur="onLeave"
                >
                  <span class="min-w-0">
                    <span class="block text-base font-semibold text-white md:text-lg">
                      {{ experience.title }}
                    </span>
                    <span class="experience-period mt-2 inline-flex rounded-full border border-emerald-300/30 bg-emerald-400/15 px-2.5 py-1 text-xs font-medium text-emerald-200">
                      {{ experience.period }}
                    </span>
                  </span>
                  <svg
                    class="experience-chevron mt-1 h-5 w-5 shrink-0 text-emerald-300"
                    :class="isOpen(index) ? 'is-open' : ''"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </h3>

              <div
                :id="`experience-panel-${index}`"
                class="experience-panel"
                :class="isOpen(index) ? 'is-open' : ''"
                :aria-hidden="!isOpen(index)"
                :inert="!isOpen(index)"
              >
                <div class="experience-panel-inner">
                  <div class="px-5 pb-5 md:px-6 md:pb-6">
                    <p class="text-sm leading-relaxed text-slate-100">
                      {{ experience.description }}
                    </p>
                    <ul class="mt-3 space-y-2 text-sm text-slate-300">
                      <li
                        v-for="point in experience.highlights"
                        :key="point"
                        class="flex items-start gap-3"
                      >
                        <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" aria-hidden="true"></span>
                        <span>{{ point }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s ease;
}

.experience-panel.is-open {
  grid-template-rows: 1fr;
}

.experience-panel-inner {
  overflow: hidden;
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.experience-panel.is-open .experience-panel-inner {
  opacity: 1;
  transform: none;
  transition-delay: 0.05s;
}

.experience-chevron {
  transition: transform 0.35s ease;
}

.experience-chevron.is-open {
  transform: rotate(180deg);
}
</style>
