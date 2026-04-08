<script setup>
import { useReveal } from '../composables/useReveal'

const education = [
  {
    year: "2019 - 2021",
    degree: "Master en Big Data & Management",
    school: "Université de Bahçeşehir, Istanbul (Turquie)"
  },
  {
    year: "2015 - 2018",
    degree: "Licence en Génie Informatique",
    school: "Faculté des Sciences et Techniques de Fès (Maroc)"
  }
]

const formations = [
  "MERN Stack Bootcamp",
  "Programme d’Entrepreneuriat & Incubation de Startups (U-Founders – UM6P)"]

const certifications = [
  "Back-End Apps with Node.js and Express (IBM)",
  "Front-End Developer (Meta)",
  "Responsive Web Design (freeCodeCamp)",
  "Agile Software Development (Coursera)"
]

const { isVisible, elementRef } = useReveal(0.3)
</script>

<template>
  <section
    id="education"
    ref="elementRef"
    :class="isVisible
      ? 'py-32 bg-slate-900 text-white opacity-100 translate-y-0 transition-all duration-1000'
      : 'py-32 bg-slate-900 text-white opacity-0 translate-y-10'"
  >
    <div class="max-w-7xl mx-auto px-6">

      <!-- Title -->
      <div class="text-center mb-20">
        <p class="text-emerald-400 uppercase tracking-widest text-sm mb-3">
          Éducation
        </p>
        <h2 class="text-5xl font-bold">
          Parcours & Formations
        </h2>
      </div>

      <!-- GRID PRINCIPALE -->
      <div class="grid lg:grid-cols-2 gap-20">

        <!-- EDUCATION -->
<!-- EDUCATION -->
<div class="relative">

  <h3 class="text-2xl font-semibold text-emerald-400 mb-12">
    Parcours Académique
  </h3>

  <!-- Vertical Line -->
  <div class="absolute left-4 top-12 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 to-transparent"></div>

  <div class="space-y-16">

    <div
      v-for="(item, index) in education"
      :key="item.degree"
      class="relative pl-12"
    >

      <!-- Dot -->
      <div class="absolute left-0 top-2 w-4 h-4 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/40"></div>

      <!-- Card -->
      <div class="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/40 transition duration-500">

        <p class="text-emerald-400 text-sm mb-2">
          {{ item.year }}
        </p>

        <h4 class="text-lg font-semibold mb-1">
          {{ item.degree }}
        </h4>

        <p class="text-gray-400">
          {{ item.school }}
        </p>

      </div>

    </div>

  </div>

</div>


        <!-- FORMATIONS & CERTIFS -->
        <div class="space-y-16">

          <!-- Formations -->
          <div class="bg-slate-950 border border-slate-800 p-10 rounded-3xl">
            <h3 class="text-2xl font-semibold mb-8 text-emerald-400">
              Formations Complémentaires
            </h3>

            <ul class="space-y-4 text-gray-400">
              <li
                v-for="item in formations"
                :key="item"
                class="flex items-start gap-3"
              >
                <span class="w-2 h-2 mt-2 bg-emerald-400 rounded-full"></span>
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Certifications -->
          <div class="bg-slate-950 border border-slate-800 p-10 rounded-3xl">
            <h3 class="text-2xl font-semibold mb-8 text-emerald-400">
              Certifications
            </h3>

            <ul class="space-y-4 text-gray-400">
              <li
                v-for="item in certifications"
                :key="item"
                class="flex items-start gap-3"
              >
                <span class="w-2 h-2 mt-2 bg-emerald-400 rounded-full"></span>
                {{ item }}
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
