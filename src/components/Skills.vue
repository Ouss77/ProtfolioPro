<script setup>
import { computed } from 'vue'
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../composables/useI18n'
import SkillCard from './SkillCard.vue'
import { skillsByCategory } from '../data/skills'

const { isVisible, elementRef } = useReveal(0.12)
const { t } = useI18n()

const skillSections = computed(() =>
  Object.entries(skillsByCategory).map(([title, skills]) => ({
    title: t(`skills.groups.${title}`),
    skills
  }))
)
</script>

<template>
  <section
    id="competences"
    ref="elementRef"
    class="band-a px-4 py-16 text-white sm:px-6 md:py-24"
    data-section="skills"
  >
    <div class="mx-auto max-w-6xl">
      <h2 class="skills-title mb-4 text-center text-3xl font-bold text-white md:mb-5 md:text-4xl">
        {{ t('skills.title') }}
      </h2>
      <p class="skills-subtitle mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-slate-200 md:mb-14 md:text-base">
        {{ t('skills.intro') }}
      </p>

      <div class="space-y-10">
        <div
          v-for="(section, index) in skillSections"
          :key="section.title"
          class="skill-group"
          :style="{ transitionDelay: isVisible ? `${index * 90}ms` : '0ms' }"
          :class="isVisible ? 'is-in' : ''"
        >
          <h3 class="mb-4 text-lg font-semibold text-white md:text-2xl">
            {{ section.title }}
          </h3>

          <div class="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:flex lg:flex-wrap lg:gap-4">
            <SkillCard
              v-for="skill in section.skills"
              :key="skill.name"
              :name="skill.name"
              :logo="skill.logo"
              class="w-full lg:w-[190px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
