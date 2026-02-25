<script setup>
import { useReveal } from '../composables/useReveal'

const services = [
  {
    id: "01",
    title: "Full Stack Development",
    description:
      "Développement d’applications web modernes, performantes et scalables avec une architecture robuste."
  },
  {
    id: "02",
    title: "SaaS & MVP",
    description:
      "Conception et lancement rapide de produits SaaS orientés marché et utilisateurs."
  },
  {
    id: "03",
    title: "Machine Learning",
    description:
      "Intégration de modèles d’IA et automatisation intelligente des processus métiers."
  },
  {
    id: "04",
    title: "DevOps & Cloud",
    description:
      "Mise en production sécurisée, CI/CD, monitoring et optimisation des performances."
  }
]

const { isVisible, elementRef } = useReveal(0.3)
</script>

<template>
  <section
    id="services"
    ref="elementRef"
    :class="isVisible
      ? 'py-32 bg-slate-950 text-white opacity-100 translate-y-0 transition-all duration-1000'
      : 'py-32 bg-slate-950 text-white opacity-0 translate-y-10'"
  >
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="text-center mb-24">
        <p class="text-emerald-400 uppercase tracking-widest text-sm mb-3">
          Services
        </p>
        <h2 class="text-5xl font-bold mb-6">
          Services
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Des solutions techniques alignées avec vos objectifs business.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 gap-12">

        <div
          v-for="(service, index) in services"
          :key="service.id"
          :style="{ transitionDelay: isVisible ? index * 150 + 'ms' : '0ms' }"
          :class="isVisible
            ? 'group relative p-12 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-700 opacity-100 translate-y-0'
            : 'group relative p-12 rounded-3xl border border-slate-800 bg-slate-900/40 opacity-0 translate-y-10'"
        >

          <!-- Big Number -->
          <span class="absolute top-6 right-8 text-6xl font-bold text-slate-800 group-hover:text-emerald-500/20 transition duration-500">
            {{ service.id }}
          </span>

          <h3 class="text-2xl font-semibold mb-6 text-emerald-400">
            {{ service.title }}
          </h3>

          <p class="text-gray-400 leading-relaxed">
            {{ service.description }}
          </p>

        </div>

      </div>

    </div>
  </section>
</template>
