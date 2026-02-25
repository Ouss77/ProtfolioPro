<script setup>
import { useReveal } from '../composables/useReveal'

const { isVisible, elementRef } = useReveal(0.3)
</script>

<template>
  <section
    id="about"
    ref="elementRef"
    :class="isVisible
      ? 'py-32 bg-slate-950 text-white opacity-100 translate-y-0 transition-all duration-1000'
      : 'py-32 bg-slate-950 text-white opacity-0 translate-y-10'"
  >
    <div class="max-w-7xl mx-auto px-6">

      <!-- Title -->
      <div class="text-center mb-20">
        <p class="text-emerald-400 uppercase tracking-widest text-sm mb-3">
          À propos
        </p>

        <h2 class="text-5xl font-bold mb-4">
          Qui suis-je ?
        </h2>

        <p class="text-gray-400 max-w-2xl mx-auto">
          Passionné par la technologie et l'innovation, je transforme des idées
          en produits digitaux performants.
        </p>
      </div>

      <!-- Content -->
      <div class="grid md:grid-cols-2 gap-16 items-center">

        <!-- Image Column -->
        <div class="relative flex flex-col items-center">

          <!-- Glow background -->
          <div class="absolute w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div>

          <!-- Profile Image -->
          <div class="relative">
            <img
              src="../images/pr.jpg"
              class="w-64 h-64 object-fit rounded-full border border-emerald-500/30 shadow-2xl"
            />

            <!-- Experience Badge -->
            <div class="absolute bottom-0 right-0 bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              5+ ans exp.
            </div>
          </div>

        </div>

        <!-- Text Column -->
        <div>

          <p class="text-gray-300 leading-relaxed mb-6">
Développeur  <span class="text-emerald-400 font-semibold">
              Full Stack
            </span>et entrepreneur, j’évolue à l’intersection entre technologie, produit et transmission.
Mon parcours m’a amené à concevoir des solutions digitales de A à Z : de l’étude de marché à l’architecture technique, jusqu’à l’optimisation de l’expérience utilisateur.
En parallèle, j’accompagne des développeurs en bootcamp en tant que coach formateur, avec une approche orientée rigueur, autonomie et compréhension réelle des concepts.
Aujourd’hui, je cherche à contribuer à des projets ambitieux — en freelance ou en équipe — où la technique sert une vision claire et durable.           

          </p>

          <p class="text-gray-400 leading-relaxed mb-8">
            Mon approche combine expertise technique et vision produit.
            De la conception à la mise en production,
            je m’assure que chaque projet atteint l’excellence.
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-400 text-sm">
              Full Stack
            </span>
            <span class="px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-400 text-sm">
              Machine Learning
            </span>
            <span class="px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-400 text-sm">
              SaaS
            </span>
            <span class="px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-400 text-sm">
              DevOps
            </span>
          </div>

        </div>

      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12 text-center mt-24">

        <div>
          <h3 class="text-4xl font-bold text-emerald-400">10+</h3>
          <p class="text-gray-500 text-sm mt-2">Projets réalisés</p>
        </div>

        <div>
          <h3 class="text-4xl font-bold text-emerald-400">10+</h3>
          <p class="text-gray-500 text-sm mt-2">Technologies maîtrisées </p>
        </div>

        <div>
          <h3 class="text-4xl font-bold text-emerald-400">5+</h3>
          <p class="text-gray-500 text-sm mt-2">Clients satisfaits</p>
        </div>

        <div>
          <h3 class="text-4xl font-bold text-emerald-400">99%</h3>
          <p class="text-gray-500 text-sm mt-2">Taux de satisfaction</p>
        </div>

      </div>

    </div>
  </section>
</template>
