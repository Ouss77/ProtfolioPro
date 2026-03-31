<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { projects } from '../data/projects'
import { skillsByCategory } from '../data/skills'

const route = useRoute()

const project = computed(() => {
  return projects.find(
    p => String(p.id) === String(route.params.id)
  )
})

const knownSkillLogos = Object.values(skillsByCategory)
  .flat()
  .reduce((acc, skill) => {
    acc[normalizeTechName(skill.name)] = skill.logo
    return acc
  }, {})

const techLogoOverrides = {
  tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  axios: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg',
  jest: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  jsonserver: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',
  stripe: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
  jwt: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jsonwebtokens/jsonwebtokens-original.svg',
  mernstack: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  restapi: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  ovh: 'https://cdn.simpleicons.org/ovhcloud/123f6d',
  vercel: 'https://cdn.simpleicons.org/vercel',
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
  <div class="min-h-screen bg-slate-950 text-white p-10">

    <router-link to="/" class="text-emerald-400 mb-6 inline-block">
      ← Retour
    </router-link>

    <div v-if="project">

      <h1 class="text-4xl font-bold mb-6">
        {{ project.title }}
      </h1>

      <div class="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-6 items-start mb-6">
        <img
          :src="project.image"
          :alt="`Capture du projet ${project.title}`"
          class="w-full max-w-2xl rounded-xl border border-slate-800"
        />

        <aside class="tech-panel rounded-2xl p-5 md:p-6 relative overflow-hidden">
          <div class="tech-panel-glow" aria-hidden="true"></div>

          <h2 class="text-lg font-semibold text-emerald-300 mb-1 tracking-wide relative z-10">
            Technologies utilisees
          </h2>
          <p class="text-xs text-slate-300/80 mb-4 relative z-10">
            Stack et outils utilises dans ce projet
          </p>

          <div class="grid grid-cols-2 gap-3 relative z-10">
            <div
              v-for="(tech, index) in techItems"
              :key="tech.name"
              class="tech-item rounded-xl p-3 flex flex-col items-center text-center"
              :style="{ animationDelay: `${index * 90}ms` }"
            >
              <img
                v-if="tech.logo"
                :src="tech.logo"
                :alt="tech.name"
                class="w-10 h-10 object-contain mb-2 tech-logo"
              />
              <span
                v-else
                class="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-center mb-2 tech-logo"
              >
                {{ getTechInitials(tech.name) }}
              </span>

              <p class="text-xs text-slate-100 leading-tight font-medium">
                {{ tech.name }}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <p class="text-gray-400 mb-6">
        {{ project.description }}
      </p>

      <div class="flex gap-4">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          class="px-6 py-3 bg-emerald-500 text-black rounded-lg"
        >
          Voir le site
        </a>

        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          class="px-6 py-3 border border-emerald-500 text-emerald-500 rounded-lg"
        >
          GitHub
        </a>
      </div>

    </div>

    <div v-else class="text-red-500 text-xl">
      Projet introuvable.
    </div>

  </div>
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

