<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useReveal } from '../composables/useReveal'

const experiences = [
  {
    title: 'Freelance Full-Stack Developer',
    period: 'May 2025 - Present',
    description:
      'Designing and building SaaS solutions while managing projects end to end.',
    highlights: [
      'Designed and built SaaS applications, including DoctoNest and Nabou.',
      'Managed projects from architecture through production deployment.',
      'Automated business processes to improve productivity.'
    ]
  },
  {
    title: 'Web Developer & Instructor - GoMyCode',
    period: '2023 - 2026',
    description:
      'Trained and mentored developers working with modern full-stack technologies.',
    highlights: [
      'Taught MERN, Next.js, and SQL.',
      'Mentored more than 50 projects through code reviews and debugging.',
      'Created educational content.'
    ]
  },
  {
    title: 'Web Developer & Data Analyst - Intellia',
    period: '2022',
    description:
      'Built a data application and automated analytical workflows.',
    highlights: [
      'Developed a data management application.',
      'Automated and analyzed data with Python.'
    ]
  },
  {
    title: 'Training Coordinator & Manager',
    period: '2025',
    description:
      'Coordinated training programs and led instructional teams.',
    highlights: [
      'Coordinated training programs and monitored learner progress.',
      'Managed an instructional team.'
    ]
  },
  {
    title: 'Machine Learning Developer (Internship)',
    period: '2021',
    description:
      'Designed machine learning solutions for text analysis.',
    highlights: [
      'Designed a sentiment analysis model.',
      'Implemented machine learning algorithms.'
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
    class="experience-section"
  >
    <div class="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8 md:mb-12">
        <p class="text-emerald-400 uppercase tracking-widest text-sm mb-3">
          Experience
        </p>
        <h2 class="experience-title text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          Professional Experience
        </h2>
        <p class="experience-subtitle text-gray-400 max-w-2xl mx-auto text-xs md:text-sm">
          A timeline of the roles and projects that have shaped my career.
        </p>
      </div>

      <div
        ref="mobileCarouselRef"
        class="experience-carousel md:hidden -mx-4 px-4 overflow-x-auto flex gap-3 pb-1 snap-x snap-mandatory"
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
          <div class="experience-card-mobile rounded-xl border border-slate-800 bg-slate-950/70 backdrop-blur-sm p-3.5 h-full">
            <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
              <h3 class="text-sm font-semibold text-white">
                {{ experience.title }}
              </h3>
              <span class="experience-period text-[11px] font-medium text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
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
        <div class="experience-timeline absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-emerald-500/40 via-emerald-400/20 to-transparent"></div>

        <div class="space-y-5 lg:space-y-6">
          <article
            v-for="(experience, index) in experiences"
            :key="experience.title"
            :style="{ transitionDelay: isVisible ? index * 110 + 'ms' : '0ms' }"
            :class="isVisible
              ? 'relative grid grid-cols-2 gap-6 lg:gap-8 items-start opacity-100 translate-y-0 transition-all duration-700'
              : 'relative grid grid-cols-2 gap-6 lg:gap-8 items-start opacity-0 translate-y-8'"
          >
            <div class="experience-node absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-400 shadow-md shadow-emerald-500/40"></div>

            <div
              :class="index % 2 === 0 ? 'col-start-1 pr-6 lg:pr-8' : 'col-start-2 pl-6 lg:pl-8'"
              class="experience-card rounded-2xl border border-slate-800 bg-slate-950/70 backdrop-blur-sm p-5 lg:p-6 hover:border-emerald-500/40 transition duration-300"
            >
              <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
                <h3 class="text-lg lg:text-xl font-semibold text-white">
                  {{ experience.title }}
                </h3>
                <span class="experience-period text-xs font-medium text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
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
