<script setup>
import { useReveal } from '../composables/useReveal'
import SkillCard from './SkillCard.vue'
import { skillsByCategory } from '../data/skills'

const { isVisible, elementRef } = useReveal(0.3)
</script>

<template>
  <section
    id="competences"
    ref="elementRef"
    class="py-32 bg-slate-950 text-white"
  >
    <div class="max-w-7xl mx-auto px-6">

      <p class="text-emerald-400 uppercase tracking-widest text-sm mb-3 text-center">
        Compétences
      </p>

      <h2 class="text-4xl font-bold text-center mb-20">
        Compétences
      </h2>

      <div class="grid md:grid-cols-4 gap-12">

        <div
          v-for="(skills, category, index) in skillsByCategory"
          :key="category"
          :style="{ transitionDelay: isVisible ? index * 150 + 'ms' : '0ms' }"
          :class="isVisible
            ? 'opacity-100 translate-y-0 transition-all duration-700'
            : 'opacity-0 translate-y-10'"
        >
          <!-- Category Title -->
          <h3 class="text-xl font-semibold mb-8 text-emerald-400 text-center">
            {{ category }}
          </h3>

          <!-- Skills -->
          <div class="space-y-6">

<div class="space-y-6">
  <SkillCard
    v-for="skill in skills"
    :key="skill.name"
    :name="skill.name"
    :logo="skill.logo"
  />
</div>


          </div>
        </div>

      </div>

    </div>
  </section>
</template>
