<script setup>
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../composables/useI18n'

const { isVisible, elementRef } = useReveal(0.15)
const { t } = useI18n()
</script>

<template>
  <section
    id="about"
    ref="elementRef"
    class="band-a px-4 py-16 text-white sm:px-6 md:py-24 lg:py-32"
  >
    <div
      class="reveal mx-auto max-w-7xl"
      :class="isVisible ? 'is-in' : ''"
    >
      <div class="mb-12 text-center md:mb-20">
        <p class="mb-3 text-sm uppercase tracking-widest text-emerald-300">
          {{ t('about.kicker') }}
        </p>

        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {{ t('about.title') }}
        </h2>

        <p class="mx-auto max-w-2xl text-slate-200">
          {{ t('about.intro') }}
        </p>
      </div>

      <div class="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div class="relative flex flex-col items-center">
          <div class="absolute h-56 w-56 rounded-full bg-emerald-400/25 blur-3xl sm:h-72 sm:w-72" aria-hidden="true"></div>

          <div class="relative">
            <img
              src="../images/pr.jpg"
              :alt="t('about.portraitAlt')"
              width="256"
              height="256"
              loading="lazy"
              decoding="async"
              class="hero-portrait h-48 w-48 rounded-full border border-emerald-300/40 object-cover shadow-2xl sm:h-64 sm:w-64"
            />

            <p class="absolute -bottom-3 left-1/2 w-max max-w-[16rem] -translate-x-1/2 rounded-full bg-emerald-400 px-4 py-2 text-center text-xs font-semibold text-slate-950 shadow-lg sm:text-sm">
              {{ t('about.badge') }}
            </p>
          </div>
        </div>

        <div class="pt-4 md:pt-0">
          <p class="mb-6 leading-relaxed text-slate-100">
            {{ t('about.p1Before') }}
            <span class="font-semibold text-emerald-300">{{ t('about.p1Emphasis') }}</span>
            {{ t('about.p1After') }}
          </p>

          <p class="mb-6 leading-relaxed text-slate-100">
            {{ t('about.p2') }}
          </p>

          <p class="mb-8 leading-relaxed text-slate-300">
            {{ t('about.p3') }}
          </p>

          <ul class="flex flex-wrap gap-2 sm:gap-3">
            <li
              v-for="tag in t('about.tags')"
              :key="tag"
              class="rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>

      <ul class="mt-16 grid gap-4 sm:grid-cols-3 md:mt-24">
        <li
          v-for="(item, index) in t('about.focus')"
          :key="item.title"
          class="surface-card rise rounded-2xl p-5 text-left"
          :style="{ transitionDelay: isVisible ? `${160 + index * 90}ms` : '0ms' }"
          :class="isVisible ? 'is-in' : ''"
        >
          <h3 class="text-base font-semibold text-emerald-300">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-200">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
