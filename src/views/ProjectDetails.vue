<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { projects } from '../data/projects'
import { skillsByCategory } from '../data/skills'
import { useI18n } from '../composables/useI18n'

const route = useRoute()
const { t, localizeProject, translateLinkLabel } = useI18n()

const project = computed(() => {
  const match = projects.find(
    p => String(p.id) === String(route.params.id)
  )
  return match ? localizeProject(match) : null
})

const knownSkillLogos = Object.values(skillsByCategory)
  .flat()
  .reduce((acc, skill) => {
    acc[normalizeTechName(skill.name)] = skill.logo
    return acc
  }, {})

const techLogoOverrides = {
  tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  axios: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg',
  jest: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  jsonserver: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',
  stripe: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
  jwt: 'https://cdn.simpleicons.org/jsonwebtokens',
  mernstack: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  restapi: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  ovh: 'https://cdn.simpleicons.org/ovhcloud/123f6d',
  vercel: 'https://cdn.simpleicons.org/vercel',
  render: 'https://cdn.simpleicons.org/render',
  matplotlib: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  scikitlearn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  supabase: 'https://cdn.simpleicons.org/supabase/3ecf8e',
  vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
}

function normalizeTechName(value = '') {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function resolveTechLogo(techName) {
  const key = normalizeTechName(techName)
  return knownSkillLogos[key] || techLogoOverrides[key] || null
}

const techItems = computed(() => {
  if (!project.value?.tech?.length) {
    return []
  }

  return project.value.tech.map(name => ({
    name,
    logo: resolveTechLogo(name)
  }))
})

function getTechInitials(name = '') {
  const cleaned = name.replace(/[^A-Za-z0-9 ]/g, '').trim()
  if (!cleaned) {
    return '??'
  }

  const words = cleaned.split(/\s+/)
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase()
  }

  return cleaned.slice(0, 2).toUpperCase()
}
</script>


<template>
  <main id="main" class="project-detail min-h-screen px-4 py-8 text-white sm:px-6 sm:py-10 md:p-10">
    <div class="mx-auto max-w-6xl">
      <router-link to="/projects" class="mb-6 inline-flex min-h-11 items-center text-emerald-300">
        ← {{ t('actions.allProjectsBack') }}
      </router-link>

      <div v-if="project">
        <p class="mb-2 text-sm uppercase tracking-widest text-emerald-300">{{ t('projectPage.kicker') }}</p>
        <h1 class="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
          {{ project.title }}
        </h1>

        <div class="mb-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <img
            :src="project.image"
            :alt="project.imageAlt || `Screenshot of ${project.title}`"
            width="960"
            height="540"
            class="w-full rounded-xl border border-slate-800"
          />

          <aside class="tech-panel relative overflow-hidden rounded-2xl p-5 md:p-6">
            <div class="tech-panel-glow" aria-hidden="true"></div>

            <h2 class="relative z-10 mb-1 text-lg font-semibold tracking-wide text-emerald-300">
              {{ t('projectPage.techTitle') }}
            </h2>
            <p class="relative z-10 mb-4 text-xs text-slate-200">
              {{ t('projectPage.techNote') }}
            </p>

            <ul class="relative z-10 grid grid-cols-2 gap-3">
              <li
                v-for="(tech, index) in techItems"
                :key="tech.name"
                class="tech-item flex flex-col items-center rounded-xl p-3 text-center"
                :style="{ animationDelay: `${index * 90}ms` }"
              >
                <img
                  v-if="tech.logo"
                  :src="tech.logo"
                  alt=""
                  class="tech-logo mb-2 h-10 w-10 object-contain"
                />
                <span
                  v-else
                  class="tech-logo mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/20 text-xs font-bold text-emerald-300"
                  aria-hidden="true"
                >
                  {{ getTechInitials(tech.name) }}
                </span>

                <p class="text-xs font-medium leading-tight text-slate-100">
                  {{ tech.name }}
                </p>
              </li>
            </ul>
          </aside>
        </div>

        <p class="mb-6 max-w-3xl leading-relaxed text-slate-100">
          {{ project.description }}
        </p>

        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-black"
          >
            {{ translateLinkLabel(project.liveLabel || 'Live Demo') }}
          </a>

          <a
            v-for="link in project.links || []"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-11 items-center justify-center rounded-lg border border-emerald-500 px-6 py-3 font-semibold text-emerald-400"
          >
            {{ translateLinkLabel(link.label) }}
          </a>
        </div>
      </div>

      <div v-else>
        <h1 class="text-2xl font-semibold text-white">{{ t('projectPage.missingTitle') }}</h1>
        <p class="mt-3 text-slate-300">{{ t('projectPage.missingText') }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.tech-panel {
  background:
    radial-gradient(circle at 10% 10%, rgba(16, 185, 129, 0.2), transparent 40%),
    radial-gradient(circle at 90% 0%, rgba(52, 211, 153, 0.12), transparent 35%),
    linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.98));
  border: 1px solid rgba(16, 185, 129, 0.25);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);
}

.tech-panel-glow {
  position: absolute;
  inset: -40%;
  background: conic-gradient(from 180deg, rgba(16, 185, 129, 0.22), transparent, rgba(52, 211, 153, 0.15), transparent);
  filter: blur(22px);
  animation: pulseSpin 9s linear infinite;
  pointer-events: none;
}

.tech-item {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.86), rgba(2, 6, 23, 0.9));
  border: 1px solid rgba(148, 163, 184, 0.2);
  backdrop-filter: blur(6px);
  transform: translateY(12px) scale(0.98);
  opacity: 0;
  animation: revealTech 0.55s ease forwards;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.tech-item:hover {
  transform: translateY(-6px) scale(1.03);
  border-color: rgba(52, 211, 153, 0.65);
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
}

.tech-item:hover .tech-logo {
  animation: logoFloat 0.8s ease;
}

@keyframes revealTech {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes logoFloat {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  40% {
    transform: translateY(-4px) rotate(-5deg);
  }
  70% {
    transform: translateY(-1px) rotate(4deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

@keyframes pulseSpin {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.08);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
</style>
