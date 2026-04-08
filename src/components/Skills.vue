<script setup>
import { computed } from 'vue'
import { useReveal } from '../composables/useReveal'
import SkillCard from './SkillCard.vue'
import { skillsByCategory } from '../data/skills'

const { isVisible, elementRef } = useReveal(0.2)

const skillSections = computed(() => [
  {
    title: 'Technologies principales',
    skills: [
      skillsByCategory.Frontend.find(skill => skill.name === 'React'),
      skillsByCategory.Frontend.find(skill => skill.name === 'Next.js'),
      skillsByCategory.Backend.find(skill => skill.name === 'Node.js'),
      skillsByCategory.Backend.find(skill => skill.name === 'Express.js'),
      skillsByCategory.Frontend.find(skill => skill.name === 'Tailwind CSS')
    ].filter(Boolean)
  },
  {
    title: 'Outils & environnement',
    skills: [
      skillsByCategory.DevOps.find(skill => skill.name === 'Git'),
      skillsByCategory.DevOps.find(skill => skill.name === 'GitHub'),
      skillsByCategory.DevOps.find(skill => skill.name === 'Docker'),
      skillsByCategory.DevOps.find(skill => skill.name === 'Vercel'),
      skillsByCategory.DevOps.find(skill => skill.name === 'OVH'),
      skillsByCategory.DevOps.find(skill => skill.name === 'Postman'),
      skillsByCategory.Backend.find(skill => skill.name === 'REST APIs')
    ].filter(Boolean)
  },
  {
    title: 'Data & IA',
    skills: skillsByCategory.ML
  },
  {
    title: 'Autres',
    skills: skillsByCategory.Other
  }
])
</script>

<template>
  <section
    id="competences"
    ref="elementRef"
    class="py-24 md:py-28 bg-slate-950 text-white"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <h2 class="text-3xl md:text-4xl font-bold text-center mb-14 md:mb-16">
        Compétences
      </h2>

      <div class="space-y-10 md:space-y-12">
        <div
          v-for="(section, index) in skillSections"
          :key="section.title"
          :style="{ transitionDelay: isVisible ? index * 120 + 'ms' : '0ms' }"
          :class="isVisible
            ? 'opacity-100 translate-y-0 transition-all duration-700'
            : 'opacity-0 translate-y-6'"
        >
          <h3 class="text-xl md:text-2xl font-semibold mb-5 md:mb-6 text-white/95">
            {{ section.title }}
          </h3>

          <div class="md:hidden -mx-4 px-4 overflow-x-auto flex gap-2.5 pb-2 snap-x snap-mandatory">
            <SkillCard
              v-for="skill in section.skills"
              :key="skill.name"
              :name="skill.name"
              :logo="skill.logo"
              class="w-[62vw] max-w-[220px] shrink-0 snap-start"
            />
          </div>

          <div class="hidden md:flex flex-wrap gap-3 md:gap-4">
            <SkillCard
              v-for="skill in section.skills"
              :key="skill.name"
              :name="skill.name"
              :logo="skill.logo"
              class="w-[170px] lg:w-[190px]"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
