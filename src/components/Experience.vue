<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useReveal } from '../composables/useReveal'

const experiences = [
  {
    title: 'Développeur Full-Stack Freelance',
    period: 'Mai 2025 - Présent',
    description:
      'Conception et développement de solutions SaaS avec pilotage complet des projets.',
    highlights: [
      'Conception et développement d\'applications SaaS, dont DoctoNest et Nabou.',
      'Pilotage des projets de l\'architecture au déploiement en production.',
      'Automatisation de processus métiers pour améliorer la productivité.'
    ]
  },
  {
    title: 'Développeur Web & Formateur - GoMyCode',
    period: '2023 - 2026',
    description:
      'Formation et accompagnement technique de développeurs sur des stacks Full-Stack modernes.',
    highlights: [
      'Formation en MERN, Next.js et SQL.',
      'Mentorat sur plus de 50 projets avec code review et debugging.',
      'Création de contenus pédagogiques.'
    ]
  },
  {
    title: 'Développeur Web & Data Analyst - Intellia',
    period: '2022',
    description:
      'Développement d\'une application data et automatisation de traitements analytiques.',
    highlights: [
      'Développement d\'une application de gestion de données.',
      'Automatisation et analyse de données avec Python.'
    ]
  },
  {
    title: 'Coordinateur & Responsable de Formation',
    period: '2025',
    description:
      'Coordination de programmes de formation et encadrement d\'équipes pédagogiques.',
    highlights: [
      'Coordination de programmes de formation et suivi des parcours.',
      'Management d\'équipe pédagogique.'
    ]
  },
  {
    title: 'Développeur Machine Learning (Stage)',
    period: '2021',
    description:
      'Conception de solutions de machine learning orientées analyse de texte.',
    highlights: [
      'Conception d\'un modèle d\'analyse de sentiments.',
      'Implémentation d\'algorithmes de machine learning.'
    ]
  }
]

const { isVisible, elementRef } = useReveal(0.25)

const mobileCarouselRef = ref(null)
let autoplayTimer = null

const startAutoplay = () => {
  if (autoplayTimer || !mobileCarouselRef.value) {
    return
  }

  autoplayTimer = setInterval(() => {
    const el = mobileCarouselRef.value
    if (!el || window.innerWidth >= 768) {
      return
    }

    const firstCard = el.querySelector('article')
    if (!firstCard) {
      return
    }

    const cardWidth = firstCard.getBoundingClientRect().width
    const targetStep = Math.max(220, Math.round(cardWidth + 12))
    const maxScrollLeft = el.scrollWidth - el.clientWidth
    const nextLeft = el.scrollLeft + targetStep

    el.scrollTo({
      left: nextLeft >= maxScrollLeft - 4 ? 0 : nextLeft,
      behavior: 'smooth'
    })
  }, 2800)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section
    id="experiences"
    ref="elementRef"
    :class="isVisible
      ? 'py-16 md:py-20 bg-slate-900 text-white opacity-100 translate-y-0 transition-all duration-1000'
      : 'py-16 md:py-20 bg-slate-900 text-white opacity-0 translate-y-10'"
  >
    <div class="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8 md:mb-12">
        <p class="text-emerald-400 uppercase tracking-widest text-sm mb-3">
          Expériences
        </p>
        <h2 class="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          Parcours Professionnel
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto text-xs md:text-sm">
          Un format plus dynamique: swipe en mobile et timeline alternée sur desktop.
        </p>
      </div>

      <div
        ref="mobileCarouselRef"
        class="md:hidden -mx-4 px-4 overflow-x-auto flex gap-3 pb-1 snap-x snap-mandatory"
        @touchstart="stopAutoplay"
        @touchend="startAutoplay"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <article
          v-for="(experience, index) in experiences"
          :key="`mobile-${experience.title}`"
          :style="{ transitionDelay: isVisible ? index * 90 + 'ms' : '0ms' }"
          :class="isVisible
            ? 'w-[82vw] max-w-[320px] shrink-0 snap-start opacity-100 translate-y-0 transition-all duration-700'
            : 'w-[82vw] max-w-[320px] shrink-0 snap-start opacity-0 translate-y-8'"
        >
          <div class="rounded-xl border border-slate-800 bg-slate-950/70 backdrop-blur-sm p-3.5 h-full">
            <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
              <h3 class="text-sm font-semibold text-white">
                {{ experience.title }}
              </h3>
              <span class="text-[11px] font-medium text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                {{ experience.period }}
              </span>
            </div>

            <p class="text-gray-300 mb-2.5 text-[11px] leading-relaxed">
              {{ experience.description }}
            </p>

            <ul class="space-y-1 text-gray-400 text-[11px]">
              <li
                v-for="point in experience.highlights"
                :key="`mobile-${experience.title}-${point}`"
                class="flex items-start gap-2.5"
              >
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div class="hidden md:block relative">
        <div class="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-emerald-500/40 via-emerald-400/20 to-transparent"></div>

        <div class="space-y-5 lg:space-y-6">
          <article
            v-for="(experience, index) in experiences"
            :key="experience.title"
            :style="{ transitionDelay: isVisible ? index * 110 + 'ms' : '0ms' }"
            :class="isVisible
              ? 'relative grid grid-cols-2 gap-6 lg:gap-8 items-start opacity-100 translate-y-0 transition-all duration-700'
              : 'relative grid grid-cols-2 gap-6 lg:gap-8 items-start opacity-0 translate-y-8'"
          >
            <div class="absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-400 shadow-md shadow-emerald-500/40"></div>

            <div
              :class="index % 2 === 0 ? 'col-start-1 pr-6 lg:pr-8' : 'col-start-2 pl-6 lg:pl-8'"
              class="rounded-2xl border border-slate-800 bg-slate-950/70 backdrop-blur-sm p-5 lg:p-6 hover:border-emerald-500/40 transition duration-300"
            >
              <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
                <h3 class="text-lg lg:text-xl font-semibold text-white">
                  {{ experience.title }}
                </h3>
                <span class="text-xs font-medium text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {{ experience.period }}
                </span>
              </div>

              <p class="text-gray-300 mb-3 leading-relaxed text-sm">
                {{ experience.description }}
              </p>

              <ul class="space-y-1.5 text-gray-400 text-sm">
                <li
                  v-for="point in experience.highlights"
                  :key="`${experience.title}-${point}`"
                  class="flex items-start gap-3"
                >
                  <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
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
