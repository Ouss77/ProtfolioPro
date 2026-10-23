<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import { scrollToSection } from '../utils/scrollToSection'

const { t } = useI18n()

const whatsappHref = computed(() => {
  const text = encodeURIComponent(t('actions.whatsappText'))
  return `https://wa.me/212699945245?text=${text}`
})
</script>

<template>
  <section
    id="accueil"
    class="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-28 text-white sm:px-6 lg:pt-24"
  >
    <div class="hero-photo pointer-events-none absolute inset-0 lg:hidden" aria-hidden="true">
      <img
        src="../images/her.png"
        alt=""
        class="h-full w-full object-cover object-[center_18%]"
      />
    </div>

    <div class="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
      <div class="hero-copy space-y-5 sm:space-y-6">
        <p class="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">
          {{ t('hero.eyebrow') }}
        </p>

        <h1 class="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Oussama Sassour
        </h1>

        <h2 class="text-xl font-semibold leading-snug text-emerald-400 sm:text-2xl">
          {{ t('hero.title') }}
        </h2>

        <p class="max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
          {{ t('hero.description') }}
        </p>

        <p class="max-w-xl text-sm leading-relaxed text-slate-300">
          {{ t('hero.coach') }}
        </p>

        <div class="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
          <a
            href="#projets"
            class="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-3 text-center font-semibold text-black hover:opacity-90"
            @click="scrollToSection('projets', $event)"
          >
            {{ t('actions.viewProjects') }}
          </a>

          <a
            :href="whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400 bg-slate-950/35 px-6 py-3 text-center font-semibold text-emerald-300 backdrop-blur-sm hover:bg-emerald-500 hover:text-black"
          >
            {{ t('actions.whatsapp') }}
          </a>
        </div>
      </div>

      <div class="relative hidden justify-center lg:flex">
        <div class="absolute h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" aria-hidden="true"></div>

        <img
          src="../images/her.png"
          :alt="t('hero.imageAlt')"
          width="420"
          height="420"
          fetchpriority="high"
          class="hero-portrait relative w-full max-w-md drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>
