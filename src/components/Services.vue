<script setup>
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../composables/useI18n'

const { isVisible, elementRef } = useReveal(0.12)
const { t } = useI18n()
</script>

<template>
  <section
    id="services"
    ref="elementRef"
    class="services-section band-b px-4 py-16 text-white sm:px-6 md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 text-center md:mb-20">
        <p class="mb-3 text-sm uppercase tracking-widest text-emerald-300">
          {{ t('services.kicker') }}
        </p>
        <h2 class="services-title mb-4 text-3xl font-bold text-white sm:text-4xl md:mb-6 md:text-5xl">
          {{ t('services.title') }}
        </h2>
        <p class="services-subtitle mx-auto max-w-2xl text-slate-200">
          {{ t('services.intro') }}
        </p>
      </div>

      <div class="grid gap-5 md:grid-cols-2 md:gap-8">
        <article
          v-for="(service, index) in t('services.items')"
          :key="service.title"
          :style="{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }"
          :class="isVisible ? 'is-in' : ''"
          class="service-card surface-card group relative rounded-3xl p-6 sm:p-8 md:p-10"
        >
          <span class="service-index absolute right-5 top-5 text-4xl font-bold text-slate-500/70 sm:right-8 sm:top-6 sm:text-6xl" aria-hidden="true">
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <h3 class="mb-4 pr-12 text-xl font-semibold text-emerald-300 sm:text-2xl">
            {{ service.title }}
          </h3>

          <p class="leading-relaxed text-slate-200">
            {{ service.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
