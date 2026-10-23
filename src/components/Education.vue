<script setup>
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../composables/useI18n'

const { isVisible, elementRef } = useReveal(0.12)
const { t } = useI18n()
</script>

<template>
  <section
    id="education"
    ref="elementRef"
    class="band-b px-4 py-16 text-white sm:px-6 md:py-24 lg:py-32"
  >
    <div
      class="reveal mx-auto max-w-7xl"
      :class="isVisible ? 'is-in' : ''"
    >
      <div class="mb-12 text-center md:mb-20">
        <p class="mb-3 text-sm uppercase tracking-widest text-emerald-300">
          {{ t('education.kicker') }}
        </p>
        <h2 class="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {{ t('education.title') }}
        </h2>
      </div>

      <div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div class="relative">
          <h3 class="mb-12 text-2xl font-semibold text-emerald-300">
            {{ t('education.academic') }}
          </h3>

          <div class="absolute bottom-0 left-4 top-12 w-px bg-gradient-to-b from-emerald-300/70 to-transparent"></div>

          <div class="space-y-10">
            <div
              v-for="item in t('education.degrees')"
              :key="item.degree"
              class="relative pl-12"
            >
              <div class="absolute left-0 top-2 h-4 w-4 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40"></div>

              <div class="surface-card rounded-2xl p-5 sm:p-8">
                <p class="mb-2 text-sm text-emerald-300">
                  {{ item.year }}
                </p>
                <h4 class="mb-1 text-lg font-semibold text-white">
                  {{ item.degree }}
                </h4>
                <p class="text-slate-300">
                  {{ item.school }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-8 md:space-y-12">
          <div class="surface-card rounded-3xl p-6 sm:p-10">
            <h3 class="mb-8 text-2xl font-semibold text-emerald-300">
              {{ t('education.training') }}
            </h3>

            <ul class="space-y-4 text-slate-200">
              <li
                v-for="item in t('education.formations')"
                :key="item"
                class="flex items-start gap-3"
              >
                <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300"></span>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="surface-card rounded-3xl p-6 sm:p-10">
            <h3 class="mb-8 text-2xl font-semibold text-emerald-300">
              {{ t('education.certifications') }}
            </h3>

            <ul class="space-y-4 text-slate-200">
              <li
                v-for="item in t('education.certs')"
                :key="item"
                class="flex items-start gap-3"
              >
                <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300"></span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
