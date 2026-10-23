<script setup>
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../composables/useI18n'

const { isVisible, elementRef } = useReveal(0.12)
const { t } = useI18n()
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
      </div>

      <div class="relative">
        <div class="experience-timeline absolute bottom-0 left-4 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-emerald-300 via-emerald-400/40 to-transparent md:left-1/2 md:block"></div>

        <div class="space-y-4 md:space-y-6">
          <article
            v-for="(experience, index) in t('experience.items')"
            :key="experience.title"
            :style="{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }"
            :class="isVisible ? 'is-in' : ''"
            class="rise relative md:grid md:grid-cols-2 md:items-start md:gap-8"
          >
            <div class="experience-node absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-300 shadow-md shadow-emerald-400/40 md:block"></div>

            <div
              class="experience-card surface-card rounded-2xl p-5 md:p-6"
              :class="index % 2 === 0 ? 'md:col-start-1 md:mr-4' : 'md:col-start-2 md:ml-4'"
            >
              <div class="mb-3 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <h3 class="text-base font-semibold text-white md:text-lg">
                  {{ experience.title }}
                </h3>
                <p class="experience-period rounded-full border border-emerald-300/30 bg-emerald-400/15 px-2.5 py-1 text-xs font-medium text-emerald-200">
                  {{ experience.period }}
                </p>
              </div>

              <p class="mb-3 text-sm leading-relaxed text-slate-100">
                {{ experience.description }}
              </p>

              <ul class="space-y-2 text-sm text-slate-300">
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
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
